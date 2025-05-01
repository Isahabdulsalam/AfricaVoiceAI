# app/models/user.py
from app import db  # Correctly import db from app/__init__.py
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)  # Increased length to 150
    email = db.Column(db.String(150), unique=True, nullable=False)  # Increased length to 150
    phone_number = db.Column(db.String(20), unique=True, nullable=False)  # Increased length to 20
    country = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    profession = db.Column(db.String(150), nullable=False)  # Increased length to 150
    years = db.Column(db.String(50), nullable=False)  # No change here, still reasonable for years
    password_hash = db.Column(db.Text, nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
