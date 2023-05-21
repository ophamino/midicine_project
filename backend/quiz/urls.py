from django.urls import path

from .views import QuizAPIView, QuizListAPIView,  QuizCreateAPIView, ExamViewSet

urlpatterns = [
    path('', QuizListAPIView.as_view()),
    path('<int:pk>/',ExamViewSet.as_view({'get': 'retrieve'})),
    path('new/', QuizCreateAPIView.as_view()),
]
