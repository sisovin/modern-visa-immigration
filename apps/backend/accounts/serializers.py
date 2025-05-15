from rest_framework import serializers
from .models import VisaService

class VisaServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisaService
        fields = ['id', 'title', 'description', 'requirements', 'processing_time', 'price', 'is_featured']
