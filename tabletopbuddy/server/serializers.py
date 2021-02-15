from django.contrib.auth.models import User, Group
from tabletopbuddy.server.models import Player, GameSession
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class PlayerSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    game_sessions = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="game_name"
    )

    class Meta:
        model = Player
        fields = ["name", "game_sessions"]


class GameSessionSerializer(serializers.ModelSerializer):
    players = serializers.SlugRelatedField(
        many=True, slug_field="name", queryset=Player.objects.all()
    )

    class Meta:
        model = GameSession
        fields = ["game_name", "players"]
