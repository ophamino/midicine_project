
import requests
from aiogram import types

from keyboards.inline.user_inline import url_website
from loader import dp, db


@dp.message_handler(text='🔥 Рейтинг')
async def rating_func(message: types.Message):
    data_user = await db.select_user(id=message.from_user.id)

    BASE_URL = 'http://127.0.0.1:8000/api/v1/account/rating'
    response = requests.get(f"{BASE_URL}")
    users = response.json()

    text_message = '🌟 <b>Рейтинг пользователей по опыту:</b> \n\n'
    for user in users:
        text_message += f"{user['last_name']} {user['first_name']} - {user['expirience']}\n"

    await message.answer(text_message)

    if data_user['id_website'] == None:
        await message.answer("Пройдите авторизацию, чтобы попасть в рейтинг!", reply_markup=url_website())
