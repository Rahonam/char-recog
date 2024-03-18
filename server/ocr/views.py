import os

from .utilities import ocr_request

from rest_framework import status, views
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from .serializer import FileUploadSerializer


class ImageUploadView(views.APIView):
    authentication_classes = [TokenAuthentication]
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data["file"]
            file_name = file.name
            upload_path = os.path.join('uploads', file_name)
            instance = serializer.save()

            ocr_response = ocr_request.ocr_space_file(upload_path)

            serializer.update(instance,{"results": ocr_response})
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
