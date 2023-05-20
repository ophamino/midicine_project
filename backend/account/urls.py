from django.contrib import admin
from django.urls import path, include, re_path

from .views import UserAPIListView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
    path('user/list/', UserAPIListView.as_view())
]
