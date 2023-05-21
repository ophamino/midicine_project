from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def url_website(text_button="Пройти авторизацию 🔗"):
    keyboard = InlineKeyboardMarkup(row_width=2)
    keyboard.add(InlineKeyboardButton(text=f"{text_button}", url="devmosh.ru"))
    return keyboard