from django.contrib import admin
from .models import Exam, Question, Answer


@admin.register(Exam)
class ExamAdmin(admin.ModelAdmin):
    list_display = ['title', 'date_created', 'date_updated', 'status']
    list_filter = ['status', 'date_created']
    search_fields = ['title', 'discription']
    date_hierarchy = 'date_created'
    ordering = ['status', 'date_created']


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ['answer']