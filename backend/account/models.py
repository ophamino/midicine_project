from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class CustomUserManager(BaseUserManager):
    """Manager for custom user"""

    def create_user(self, email, first_name, last_name, phone, password):
        """Function for create simple user"""
        if not email:
            raise ValueError("The `email` field is required")
        if not first_name:
            raise ValueError("The `first_name` field is required")
        if not last_name:
            raise ValueError("The `last_name` field is required")
        if not phone:
            raise ValueError("The `phone` field is required")

        user: CustomUser = self.model(
            email=self.normalize_email(email=email),
            first_name=first_name,
            last_name=last_name,
            phone=phone
        )
        user.set_password(raw_password=password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, first_name, last_name, phone, password):
        """Function for create superuser"""
        user = self.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            phone=phone,
            password=password
        )
        user.is_superuser = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """Custom model for User"""
    first_name = models.CharField(max_length=20, verbose_name="Firstname")
    last_name = models.CharField(max_length=25, verbose_name="Lastname")
    email = models.EmailField(unique=True, verbose_name="Email address")
    phone = models.CharField(max_length=14, verbose_name="Phone number")
    position = models.CharField(max_length=100, null=True, blank=True)
    departament = models.CharField(max_length=100, null=True, blank=True)
    expirience = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone']
    USERNAME_FIELD = 'email'
    EMAIL_FILED = 'email'

    def __str__(self):
        return f'{self.last_name} {self.first_name}'
