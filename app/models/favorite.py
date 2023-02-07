from .db import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import ARRAY
import ast
class Favorite(db.Model):
    __tablename__='favorite'

    id = db.Column(db.Integer, primary_key=True)
    mal_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(300), nullable=False)
    url = db.Column(db.String(300), nullable=False)
    image = db.Column(db.String(300), nullable=False)
    genres = db.Column(db.String, nullable=False)
    description = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    # profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), nullable=False)

    profiles = db.relationship('Profile', secondary='profile_favorite', back_populates='favorites')

    def to_dict(self):
        return {
            "id": self.id,
            "mal_id": self.mal_id,
            "title": self.title,
            "url": self.url,
            "image": self.image,
            "genres": self.genres,
            "description": self.description,
            "created_at": self.created_at,
            # "profile_id": self.profile_id
        }
