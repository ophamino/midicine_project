from rest_framework import serializers

from .models import Article, Comment


class ArticleSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ["id", "title", 'author', 'body', 'created', 'updated']


class CommentSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'name', 'body', 'created']