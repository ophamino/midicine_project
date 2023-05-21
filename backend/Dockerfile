FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY requrements.txt /code/
RUN pip install -r requrements.txt
COPY . /code/
