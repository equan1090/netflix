from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


profile_favorite = db.Table('profile_favorite',
                            db.Column('profile_id', db.Integer, db.ForeignKey(add_prefix_for_prod('profile.id'))),
                            db.Column('favorite_id', db.Integer, db.ForeignKey(add_prefix_for_prod('favorite.id')))
)

if environment == "production":
    profile_favorite.schema = SCHEMA

class Profile(db.Model):
    __tablename__='profile'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id =         db.Column(db.Integer, primary_key=True)
    name =       db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    avatar_url = db.Column(db.String(300), nullable=False)
    new_profile= db.Column(db.Boolean, nullable=False, default=True)

    user_id =    db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    favorites = db.relationship("Favorite", secondary='profile_favorite', back_populates="profiles")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'avatar_url': self.avatar_url,
            'new_profile': self.new_profile

        }

class Favorite(db.Model):
    __tablename__='favorite'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    mal_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(300), nullable=False)
    youtube_id = db.Column(db.String(300))
    image = db.Column(db.String(300), nullable=False)
    genres = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    profiles = db.relationship('Profile', secondary='profile_favorite', back_populates='favorites')

    def to_dict(self):
        return {
            "id": self.id,
            "mal_id": self.mal_id,
            "title": self.title,
            "youtube_id": self.youtube_id,
            "image": self.image,
            "genres": self.genres,
            "synopsis": self.synopsis,
            "created_at": self.created_at,
            # "profile_id": self.profile_id
        }
