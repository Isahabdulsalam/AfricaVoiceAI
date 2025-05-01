from flask import Blueprint, request, jsonify, redirect, url_for, session
from app.db import db
from app.models.user import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)
from flask_mail import Message
from app.mail import mail
import random, os
from itsdangerous import URLSafeTimedSerializer, SignatureExpired
from oauthlib.oauth2 import WebApplicationClient
import requests

auth_bp = Blueprint('auth', __name__)

# Serializer for password reset tokens
serializer = URLSafeTimedSerializer(os.getenv('SECRET_KEY'))

# OAuth client for Google
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
client = WebApplicationClient(GOOGLE_CLIENT_ID)
GOOGLE_DISCOVERY_URL = os.getenv("GOOGLE_DISCOVERY_URL")


# Simulated in-memory OTP storage
otp_storage = {}

# OTP verification
@auth_bp.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.get_json()
    email = data.get('email')
    if not email:
        return jsonify({"message": "Email is required"}), 400

    otp = str(random.randint(100000, 999999))
    otp_storage[email] = otp

    # Send OTP via email
    msg = Message("Your Verification Code", recipients=[email])
    msg.body = f"Your OTP code is: {otp}"
    mail.send(msg)

    return jsonify({"message": "OTP sent to email"}), 200

@auth_bp.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    email = data.get('email')
    otp = data.get('otp')

    if otp_storage.get(email) == otp:
        # Mark user as verified
        user = User.query.filter_by(email=email).first()
        if user:
            user.is_verified = True  # Set the user as verified
            db.session.commit()
            otp_storage.pop(email, None)  # Clear OTP after success
            return jsonify({"message": "OTP verified and user verified"}), 200
        return jsonify({"message": "User not found"}), 404

    return jsonify({"message": "Invalid or expired OTP"}), 400


@auth_bp.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        required_fields = ['username', 'email', 'phone_number', 'country', 'gender', 'profession', 'years', 'password']
        if not all(field in data for field in required_fields):
            return jsonify({"message": "Missing required fields"}), 400

        # Check if email is verified
        if data['email'] not in otp_storage:
            return jsonify({"message": "Email not verified"}), 403

        if User.query.filter_by(email=data['email']).first():
            return jsonify({"message": "User with this email already exists"}), 400
        if User.query.filter_by(username=data['username']).first():
            return jsonify({"message": "Username already taken"}), 400

        # Only allow signup if user is verified
        user = User.query.filter_by(email=data['email']).first()
        if user and not user.is_verified:
            return jsonify({"message": "Email is not verified"}), 403

        new_user = User(
            username=data['username'],
            email=data['email'],
            phone_number=data['phone_number'],
            country=data['country'],
            gender=data['gender'],
            profession=data['profession'],
            years=data['years']
        )
        new_user.set_password(data['password'])

        db.session.add(new_user)
        db.session.commit()

        otp_storage.pop(data['email'], None)  # Clear OTP after success

        return jsonify({"message": "User created successfully!"}), 201
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data or not data.get('email') or not data.get('password'):
            return jsonify({"message": "Missing required fields"}), 400

        user = User.query.filter_by(email=data['email']).first()
        if user and user.check_password(data['password']):
            access_token = create_access_token(identity=str(user.id))
            return jsonify({
                "message": "Login successful",
                "access_token": access_token
            }), 200
        return jsonify({"message": "Invalid email or password"}), 401
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    try:
        current_user = get_jwt_identity()
        return jsonify({"message": "Successfully logged out"}), 200
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        return jsonify({
            "username": user.username,
            "email": user.email,
            "phone_number": user.phone_number,
            "country": user.country,
            "gender": user.gender,
            "profession": user.profession,
            "years": user.years
        }), 200
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404

    token = serializer.dumps(email, salt='password-reset')
    reset_link = url_for('auth.reset_password', token=token, _external=True)

    msg = Message("Password Reset Request", recipients=[email])
    msg.body = f"Click the link to reset your password: {reset_link}"
    mail.send(msg)

    return jsonify({"message": "Password reset link sent to your email"}), 200


@auth_bp.route('/reset-password/<token>', methods=['POST'])
def reset_password(token):
    try:
        email = serializer.loads(token, salt='password-reset', max_age=3600)
        data = request.get_json()
        new_password = data.get('new_password')

        user = User.query.filter_by(email=email).first()
        if user:
            user.set_password(new_password)
            db.session.commit()
            return jsonify({"message": "Password has been reset successfully"}), 200
        return jsonify({"message": "User not found"}), 404
    except SignatureExpired:
        return jsonify({"message": "Token has expired"}), 400


# Google OAuth (Stub)
@auth_bp.route('/google-login')
def google_login():
    discovery_doc = requests.get(GOOGLE_DISCOVERY_URL).json()
    authorization_endpoint = discovery_doc["authorization_endpoint"]
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect(request_uri)


@auth_bp.route('/google-login/callback')
def google_callback():
    code = request.args.get("code")
    discovery_doc = requests.get(GOOGLE_DISCOVERY_URL).json()
    token_endpoint = discovery_doc["token_endpoint"]

    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code,
    )

    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    client.parse_request_body_response(token_response.text)
    userinfo_endpoint = discovery_doc["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    # Save or create the user based on Google account info
    data = userinfo_response.json()
    email = data["email"]
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(username=data["name"], email=email)
        user.set_password(os.urandom(16).hex())  # Random password
        db.session.add(user)
        db.session.commit()

    token = create_access_token(identity=str(user.id))
    return jsonify({"message": "Logged in with Google", "access_token": token}), 200


# Register Blueprint
def register_blueprints(app):
    app.register_blueprint(auth_bp, url_prefix='/auth')