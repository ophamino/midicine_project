from aiogram import types

from loader import dp
import requests


@dp.message_handler(text='👤 Профиль')
async def profile_func(message: types.Message):
    BASE_URL = 'http://127.0.0.1:8000/api/v1/account'
    response = requests.get(f"{BASE_URL}/user/update/1")
    data_user_api = response.json()
    await message.answer("Ваш профиль:\n\n"
                         f"Имя: {data_user_api['first_name']}\n"
                         f"Фамилия: {data_user_api['last_name']}\n"
                         f"Емайл: {data_user_api['email']}\n"
                         f"Телефон: {data_user_api['phone']}\n"
                         f"Должность: {data_user_api['position']}\n"
                         f"Отделение: {data_user_api['departament']}")