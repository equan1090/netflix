from .db import db

class ProfileFavorite(db.Model):
    __tablename__ = 'profile_favorite'

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), nullable=False)
    favorite_id = db.Column(db.Integer, db.ForeignKey('favorite.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'profile_id': self.profile_id,
            'favorite_id': self.favorite_id
        }
