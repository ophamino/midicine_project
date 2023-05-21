from django.shortcuts import render
from rest_framework import generics, viewsets, response

from .models import Exam, Answer, Question
from .serialazers import ExamSerialazers, Timeline, TotalExamSerialazers


class QuizListAPIView(generics.ListAPIView):
    queryset = Exam.published.all()
    serializer_class = ExamSerialazers


class QuizAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exam.published.all()
    serializer_class = ExamSerialazers

    
class QuizCreateAPIView(generics.CreateAPIView):
    queryset = Exam.object.all()
    serializer_class = ExamSerialazers


class ExamViewSet(viewsets.ViewSet):
    def list(self, request, pk=None):
        
        tameline = Timeline(exam=Exam.objects.filter(pk=request.pk),
                            questions=Question.objects.filter(pk=request.pk),
                            answer=Answer.objects.filter(pk=request.pk))
        serialazer = TotalExamSerialazers(tameline)
        return response.Response(serialazer.data)