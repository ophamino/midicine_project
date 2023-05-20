from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

start = ReplyKeyboardMarkup(
    keyboard=[
        [
            KeyboardButton(text="❔ Тестирование")
        ],
        [
            KeyboardButton(text="👤 Профиль")
        ]
    ],
    resize_keyboard=True
)