import random

import requests
from aiogram import types

from loader import dp, db


@dp.message_handler(text='⚔️ Бросить вызов')
async def duel_func(message: types.Message):
    # тащим тесты
    BASE_URL = 'http://127.0.0.1:8000/api/v1/exams/list'
    response = requests.get(f"{BASE_URL}")
    all_quizy = response.json()

    if await db.select_all_duel_searh_user() == 1:
        await message.answer("Вы уже в очереди")
    else:
        all_duel = await db.select_all_duel()
        if all_duel == []:
            await db.add_duel(id=1, user1=message.from_user.id, id_quizy=random.choice(all_quizy)['id'])  # добавляем пользователя в очередь
            await db.update_user_id_session(id_session_duel=1, id=message.from_user.id)  # привязали дуэль к юзеру
            await message.answer("Поиск соперника 🔍")
        else:
            duel_start = await db.select_all_duel_start()
            if duel_start == []:
                id_session = all_duel[-1]['id'] + 1
                await db.add_duel(id=id_session, id_quizy=random.choice(all_quizy)['id'],
                                  user1=message.from_user.id)  # добавляем пользователя в очередь
                await db.update_user_id_session(id_session_duel=id_session, id=message.from_user.id)  # привязали дуэль к юзеру
                await message.answer("Поиск соперника 🔍")
            else:

                await message.answer("Соперник найден!")
                await db.update_duel_user2(user2=message.from_user.id, id=duel_start[0]['id'])
                await db.update_user_id_session(id_session_duel=duel_start[0]['id'],
                                                id=message.from_user.id)  # привязали дуэль к юзеру
