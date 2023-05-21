from django.urls import path
from .views import QuestionListAPIView, AnswerListAPIView, ExamListAPIView


urlpatterns = [
    path('<int:pk>/', ExamListAPIView.as_view({'get': 'list'})),
    path('question/<int:pk>/', QuestionListAPIView.as_view({'get': 'list'})),
    path('answer/<int:pk>/', AnswerListAPIView.as_view({'get': 'list'})),
]
