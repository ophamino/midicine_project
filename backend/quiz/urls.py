from django.urls import path

from .views import QuizAPIView, QuizListAPIView,  QuizCreateAPIView

urlpatterns = [
    path('', QuizListAPIView.as_view()),
    path('<int:pk>/',QuizAPIView.as_view()),
    path('new/', QuizCreateAPIView.as_view()),
]
