from rest_framework import viewsets, permissions, views, status
from rest_framework.response import Response
from tabletopbuddy.server.serializers import (
    UserSerializer,
    GameSessionSerializer,
)
from tabletopbuddy.server.models import User, GameSession


class SignUpView(views.APIView):
    def post(self, request, format="json"):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GameSessionViewSet(viewsets.ModelViewSet):
    queryset = GameSession.objects.all()
    serializer_class = GameSessionSerializer
