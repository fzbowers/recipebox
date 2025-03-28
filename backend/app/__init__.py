from flask import Flask
from config import Config
from .extensions import db, cors, admin, migrate, bcrypt, login_manager, jwt


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    cors.init_app(app, origins=["https://fzbowers.github.io", "http://localhost:8100"])
    admin.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    jwt.init_app(app)

    from .routes import recipe_routes, section_routes, account_routes, auth_routes, features_routes
    # from . import auth

    # register blueprints 
    app.register_blueprint(recipe_routes.bp)
    app.register_blueprint(section_routes.bp)
    app.register_blueprint(account_routes.bp)
    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(features_routes.bp)
    # app.register_blueprint(auth.auth_bp)

    with app.app_context():
        db.create_all()

    return app