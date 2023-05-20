import asyncpg
from aiogram import types
from aiogram.dispatcher.filters import CommandStart

from keyboards.inline.user_inline import url_website
from loader import dp, db


@dp.message_handler(CommandStart(), state="*")
async def start_text(message: types.Message):
    try:
        await db.add_user(
            id=message.from_user.id,
            id_website=None
        )
        await message.answer(f'Добро пожаловать! Для использования бота необходимо запустить '
                             f'бот через сайт, ссылка находится в личном кабинете.', reply_markup=url_website())

    except asyncpg.exceptions.UniqueViolationError:
        print(await db.select_all_users())
        data_user = await db.select_user(id=message.from_user.id)
        print(data_user)
        if data_user['id_website'] == None:
            await message.answer(f'Вы все еще не авторизовались в боте, для '
                             f'авторизации перейдите по ссылке в личном кабинете на сайте', reply_markup=url_website())
        else:
            await message.answer(f"Добро пожаловать в бот {message.from_user.id}.\n\n")
