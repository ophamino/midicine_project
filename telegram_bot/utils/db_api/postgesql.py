from typing import Union

import asyncpg
from asyncpg import Connection
from asyncpg.pool import Pool

from data import config


class Database:

    def __init__(self):
        self.pool: Union[Pool, None] = None

    async def create(self):
        self.pool = await asyncpg.create_pool(
            user=config.DB_USER,
            password=config.DB_PASS,
            host=config.DB_HOST,
            database=config.DB_NAME
        )

    async def execute(self, command, *args,
                      fetch: bool = False,
                      fetchval: bool = False,
                      fetchrow: bool = False,
                      execute: bool = False
                      ):
        async with self.pool.acquire() as connection:
            connection: Connection
            async with connection.transaction():
                if fetch:
                    result = await connection.fetch(command, *args)
                elif fetchval:
                    result = await connection.fetchval(command, *args)
                elif fetchrow:
                    result = await connection.fetchrow(command, *args)
                elif execute:
                    result = await connection.execute(command, *args)
            return result

    async def create_table_users(self):
        sql = """
                CREATE TABLE IF NOT EXISTS USERS(
                    id BIGINT NOT NULL UNIQUE, 
                    id_website INT UNIQUE
                    );
        """  # IF NOT EXISTS - позволяет избежать ошибки если таблица создана
        await self.execute(sql, execute=True)

    async def create_table_duel(self):
        sql = """
                CREATE TABLE IF NOT EXISTS USERS(
                    user1 INT,
                    user2 INT,
                    quantity_answers_user1 INT,
                    quantity_answers_user2 INT,
                    id_quizy INT
                    );
        """  # IF NOT EXISTS - позволяет избежать ошибки если таблица создана
        await self.execute(sql, execute=True)

    @staticmethod
    def format_args(sql, parameters: dict):
        sql += " AND ".join([
            f"{item} = ${num}" for num, item, in enumerate(parameters.keys(), start=1)
        ])
        return sql, tuple(parameters.values())

    # добавление пользователя
    async def add_user(self, id, id_website):  # добавляем пользователя
        sql = "INSERT INTO users (id, id_website) VALUES($1, $2) returning *"
        return await self.execute(sql, id, id_website, fetchrow=True)

    async def add_duel(self, user1, user2, quantity_answers_user1, quantity_answers_user2, id_quizy):  # добавляем пользователя
        sql = "INSERT INTO duel (user1, user2, quantity_answers_user1, quantity_answers_user2, id_quizy) VALUES($1, $2, $3, $4, $5) returning *"
        return await self.execute(sql, user1, user2, quantity_answers_user1, quantity_answers_user2, id_quizy, fetchrow=True)

    async def select_all_users(self):  # все юзеры
        sql = "SELECT * FROM Users"
        return await self.execute(sql, fetch=True)

    async def select_all_duel(self):  # все юзеры
        sql = "SELECT * FROM duel"
        return await self.execute(sql, fetch=True)

    async def select_user(self, **kwargs):  # 1 юзер
        sql = "SELECT * FROM Users WHERE "
        sql, parameters = self.format_args(sql, parameters=kwargs)
        return await self.execute(sql, *parameters, fetchrow=True)