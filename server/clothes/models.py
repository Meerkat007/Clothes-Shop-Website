from django.db import models

class Clothes(models.Model):
    clothes_type = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    class Meta:
        verbose_name_plural = 'clothes'
