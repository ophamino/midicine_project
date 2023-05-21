from rest_framework import serializers
from .models import Exam, Question, Answer

from collections import namedtuple


class ExamListSerialazers(serializers.ModelField):
    class Mets:
        model = Exam
        fields = ['id', 'title', 'photo', 'discription']


class ExamSerialazers(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = ['id', 'title', 'photo', 'discription', 'date_created', 'date_updated', 'author']


class QuestionSerialazers(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['title', 'exam']


class AnswerSerialazers(serializers.Serializer):
    class Meta:
        model = Answer
        fields = ['answer', 'status', 'question']

class TotalExamSerialazers(serializers.Serializer):
    exam = ExamSerialazers
    question = QuestionSerialazers
    answer = AnswerSerialazers


Timeline = namedtuple('Timeline', ('exam','questions', 'answer'))