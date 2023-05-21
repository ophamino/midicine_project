import requests
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def url_website(text_button="Пройти авторизацию 🔗"):
    keyboard = InlineKeyboardMarkup(row_width=2)
    keyboard.add(InlineKeyboardButton(text=f"{text_button}", url="devmosh.ru"))
    return keyboard


def about_inline():
    keyboard = InlineKeyboardMarkup(row_width=2)
    keyboard.add(InlineKeyboardButton(text=f"📰 Популярные статьи", callback_data="devmosh.ru"))
    keyboard.add(InlineKeyboardButton(text=f"❔ Часто задаваемые вопросы", callback_data="devmosh.ru"))
    return keyboard


def exams_inline():
    # BASE_URL = 'http://127.0.0.1:8000/api/v1/account/rating'
    # response = requests.get(f"{BASE_URL}")
    # exams = response.json()
    # print(exams)

    keyboard = InlineKeyboardMarkup(row_width=2)
    # for exam in exams:
    #     keyboard.add(InlineKeyboardButton(text=f"📰 Популярные статьи", callback_data="devmosh.ru"))
    #     keyboard.add(InlineKeyboardButton(text=f"❔ Часто задаваемые вопросы", callback_data="devmosh.ru"))

    keyboard.add(InlineKeyboardButton(text=f"Тест 1 | 50 баллов", url="devmosh.ru/exams/1"))
    keyboard.add(InlineKeyboardButton(text=f"Тест 2 | 90 баллов", url="devmosh.ru/exams/2"))
    keyboard.add(InlineKeyboardButton(text=f"Тест 3 | 130 баллов", url="devmosh.ru/exams/3"))
    keyboard.add(InlineKeyboardButton(text=f"Тест 4 | 100 баллов", url="devmosh.ru/exams/4"))
    keyboard.add(InlineKeyboardButton(text=f"Тест 5 | 30 баллов ", url="devmosh.ru/exams/5"))

    return keyboard