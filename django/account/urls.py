from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
]
