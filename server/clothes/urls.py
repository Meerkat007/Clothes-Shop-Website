from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include
from clothes import views

router = DefaultRouter()
router.register(r'clothes', views.ClothesViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]