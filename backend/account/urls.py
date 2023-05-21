from django.urls import path, include, re_path

from .views import UserAPIListView, UserProfileChangeAPIView, UserRatingAPIList

urlpatterns = [
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
    path('user/list/', UserAPIListView.as_view()),
    path('user/update/<int:pk>', UserProfileChangeAPIView.as_view()),
    path('rating/', UserRatingAPIList.as_view()),
]
