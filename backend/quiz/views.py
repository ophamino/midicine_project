from django.shortcuts import render
from rest_framework import generics

from .models import Exam
from .serialazers import ExamSerialazers


class QuizListAPIView(generics.ListAPIView):
    queryset = Exam.published.all()
    serializer_class = ExamSerialazers


class QuizAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exam.published.all()
    serializer_class = ExamSerialazers

    
class QuizCreateAPIView(generics.CreateAPIView):
    queryset = Exam.object.all()
    serializer_class = ExamSerialazers