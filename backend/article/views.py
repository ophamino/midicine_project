from django.shortcuts import render
from rest_framework import generics, viewsets, response

from .models import Article, Comment
from .serialazers import ArticleSerialazer, CommentSerialazer

class ArticleListAPIView(generics.ListAPIView):
    queryset = Article.published.all()
    serializer_class = ArticleSerialazer


class CommentAPIViewSet(viewsets.ViewSet):    
    def list(self, request, pk):
        queryset = Comment.objects.filter(post=pk)
        serializer = CommentSerialazer(queryset, many=True)
        return response.Response(serializer.data)


class ArticleRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.object.all()
    serializer_class = ArticleSerialazer