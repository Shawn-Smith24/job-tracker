#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
from models import db, User, Application, Job, Company
# Local imports
from app import app
from models import db, User, Application, Job, Company


fake = Faker()

JOB_QTY = 5
USER_QTY = 3
APPLICATION_QTY =4
COMPANY_QTY = 6

print("Seeding jobs...")
def make_jobs():
    Job.query.delete()
            
    jobs = []
            
    for i in range(JOB_QTY):
        job = Job(
            id = i+1,
            job_name = fake.company(),
            location = fake.city(),
            salary = randint(10000, 100000),
            experience_level = randint(1, 2), 
            company_id = randint(1, COMPANY_QTY) 
        )
        jobs.append(job)
        
        db.session.add_all(jobs)
        db.session.commit()
        
        
print("Seeding companies...")
def make_company():
    Company.query.delete()
            
    companies = []
            
    for i in range(COMPANY_QTY):
        company = Company(
            id = i+1,
            company_name = fake.company(),
            company_bio = fake.text()
        )
        companies.append(company)
        
        db.session.add_all(companies)
        db.session.commit()
        
print("Seeding users...")
def make_users():
    User.query.delete()
            
    users = []
            
    for i in range(USER_QTY):
        user = User(
            id = i+1,
            username = fake.name(),
            password = fake.password()
        )
        users.append(user)
        
        db.session.add_all(users)
        db.session.commit()
        
print("Seeding applications...")
def make_applications():
    Application.query.delete()
            
    applications = []
            
    for i in range(APPLICATION_QTY):
        application = Application(
            id = i+1,
            status = randint(1, 3),
            user_id = randint(1, USER_QTY),
            job_id = randint(1, JOB_QTY)
        )
        applications.append(application)
        
        db.session.add_all(applications)
        db.session.commit()
        
if __name__ == '__main__':
    with app.app_context():
        make_jobs()
        make_company()
        make_applications()
        make_users()
        