# Generated by Django 4.2.1 on 2023-05-21 01:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exam',
            name='slug',
        ),
    ]
