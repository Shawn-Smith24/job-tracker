#!/usr/bin/env python3

# Standard library imports
from flask import Flask
from flask_migrate import Migrate
# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Job, Company, Application, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

# api = api(app)

# user1= User(user_id= 1, username='test', password='test')
# job1= Job(job_id = 1, job_name='test', location='test', salary=100, experience_level=1)
# job2= Job(job_id = 2, job_name='test2', location='test2', salary=200, experience_level=2)
# company= Company(company_id=1, company_name='test', location='test', industry='test')
# application = Application(application_id=1, status=1, user_id=1, job_id=1)



# Views go here!

if __name__ == '__main__':
    app.run(port=5555, debug=True)
