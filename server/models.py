from config import db
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-applied.user', '-applied.job')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # a list of application objects for a given user 
    applied = db.relationship('Application', backref='user')
    
    # @validates('username')
    # def validates_username(self,key,username):
    #     if not username or len(username) > 5 and len(username) < 50:
    #         raise AssertionError('Username must be between 5 and 50 characters.')
    #     return username

    # @validates('password')
    # def validates_password(self,key,password):
    #     if not password or len(password) > 10 and len(password) < 50:
    #         raise AssertionError('Password must be between 5 and 50 characters.')
    #     return password
    

class Application(db.Model, SerializerMixin):

    __tablename__ = 'applications'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('jobs.id'))

    
    job = db.relationship('Job', backref='application')


class Job(db.Model, SerializerMixin):

    __tablename__ = 'jobs'
    serialize_rules = ('-application.job','-company.job')
    
    
    id = db.Column(db.Integer, primary_key=True)
    job_name = db.Column(db.String)
    location = db.Column(db.String)
    salary = db.Column(db.Integer)
    experience_level = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'))

    # relationships
    # applications = db.relationship('Application', backref='job')
    company = db.relationship('Company', backref='job')

    

class Company(db.Model, SerializerMixin):

    __tablename__ = 'companies'

    serialize_rules = ('-job.company',)

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String)
    company_bio = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
