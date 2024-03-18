from django.db import models

class FileUpload(models.Model):
    file = models.FileField(upload_to='')
    results = models.JSONField(null=True, blank=True)