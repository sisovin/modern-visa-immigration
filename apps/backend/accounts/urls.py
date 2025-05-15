from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VisaServiceViewSet

router = DefaultRouter()
router.register(r'visa-services', VisaServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
