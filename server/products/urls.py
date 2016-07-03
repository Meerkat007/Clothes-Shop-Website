from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include
from .views import ClothesViewSet

router = DefaultRouter()
router.register(r'clothes', ClothesViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]