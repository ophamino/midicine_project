from rest_framework import serializers

from .models import Exam, Answer, Question


class ExamListAPIViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = ['id', 'title', 'discription', 'author']


class QuestionListAPIViewSerializer(serializers.Serializer):
    class Meta:
        model = Question
        fields = ['exam', 'title']


class AnwerListAPIViewSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['question', 'title', 'status']