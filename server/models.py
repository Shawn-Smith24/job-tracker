from config import db
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
import re 

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-applied.user', '-applied.job')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    applied = db.relationship('Application', backref='user')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    @property
    def password(self):
        raise AttributeError('Password is not a readable attribute.')

    @password.setter
    def password(self, password):
        self.set_password(password)

    @validates('name')
    def validate_name(self, key, name):
        if not name or len(name) < 10:
            raise ValueError('Name must be at least 10 characters long')
        
        return name

    @validates('email')
    def validate_email(self, key, email):
        if not email:
         raise AssertionError('No email provided')
     
        if not re.match("[^@]+@[^@]+\.[^@]+", email):
            
          raise AssertionError('Provided email is not an email address') 
      
        return email
     
            
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