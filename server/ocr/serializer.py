from rest_framework import serializers
from .models import FileUpload

class FileUploadSerializer(serializers.ModelSerializer):
    results = serializers.JSONField(required=False)
    
    class Meta:
        model = FileUpload
        fields = ['file', 'results']