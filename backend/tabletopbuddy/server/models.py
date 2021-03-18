from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)


class GameSession(models.Model):
    game_name = models.CharField(max_length=30)
    players = models.ManyToManyField(User, related_name="game_sessions")
