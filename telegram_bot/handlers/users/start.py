import asyncpg
from aiogram import types
from aiogram.dispatcher.filters import CommandStart

from keyboards.inline.user_inline import url_website
from keyboards.defaultt.keyboards_menu import start
from loader import dp, db


@dp.message_handler(CommandStart(), state="*")
async def start_text(message: types.Message):
    try:
        await db.add_user(
            id=message.from_user.id,
            id_website=None
        )
        await message.answer('Добро пожаловать!', reply_markup=start())
        await message.answer(f'В этом боте вы можете проходить тесты и проверять '
                             f'свои знания. \n\n'
                             f'Вы можете проходить тесты как в боте, так и на сайте, чтобы '
                             f'связать свой аккаунт с ботом, необходимо авторизоваться на нашем сайте и'
                             f' перейти по ссылке, которая находится в личном кабинете на сайте.', reply_markup=url_website())

    except asyncpg.exceptions.UniqueViolationError:
        print(await db.select_all_users())
        data_user = await db.select_user(id=message.from_user.id)
        print(data_user)

        if data_user['id_website'] == None:
            await message.answer('Добро пожаловать!', reply_markup=start())

            await message.answer(f'Желаете пройти авторизацию, перейдите по ссылке в личном кабинете на сайте',
                                 reply_markup=url_website())
        else:
            await message.answer(f"Добро пожаловать в бот {message.from_user.id}.\n\n", reply_markup=start())
