from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class ExamPublishedManager(models.Manager):
    """Manager for choices by published status"""
    def get_queryset(self):
        return super().get_queryset().filter(status=Exam.Status.PUBLISHED)


class Exam(models.Model):
    """Модель экзамена"""

    class Status(models.TextChoices):
        DRAFT = 'DF', 'Draft'
        PUBLISHED = 'PB', 'Published'

    title = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='exam_photo', null=True)
    discription = models.TextField()
    slug = models.SlugField(max_length=250, unique=True, unique_for_date=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2,
                              choices=Status.choices,
                              default=Status.DRAFT)
    
    object = models.Manager()  
    published = ExamPublishedManager()

    class Meta:
        ordering = ['-date_created']
        indexes = [models.Index(fields=['-date_created'])]

    def __str__(self):
        return self.title


class Question(models.Model):
    """Модель вопроса"""
    title = models.CharField(max_length=255)
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Answer(models.Model):
    """Модель ответов"""
    answer = models.CharField(max_length=100)
    status = models.BooleanField(default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return self.answer
