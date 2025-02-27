from django.http import JsonResponse
from rest_framework.decorators import api_view
from .firebase_auth import verify_firebase_token

@api_view(['POST'])
def verify_token(request):
    """
    API to verify Firebase authentication token.
    """
    token = request.data.get("token")
    user_data = verify_firebase_token(token)

    if user_data:
        return JsonResponse({"message": "Authenticated", "user": user_data}, status=200)
    return JsonResponse({"error": "Invalid token"}, status=401)
