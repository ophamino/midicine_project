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
                    id_website INT UNIQUE,
                    id_session_duel INT
                    );
        """  # IF NOT EXISTS - позволяет избежать ошибки если таблица создана
        await self.execute(sql, execute=True)

    async def create_table_duel(self):
        sql = """
                CREATE TABLE IF NOT EXISTS DUEL(
                    id INT NOT NULL UNIQUE,
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

    async def add_duel(self, id, id_quizy, user1, user2=None, quantity_answers_user1=None, quantity_answers_user2=None):  # добавляем пользователя
        sql = "INSERT INTO duel (id, user1, user2, quantity_answers_user1, quantity_answers_user2, id_quizy) VALUES($1, $2, $3, $4, $5, $6) returning *"
        return await self.execute(sql, id, user1, user2, quantity_answers_user1, quantity_answers_user2, id_quizy, fetchrow=True)

    async def select_all_users(self):  # все юзеры
        sql = "SELECT * FROM Users"
        return await self.execute(sql, fetch=True)

    async def select_all_duel(self):  # все юзеры
        sql = "SELECT * FROM Duel"
        return await self.execute(sql, fetch=True)

    async def select_user(self, **kwargs):  # 1 юзер
        sql = "SELECT * FROM Users WHERE "
        sql, parameters = self.format_args(sql, parameters=kwargs)
        return await self.execute(sql, *parameters, fetchrow=True)

    async def select_duel(self, **kwargs):  # 1 юзер
        sql = "SELECT * FROM Duel WHERE "
        sql, parameters = self.format_args(sql, parameters=kwargs)
        return await self.execute(sql, *parameters, fetchrow=True)

    async def select_all_duel_start(self):
        sql = "SELECT * FROM Duel WHERE user1 IS NOT NULL"
        return await self.execute(sql, fetch=True)

    async def select_all_duel_searh_user(self):  # количество пользователей
        sql = "SELECT COUNT(*) FROM Users WHERE id_session_duel==1"
        return await self.execute(sql, fetchval=True)

    async def update_duel_user2(self, user2, id):
        sql = f"""
            UPDATE DUEL SET user2=$1 WHERE id=$2
            """
        return await self.execute(sql, user2, id, execute=True)

    async def update_user_id_website(self, id_website, id):
        sql = f"""
            UPDATE USERS SET id_website=$1 WHERE id=$2
        """
        return await self.execute(sql, id_website, id, execute=True)

    async def update_user_id_session(self, id_session_duel, id):
        sql = f"""
            UPDATE USERS SET id_session_duel=$1 WHERE id=$2
        """
        return await self.execute(sql, id_session_duel, id, execute=True)