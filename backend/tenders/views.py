from django.http import JsonResponse
from .models import Tender

def get_tenders(request):
    tenders = list(Tender.objects.values())  # Convert queryset to list
    return JsonResponse({"tenders": tenders})
