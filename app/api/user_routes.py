
from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required
from app.models import User, Profile, db
from app.forms import ProfileForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/profiles')
def all_profiles(id):
    profiles = Profile.query.filter(Profile.user_id == id).all()
    return {
        'profiles': [profile.to_dict() for profile in profiles]
    }

@user_routes.route('/<int:id>/profiles', methods=['post'])
def create_profile(id):

    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        profile = Profile(name=data['name'],
                            user_id=data['user_id'],
                            avatar_url=data['avatar_url']
                            )
        db.session.add(profile)
        db.session.commit()
        return profile.to_dict()

    else:
        return print('Data was broken')

