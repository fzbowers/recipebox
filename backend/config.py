import os

class Config:
    # has instructions for setting secret key --> https://www.digitalocean.com/community/tutorials/how-to-structure-a-large-flask-application-with-flask-blueprints-and-flask-sqlalchemy
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'

    # define the URI for connecting to the MariaDB database
    SQLALCHEMY_DATABASE_URI = os.environ.get('MYSQL_PUBLIC_URL') or 'mysql+pymysql://root:fbowers@localhost/recipebox_db'

    SQLALCHEMY_TRACK_MODIFICATIONS = False