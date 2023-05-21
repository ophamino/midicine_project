from django.urls import path

from .views import ArticleRetrieveUpdateDestroyAPIView, ArticleListAPIView, CommentAPIViewSet

urlpatterns = [
    path('', ArticleListAPIView.as_view()),
    path('dataeil/', ArticleRetrieveUpdateDestroyAPIView.as_view()),
    path('comments/', CommentAPIViewSet.as_view({'get': 'list'})) 
]
