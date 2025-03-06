# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from config import Config

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()

def create_app():
    """Create and configure the Flask app."""
    app = Flask(__name__)

    # Apply the configuration from Config class
    app.config.from_object(Config)

    # Initialize extensions with the app instance
    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    # Import and register blueprints after app initialization
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    # Import models here to avoid circular imports
    from app.models.user import User

    # Set the login view for Flask-Login
    login_manager.login_view = 'auth.login'
    login_manager.login_message = "Please log in to access this page."

    return app
