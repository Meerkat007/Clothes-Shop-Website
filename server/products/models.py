from django.db import models

class Clothes(models.Model):
    category = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    style = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    class Meta:
        verbose_name_plural = 'clothes'
