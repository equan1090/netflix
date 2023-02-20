from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .profilefavorite import ProfileFavorite
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
