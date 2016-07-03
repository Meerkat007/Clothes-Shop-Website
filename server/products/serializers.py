from rest_framework import serializers
from .models import Clothes

class ClothesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clothes
        fields = ('category', 'gender', 'style', 'price')