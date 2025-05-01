from flas_mail import Message
from flask import current_app
from app import mail

def send_otp_email(to_email, otp_code):
    """Send an OTP email to the specified user email"""
    try:
        subject = "Your AfricaVoiceAI OTP code"
        sender = current_app.config['MAIL_USERNAME']
        body = f"Your verification code is {otp_code}. It will expire in 5 minutes."
        msg = Message(subject, recipients=[to_email], body=body, sender=sender)
        mail.send(msg)
        return True
    except Exception as e:
        print(f'Failed to send OTP email: {e}')
        return False