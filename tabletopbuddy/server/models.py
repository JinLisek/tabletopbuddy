from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=30)


class GameSession(models.Model):
    game_name = models.CharField(max_length=30)
    players = models.ManyToManyField(Player)
