from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Profile, Favorite, ProfileFavorite
from app.forms import EditProfileForm, FavoriteForm


profile_routes = Blueprint('profile', __name__)

@profile_routes.route('/<int:id>')
def get_profile(id):
    profiles = Profile.query.filter(Profile.id == id).first()
    return profiles.to_dict()


@profile_routes.route('/<int:id>', methods=['PATCH'])
def edit_profile(id):

    form = EditProfileForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        profile = Profile.query.filter(Profile.id == id).first()
        profile.name = data['name']

        profile.avatar_url = data['avatar_url']

        db.session.commit()
        return profile.to_dict()

    return 400

@profile_routes.route('/<int:id>/favorites')
def get_favorites(id):
    favorites = ProfileFavorite.query.filter(ProfileFavorite.profile_id == id).all()
    print('-------------------GET_FAVORITES------------------', favorites)
    return {'favorites': [favorite.to_dict() for favorite in favorites]}

@profile_routes.route('/<int:id>/favorites', methods=['POST'])
def add_favorite(id):
    form = FavoriteForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    print('-------------------ADD_FAVORITE form------------------',)
    print('genre', data['genres'])


    new_favorite = Favorite(
        mal_id=data['mal_id'],
        title=data['title'],
        image=data['image'],
        url=data['url'],
        description=data['description'],
        genres=data['genres']
    )
    print('-------INSIDE FORM VALIDATE-------')
    db.session.add(new_favorite)
    db.session.commit()
    save_favorite(id, new_favorite.id)

    return new_favorite.to_dict()
    return 'ERROR INSIDE ADD_FAVORITE'

def save_favorite(pro_id, fav_id):
    connection = ProfileFavorite(profile_id=pro_id, favorite_id=fav_id)
    db.session.add(connection)
    db.session.commit()
    return connection.to_dict()
