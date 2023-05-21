import requests
from aiogram import types

from loader import dp, db


@dp.message_handler(text='⚔️ Бросить вызов')
async def duel_func(message: types.Message):
    # тащим тесты
    BASE_URL = 'http://127.0.0.1:8000/api/v1/exams'
    response = requests.get(f"{BASE_URL}")
    all_quizy = response.json()
    print(all_quizy)

    # all_duel = await db.select_all_duel()
    # if all_duel == []:
    #     await db.add_duel(id_quizy=, user1=message.from_user.id)
    #     await message.answer("Поиск соперника 🔍")
    # else:
    #     # проходимся по всем дуэлям и ищем свободный
    #     search_duel = 0
    #     for duel in all_duel:
    #         if duel['user2'] == None:
    #             search_duel = 1
    #             await message.answer("Собеседник найден, давайте играть!")
    #             break
    #
    #     if search_duel == 0:
    #         await db.add_duel(id_quizy=, user1=message.from_user.id)
    #         await message.answer("Поиск соперника 🔍")

