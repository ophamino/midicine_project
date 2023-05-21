from aiogram import types

from keyboards.inline.user_inline import exams_inline
from loader import dp

@dp.message_handler(text='💡 Тестирование')
async def exams_func(message: types.Message):

    text_message = '🕘 Последние тесты:\n\n'

    await message.answer(text_message, reply_markup=exams_inline())