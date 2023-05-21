from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

def start():
    keyboard = ReplyKeyboardMarkup(row_width=2)
    keyboard.add(KeyboardButton(text=f"❔ Тестирование"),
                 KeyboardButton(text=f"⚔️ Бросить вызов"))
    keyboard.add(KeyboardButton(text=f"🔥 Рейтинг"),
        KeyboardButton(text=f"👤 Профиль"))
    keyboard.add(KeyboardButton(text=f"💭 О нас"))
    return keyboard