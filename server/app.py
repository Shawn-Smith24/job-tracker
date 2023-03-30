from flask import Flask, make_response, request, abort, jsonify, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource
from models import db, Job, User, Application, Company
from werkzeug.exceptions import NotFound, Unauthorized
from flask_bcrypt import Bcrypt



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
bcrypt = Bcrypt(app)

app.secret_key = b'@~xH\xf2\x10k\x07hp\x85\xa6N\xde\xd4\xcd'

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

class Home(Resource):
    def get(self):
        return {'message': 'Welcome to the Job Board API!'}

api.add_resource(Home, '/')


class Jobs(Resource):
    def get(self):

        jobs = Job.query.all()
        jobs_dict = [job.to_dict() for job in jobs]

        response = make_response(
            jsonify(jobs_dict),
            200,
        )

        return response

    def post(self):
        
        new_jobs = Job(
            job_name=request.get_json()['job_name'],
            location=request.get_json()['location'],
            salary=request.get_json()['salary'],
            experience_level=request.get_json()['experience_level'],
            company_id=request.get_json()['company_id']
            )
        
        db.session.add(new_jobs)
        db.session.commit()

        response_dict = new_jobs.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )
        return response


api.add_resource(Jobs, '/jobs/')


class JobsbyID(Resource):
    def get(self, id):

        job = Job.query.filter_by(id=id).first()
        if not job:
            abort(404, 'Job not found!')

        job_dict = job.to_dict()

        response = make_response(
            jsonify(job_dict),
            200,
        )

        return response

    def patch(self, id):
        job = Job.query.filter_by(id=id).first()
        if not job:
            abort(404, 'Job not found!')

        request.get_json = request.get_json()
        for key in request.get_json:
            setattr(job, key, request.get_json[key])

        db.session.add(job)
        db.session.commit()

        response = make_response(
            job.to_dict(),
            200,
        )
        return response

    def delete(self, id):
        job = Job.query.filter_by(id=id).first()

        if not job:
            abort(404, 'Job not found!')

        db.session.delete(job)
        db.session.commit()

        response = make_response(
            '',
            204,
        )

        return response


api.add_resource(JobsbyID, '/jobs/<int:id>')


class Users(Resource):
    def get(self):

        users = User.query.all()
        users_dict = [user.to_dict() for user in users]

        response = make_response(
            jsonify(users_dict),
            200,
        )

        return response
    
    def post(self):
        
        new_users = User(
            username=request.get_json()['username'],
            password=request.get_json()['password']
            )
        
        db.session.add(new_users)
        db.session.commit()

        response_dict = new_users.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )
        return response
    
api.add_resource(Users, '/users/')

class UsersbyID(Resource):
    def get(self, id):

        user = User.query.filter_by(id=id).first()
        if not user:
            abort(404, 'User not found!')

        user_dict = user.to_dict()

        response = make_response(
            jsonify(user_dict),
            200,
        )

        return response
    
    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            abort(404, 'User not found!')

        request.get_json = request.get_json()
        for key in request.get_json:
            setattr(user, key, request.get_json[key])

        db.session.add(user)
        db.session.commit()

        response = make_response(
            user.to_dict(),
            200,
        )
        return response
    
    def delete(self, id):
        user = User.query.filter_by(id=id).first()

        if not user:
            abort(404, 'User not found!')

        db.session.delete(user)
        db.session.commit()

        response = make_response(
            '',
            204,
        )

        return response
    
api.add_resource(UsersbyID, '/users/<int:id>')


class Applications(Resource):
    def get(self):

        applications = Application.query.all()
        applications_dict = [application.to_dict() for application in applications]

        response = make_response(
            jsonify(applications_dict),
            200,
        )

        return response
    
    def post(self):
        
        new_applications = Application(
            job_id=request.get_json()['job_id'],
            user_id=request.get_json()['user_id']
            )
        
        db.session.add(new_applications)
        db.session.commit()

        response_dict = new_applications.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )
        return response
    
api.add_resource(Applications, '/applications/')

class ApplicationsByID(Resource):
    def get(self, id):

        application = Application.query.filter_by(id=id).first()
        if not application:
            abort(404, 'Application not found!')

        application_dict = application.to_dict()

        response = make_response(
            jsonify(application_dict),
            200,
        )

        return response
    
    def patch(self, id):
        application = Application.query.filter_by(id=id).first()
        if not application:
            abort(404, 'Application not found!')

        request.get_json = request.get_json()
        for key in request.get_json:
            setattr(application, key, request.get_json[key])

        db.session.add(application)
        db.session.commit()

        response = make_response(
            application.to_dict(),
            200,
        )
        return response
    
    def delete(self, id):
        application = Application.query.filter_by(id=id).first()

        if not application:
            abort(404, 'Application not found!')

        db.session.delete(application)
        db.session.commit()

        response = make_response(
            '',
            204,
        )

        return response
    
api.add_resource(ApplicationsByID, '/applications/<int:id>/')
    
    
class Companies(Resource):
    def get(self):

        companies = Company.query.all()
        companies_dict = [company.to_dict() for company in companies]

        response = make_response(
            jsonify(companies_dict),
            200,
        )

        return response
    
    def post(self):
        
        new_companies = Company(
            name=request.get_json()['name'],
            description=request.get_json()['description']
            )
        
        db.session.add(new_companies)
        db.session.commit()

        response_dict = new_companies.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )
        return response
    
api.add_resource(Companies, '/companies/')


class CompaniesByID(Resource):
    def get(self, id):

        company = Company.query.filter_by(id=id).first()
        if not company:
            abort(404, 'Company not found!')

        company_dict = company.to_dict()

        response = make_response(
            jsonify(company_dict),
            200,
        )

        return response
    
    def patch(self,id):
        company = Company.query.filter_by(id=id).first()
        if not company:
            abort(404, 'Company not found!')

        request.get_json = request.get_json()
        for key in request.get_json:
            setattr(company, key, request.get_json[key])

        db.session.add(company)
        db.session.commit()

        response = make_response(
            company.to_dict(),
            200,
        )
        return response
    
    def delete(self, id):
        company = Company.query.filter_by(id=id).first()

        if not company:
            abort(404, 'Company not found!')

        db.session.delete(company)
        db.session.commit()

        response = make_response(
            '',
            204,
        )

        return response
    
api.add_resource(CompaniesByID, '/companies/<int:id>/')
# Views go here!

if __name__ == '__main__' : 
    app.run(port=5555, debug=True)