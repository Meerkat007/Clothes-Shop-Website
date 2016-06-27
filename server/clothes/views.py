from django.shortcuts import render
from rest_framework import viewsets
from .models import Clothes
from .serializers import ClothesSerializer

class ClothesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Clothes.objects.all()
    serializer_class = ClothesSerializer
