import asyncpg
from aiogram import types
from aiogram.dispatcher.filters import CommandStart

from keyboards.inline.user_inline import url_website
from keyboards.defaultt.keyboards_menu import start
from loader import dp, db


@dp.message_handler(CommandStart(), state="*")
async def start_text(message: types.Message):
    try:
        if message.text[7:17] == 'id_website':
            id_website = int(message.text[18:])
            await db.add_user(
                id=message.from_user.id,
                id_website=id_website
            )
            await message.answer("❤️ Спасибо за авторизацию в боте через сайт! \n\n"
                                 "👇 Воспользуйтесь меню 👇", reply_markup=start())
        else:
            await db.add_user(
                id=message.from_user.id,
                id_website=None
            )

            await message.answer('Добро пожаловать!', reply_markup=start())
            await message.answer(f'В этом боте вы можете проходить тесты и улучшать '
                                 f'свои знания. \n\n'
                                 f'Перейдите по кнопке для полного функционала бота 👇', reply_markup=url_website())

    except asyncpg.exceptions.UniqueViolationError:
        if message.text[7:17] == 'id_website':
            id_website = int(message.text[18:])
            await db.update_user_id_website(id_website=id_website, id=message.from_user.id)
            await message.answer("❤️ Спасибо за авторизацию в боте через сайт! \n\n"
                                 "👇 Воспользуйтесь меню 👇", reply_markup=start())

        else:
            print(message.text[18:])
            # print(await db.select_all_users())
            data_user = await db.select_user(id=message.from_user.id)
            # print(data_user)

            if data_user['id_website'] == None:
                await message.answer('Добро пожаловать!', reply_markup=start())

                await message.answer(f'Пройдите авторизацию, для доступа к полному функционалу бота!',
                                     reply_markup=url_website())
            else:
                await message.answer(f"Добро пожаловать в бот {message.from_user.id}.\n\n", reply_markup=start())
