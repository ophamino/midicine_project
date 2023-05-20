from django.contrib import admin

from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    """Admin config for custom user"""
    list_display = ["last_name", "first_name", "email", 'phone']
    search_fields = ['email', 'phone']
    ordering = ['last_name', 'first_name']
