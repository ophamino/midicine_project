

from loader import db
from utils.notify_admins import on_startup_notify
import filters
import middlewares
from aiogram import executor
from handlers import dp


async def on_startup(dp):
    filters.setup(dp)
    middlewares.setup(dp)
    await db.create()  # создаем подключение к базе данных
    await db.create_table_users()  # создаем таблицу пользователей
    # print(await db.select_all_users())
    await on_startup_notify(dp)


if __name__ == '__main__':
    executor.start_polling(dp, on_startup=on_startup)
