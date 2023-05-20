from rest_framework import serializers
from .models import Exam


class ExamSerialazers(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = ['id', 'title', 'photo', 'discription', 'date_created', 'date_updated']
