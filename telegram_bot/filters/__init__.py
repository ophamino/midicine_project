from aiogram import Dispatcher

from .group_chat import IsGroup
from .private_chat import IsPrivate
from .admins import AdminFilter
from .forwarded_massage import IsForwarded


def setup(dp: Dispatcher):
    dp.filters_factory.bind(IsPrivate)
    dp.filters_factory.bind(AdminFilter)
    dp.filters_factory.bind(IsGroup)
