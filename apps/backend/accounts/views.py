from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import VisaService
from .serializers import VisaServiceSerializer

class VisaServiceViewSet(viewsets.ModelViewSet):
    queryset = VisaService.objects.all()
    serializer_class = VisaServiceSerializer

    @action(detail=True, methods=['post'])
    def book_service(self, request, pk=None):
        visa_service = self.get_object()
        booking_info = request.data.get('booking')
        if booking_info:
            visa_service.book_service(booking_info)
            return Response({'status': 'service booked'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid booking information'}, status=status.HTTP_400_BAD_REQUEST)
