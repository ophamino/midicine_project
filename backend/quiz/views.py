from django.shortcuts import render
from .serialazers import QuestionListAPIViewSerializer, AnwerListAPIViewSerialazer, ExamListAPIViewSerializer
from rest_framework import generics
from rest_framework import viewsets, response
from .models import Exam, Answer, Question


class ExamListAPIViewSet(viewsets.ViewSet):    
    def list(self, request, pk):
        queryset = Exam.objects.filter(pk=pk)
        serializer = ExamListAPIViewSerializer(queryset, many=True)
        return response.Response(serializer.data)


class QuestionListAPIView(viewsets.ViewSet):    
    def list(self, request, pk):
        queryset = Question.objects.filter(exam=pk)
        serializer = QuestionListAPIViewSerializer(queryset, many=True)
        return response.Response(serializer.data)

class AnswerListAPIView(viewsets.ViewSet):    
    def list(self, request, pk):
        queryset = Answer.objects.filter(question=pk)
        serializer = AnwerListAPIViewSerialazer(queryset, many=True)
        return response.Response(serializer.data)
    
class ExamListAPIView(generics.ListAPIView):
    queryset = Exam.objects.all()
    serializer_class = ExamListAPIViewSerializer


