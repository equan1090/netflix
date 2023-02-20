from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy.dialects.postgresql import ARRAY

import ast
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
    # profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), nullable=False)

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
