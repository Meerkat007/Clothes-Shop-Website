from django.test import TestCase
from .models import Clothes

class ClothesModelTests(TestCase):

    def setUp(self):
        Clothes.objects.create(clothes_type='ladies dress', price=28.50)
        Clothes.objects.create(clothes_type='men tie', price=8.50)
    
    def test_number_of_clothes_created(self):
        self.assertEqual(Clothes.objects.all().count(), 2)
