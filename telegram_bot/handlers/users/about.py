from aiogram import types

from keyboards.inline.user_inline import about_inline
from loader import dp


@dp.message_handler(text='💭 О нас')
async def about_func(message: types.Message):
    await message.answer("<b>MedSkillz Team</b> - команда энтузиастов, которая разработала для вас полезный продукт! "
                         "С нашим продуктом, вы всегда сможете восполнить или же повысить уровень своего проффесионализма.\n\n"
                         "<b>• Что умеет эта платформа?:</b>\n"
                         "- Более 100+ тестов и ежедневных заданий!\n"
                         "- Поднимайся в топе, зарабатывая опыт!\n"
                         "- Бросай вызов другим специалистам в своей области!\n", reply_markup=about_inline())
