from sqlalchemy_serializer import SerializerMixin

from config import db

# Models go here!

class User(db.Model, SerializerMixin):
    
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    
    applications = db.relationship('Applications', backref='user')
    
class Application(db.Model, SerializerMixin):
    
    __tablename__ = 'application'
    
    id = db.Column(db.Integer, primary_key=True)
    status= db.Column(db.Integer)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('job.id'))
    
    user = db.relationship('User', backref=db.backref('applications'))
    job= db.relationship('Job', backref=db.backref('applications'))
    
class Job(db.Model, SerializerMixin):
    
    __tablename__ = 'job'
    
    
    id = db.Column(db.Integer, primary_key=True)
    job_name= db.Column(db.String)
    location = db.Column(db.String)
    salary = db.Column(db.Integer)
    experience_level= db.Column(db.Integer)
    
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
   
   #relationships 
    applications = db.relationship('Application', backref='job')
    company= db.relationship('Company', backref='jobs')
    
    
class Company(db.Model, SerializerMixin):
    
    __tablename__ = 'company'
    
    
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String)
    company_bio = db.Column(db.String)
    
    company= db.relationship('Company', backref='jobs')