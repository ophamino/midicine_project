import logging
from aiogram import Dispatcher

from data.config import admins


async def on_startup_notify(dp: Dispatcher):
    for admin in admins:
        try:
            await dp.bot.send_message(admin, "Бот Запущен и готов к работе!")

        except Exception as err:
            logging.exception(err)


async def on_startup_notify_cron(dp: Dispatcher):
    for admin in admins:
        try:
            await dp.bot.send_message(admin, "<b>Cron</b> запущен и готов к работе!")

        except Exception as err:
            logging.exception(err)
