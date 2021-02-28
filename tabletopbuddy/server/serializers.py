from tabletopbuddy.server.models import User, GameSession
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    game_sessions = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="game_name"
    )

    class Meta:
        model = User
        fields = ["username", "email", "game_sessions"]


class GameSessionSerializer(serializers.ModelSerializer):
    players = serializers.SlugRelatedField(
        many=True, slug_field="username", queryset=User.objects.all()
    )

    class Meta:
        model = GameSession
        fields = ["game_name", "players"]
