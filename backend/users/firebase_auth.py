from firebase_admin import auth

def verify_firebase_token(token):
    """
    Verifies Firebase ID token and returns user data.
    """
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token  # Contains user details like uid, email
    except Exception as e:
        return None
