#!/usr/bin/env python3

import logging
import os
import sys

# Set logging level to WARNING for most of the app
logging.basicConfig(level=logging.WARNING)
logging.getLogger('werkzeug').setLevel(logging.INFO)  # To show only required werkzeug logs

logger = logging.getLogger(__name__)

"""Database Initialization with an instance of Flask app"""

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from config import Config
from app.db import db
from app.models.user import User
from app.routes.auth import auth_bp
from flask_cors import CORS
from flask_mail import Mail

# Initialize extensions
migrate = Migrate()
jwt = JWTManager()
mail = Mail()

def create_app():
    """Database mapping with flask app"""
    app = Flask(__name__)

    # Load the configuration from the Config class in config.py
    app.config.from_object(Config)

    # Initialize extensions with the app instance
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    mail.init_app(app)
    # Enables CORS for the frontend URL

    #CORS(app, origins=["https://localhost:3000"], supports_credentials=True)

    # Register blueprints for the routes
    app.register_blueprint(auth_bp, url_prefix='/auth')

    return app