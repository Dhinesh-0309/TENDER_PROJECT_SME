from django.urls import path
from .views import get_tenders

urlpatterns = [
    path('api/tenders/', get_tenders, name='get_tenders'),
]
