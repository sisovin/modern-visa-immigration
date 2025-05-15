from rest_framework import viewsets
from .models import VisaService
from .serializers import VisaServiceSerializer

class VisaServiceViewSet(viewsets.ModelViewSet):
    queryset = VisaService.objects.all()
    serializer_class = VisaServiceSerializer
