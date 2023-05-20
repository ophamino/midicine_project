from django.shortcuts import render

from rest_framework import generics

from .serialazers import UsersSerialazer
from .models import CustomUser


class UserAPIListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerialazer
