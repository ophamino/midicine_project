from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Exam(models.Model):
    title = models.CharField(max_length=255)
    discription = models.TextField()
    author = models.ForeignKey(User, models.CASCADE)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Question(models.Model):
    title = models.CharField(max_length=255)
    exam = models.ForeignKey(Exam, models.CASCADE)

    def __str__(self):
        return self.title


class Answer(models.Model):\

    class Status(models.TextChoices):
        TRUE = 'T', "Верно"
        FALSE = 'f', 'Неверно'

    title = models.CharField(max_length=255)
    question = models.ForeignKey(Question, models.CASCADE)
    status = models.CharField(max_length=1, choices=Status.choices, default=Status.FALSE)

    def __str__(self):
        return self.title