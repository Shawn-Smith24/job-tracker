from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


from config import db

# Models go here!

class User(db.Model, SerializerMixin):
    
    
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())    
    
    # applications = db.relationship('Applications', backref='user')
    
class Application(db.Model, SerializerMixin):
    
    __tablename__ = 'applications'
    
    id = db.Column(db.Integer, primary_key=True)
    status= db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now()) 
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('jobs.id'))
    
    user = db.relationship('Users', backref=('applications'))
    job= db.relationship('Jobs', backref=('applications'))
    
class Job(db.Model, SerializerMixin):
    
    __tablename__ = 'jobs'
    
    
    id = db.Column(db.Integer, primary_key=True)
    job_name= db.Column(db.String)
    location = db.Column(db.String)
    salary = db.Column(db.Integer)
    experience_level= db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now()) 
    
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'))
   
   #relationships 
    applications = db.relationship('Applications', backref='job')
    company= db.relationship('Companies', backref='jobs')
    
    
class Company(db.Model, SerializerMixin):
    
    __tablename__ = 'companies'
    
    
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String)
    company_bio = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now()) 
    
    company= db.relationship('Company', backref='jobs')