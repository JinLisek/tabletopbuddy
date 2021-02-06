from django.contrib.auth.models import User, Group
from rest_framework import serializers, viewsets, permissions
from tabletopbuddy.server.serializers import (
    UserSerializer,
    GroupSerializer,
    PlayerSerializer,
    GameSessionSerializer,
)
from tabletopbuddy.server.models import Player, GameSession


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class GameSessionViewSet(viewsets.ModelViewSet):
    queryset = GameSession.objects.all()
    serializer_class = GameSessionSerializer
