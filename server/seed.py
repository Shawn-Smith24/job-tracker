#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker
from models import db, User, Application, Job, Company
# Local imports
from app import app
from models import db

if __name__ == '__main__':
    # fake = Faker()
    
    with app.app_context():
        print('Clearing db...')
        User.query.delete()
        Application.query.delete()
        Job.query.delete()
        Company.query.delete()
        
        
        print("Starting seed...")
        # Seed code goes here!
        
        print("Seeding users...")
        users = [
            User(id= 1, username='test', password='test'),
        ]
        
        db.session.add_all(users)
        
        
        print('Seeding applications...')
        applications= [
            Application(id=1, status=1, user_id=1, job_id=1)
        ]
        
        db.session.add_all(applications)
        
        print("Seeding jobs...")
        jobs = [
            Job(id = 1, job_name='test', location='test', salary=100, experience_level=1),
        ]
        
        db.session.add_all(jobs)
        
        print("Seeding companies...")
        companies= [
            Company(id=1, company_name = 'test', company_bio = 'test')
        ]
        
        db.session.add_all(companies)
        
        db.session.commit()
        
        print("Done seeding!")
        
        