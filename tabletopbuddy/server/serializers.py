from django.contrib.auth.models import User, Group
from tabletopbuddy.server.models import Player, GameSession
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        fields = ["name"]


class GameSessionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GameSession
        fields = ["game_name", "players"]
