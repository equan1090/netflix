from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Profile
from app.forms import EditProfileForm


profile_routes = Blueprint('profile', __name__)

@profile_routes.route('/<int:id>')
def get_profile(id):
    profiles = Profile.query.get(id)
    return {"profiles": [profile.to_dict() for profile in profiles]}


@profile_routes.route('/<int:id>', methods=['PATCH'])
def edit_profile(id):

    form = EditProfileForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print('got inside validate on submit')
        profile = Profile.query.filter(Profile.id == id).first()
        profile.name = data['name']

        profile.avatar_url = data['avatar_url']

        db.session.commit()
        return profile.to_dict()

    return 400

