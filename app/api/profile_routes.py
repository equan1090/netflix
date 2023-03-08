from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import db, Profile, Favorite
from app.forms import EditProfileForm, FavoriteForm


profile_routes = Blueprint('profile', __name__)

@profile_routes.route('/<int:id>')
@login_required
def select_profile(id):
    user_profiles = current_user.profiles
    for profile in user_profiles:
        if profile.id == id:

            return jsonify(profile.to_dict())


@profile_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_profile(id):
    profile = Profile.query.get(id)
    if profile:
        db.session.delete(profile)
        db.session.commit()
        return {'deleted': True}
    else:
        return {'deleted': False}

@profile_routes.route('/<int:id>', methods=['PATCH'])
@login_required
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
@login_required
def get_favorites(id):
    profile = Profile.query.get(id)
    favorites = profile.favorites

    return {'favorites': [favorite.to_dict() for favorite in favorites]}

@profile_routes.route('/<int:id>/favorites', methods=['POST'])
@login_required
def add_favorite(id):
    try:
        form = FavoriteForm()
        data = form.data
        form['csrf_token'].data = request.cookies['csrf_token']
        profile = Profile.query.get(id)

        new_favorite = Favorite(
            mal_id=data['mal_id'],
            title=data['title'],
            image=data['image'],
            youtube_id=data['youtube_id'],
            synopsis=data['synopsis'],
            genres=data['genres']
        )
        db.session.add(new_favorite)
        profile.favorites.append(new_favorite)
        db.session.commit()
        return "success"
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500



@profile_routes.route('/<int:id>/favorites/<int:fav_id>', methods=['DELETE'])
@login_required
def delete_favorite(id, fav_id):

    favorite = Favorite.query.get(fav_id)
    if favorite:
        profile = Profile.query.get(id)
        profile.favorites.remove(favorite)
        db.session.delete(favorite)
        db.session.commit()
        return {'deleted': True}
    else:
        return {'deleted': False}


# @login_required
# def save_favorite(pro_id, fav_id):
#     connection = ProfileFavorite(profile_id=pro_id, favorite_id=fav_id)
#     db.session.add(connection)
#     db.session.commit()
#     return connection.to_dict()





