from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

from rest_framework import generics, permissions, mixins

from .permissions import UserIsOwnerOrReadOnly
from .serialazers import UsersSerialazer, UserProfileChangeSerializer
from .models import CustomUser

User = get_user_model()


class UserAPIListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerialazer


class UserProfileChangeAPIView(generics.RetrieveAPIView,
                               mixins.DestroyModelMixin,
                               mixins.UpdateModelMixin):
    permission_classes = (
        permissions.IsAuthenticated,
        UserIsOwnerOrReadOnly,
    )
    serializer_class = UserProfileChangeSerializer

    def get_object(self):
        user_id = self.kwargs["id"]
        obj = get_object_or_404(User, id=user_id)
        return obj

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)