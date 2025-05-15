from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import VisaService
from .serializers import VisaServiceSerializer

class VisaServiceModelTest(TestCase):
    def setUp(self):
        self.visa_service = VisaService.objects.create(
            title="Test Visa Service",
            description="Test Description",
            requirements="Test Requirements",
            processing_time=10,
            price=100.00,
            is_featured=True
        )

    def test_visa_service_creation(self):
        self.assertEqual(self.visa_service.title, "Test Visa Service")
        self.assertEqual(self.visa_service.description, "Test Description")
        self.assertEqual(self.visa_service.requirements, "Test Requirements")
        self.assertEqual(self.visa_service.processing_time, 10)
        self.assertEqual(self.visa_service.price, 100.00)
        self.assertTrue(self.visa_service.is_featured)

class VisaServiceSerializerTest(TestCase):
    def setUp(self):
        self.visa_service_attributes = {
            'title': 'Test Visa Service',
            'description': 'Test Description',
            'requirements': 'Test Requirements',
            'processing_time': 10,
            'price': 100.00,
            'is_featured': True
        }

        self.serializer_data = {
            'title': 'Test Visa Service',
            'description': 'Test Description',
            'requirements': 'Test Requirements',
            'processing_time': 10,
            'price': 100.00,
            'is_featured': True
        }

        self.visa_service = VisaService.objects.create(**self.visa_service_attributes)
        self.serializer = VisaServiceSerializer(instance=self.visa_service)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['id', 'title', 'description', 'requirements', 'processing_time', 'price', 'is_featured']))

    def test_title_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['title'], self.visa_service_attributes['title'])

    def test_description_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['description'], self.visa_service_attributes['description'])

    def test_requirements_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['requirements'], self.visa_service_attributes['requirements'])

    def test_processing_time_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['processing_time'], self.visa_service_attributes['processing_time'])

    def test_price_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['price'], self.visa_service_attributes['price'])

    def test_is_featured_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['is_featured'], self.visa_service_attributes['is_featured'])

class VisaServiceViewSetTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.visa_service_data = {
            'title': 'Test Visa Service',
            'description': 'Test Description',
            'requirements': 'Test Requirements',
            'processing_time': 10,
            'price': 100.00,
            'is_featured': True
        }
        self.visa_service = VisaService.objects.create(**self.visa_service_data)
        self.url = f'/visa-services/{self.visa_service.id}/'

    def test_get_visa_service(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.visa_service_data['title'])

    def test_create_visa_service(self):
        response = self.client.post('/visa-services/', self.visa_service_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['title'], self.visa_service_data['title'])

    def test_update_visa_service(self):
        updated_data = self.visa_service_data.copy()
        updated_data['title'] = 'Updated Test Visa Service'
        response = self.client.put(self.url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], updated_data['title'])

    def test_delete_visa_service(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(VisaService.objects.filter(id=self.visa_service.id).exists())
