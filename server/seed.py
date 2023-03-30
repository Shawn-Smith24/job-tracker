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


company_list = ["Apple", "Amazon", "Google", "Netflix", "Sony", "EA", "Microsoft", "Airbnb", "Pinterest", "Tesla", "Twitter", "Meta", "Tik Tok", "Youtube", "Reddit", "Instagram", "Honda", "Waymo", "Twilio"]
job_list = ["Frontend Engineer", "Backend Engineer", "Fullstack Engineer", "UX/UI Designer", "Dev Ops", "Project Manager"]

users = [
        {
            'name': 'Madison Evans',
            'email': 'm.corbinevans@gmail.com',
            'password': 'holliejo1',
        },

    ]
COMPANY_QTY = len(company_list)
JOB_QTY = 50
APPLICATION_QTY =8
USER_QTY = len(users)

print("Seeding jobs...")
def make_jobs(job_list = job_list):
    Job.query.delete()
            
    jobs = []
    exp_level_list = ["Junior", "Mid-Level", "Senior"]
    for i in range(JOB_QTY):
        job = Job(
            id = i+1,
            job_name = job_list[randint(0,len(job_list)-1)],
            location = fake.city(),
            salary = randint(50, 120)*1000,
            experience_level = exp_level_list[randint(0, 2)], 
            company_id = randint(1, COMPANY_QTY) 
        )
        jobs.append(job)
        
    db.session.add_all(jobs)
    db.session.commit()
        
        
print("Seeding companies...")

def make_company(company_list = company_list):
    Company.query.delete()     
    companies = []
    for i in range(COMPANY_QTY):
        company = Company(
            id = i+1,
            company_name = company_list[i],
            company_bio = fake.text()
        )
        companies.append(company)
        
    db.session.add_all(companies)
    db.session.commit()
        
print("Seeding users...")

def make_users():
    User.query.delete()
    
    for i in range(len(users)):
        user = User(
            id=i+1,
            name=users[i]['name'], 
            email=users[i]['email'],
        )
        user.password = users[i]['password']
        db.session.add(user)

    db.session.commit()
        
print("Seeding applications...")
def make_applications():
    Application.query.delete()
            
    applications = []
            
    for i in range(APPLICATION_QTY):
        application = Application(
            id = i+1,
            status = randint(0, 3),
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
        