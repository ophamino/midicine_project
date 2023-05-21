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
    BASE_URL = 'http://127.0.0.1:8000/api/v1/exams/list/'
    response = requests.get(f"{BASE_URL}")
    exams = response.json()

    keyboard = InlineKeyboardMarkup(row_width=2)
    print(exams)
    for exam in exams:
        keyboard.add(InlineKeyboardButton(text=f"{exam['title']} | 50 баллов", url=f"devmosh.ru/exam/{exam['id']}"))

    return keyboard