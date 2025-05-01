import random
import string

def generate_otp(length=6):
    """Generate a numeric OTP of the given length (default 6 digits)."""
    return ''.join(random.choices(string.digits, k=length))