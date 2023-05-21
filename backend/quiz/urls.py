from django.urls import path
from .views import QuestionListAPIView, AnswerListAPIView, ExamListAPIView, ExamListAPIViewSet


urlpatterns = [
    path('<int:pk>/', ExamListAPIViewSet.as_view({'get': 'list'})),
    path('question/<int:pk>/', QuestionListAPIView.as_view({'get': 'list'})),
    path('answer/<int:pk>/', AnswerListAPIView.as_view({'get': 'list'})),
    path('list/', ExamListAPIView.as_view())
]
