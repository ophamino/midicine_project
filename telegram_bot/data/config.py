import os

from dotenv import load_dotenv

load_dotenv()


DB_USER = 'postgres'
DB_PASS = 'm@sh2021'
DB_NAME = 'MedSkillz'
DB_HOST = 'localhost'  # 127.0.0.1 на сервере нужно прописать db

BOT_TOKEN = str(os.getenv("BOT_TOKEN"))

admins = [1881571115]