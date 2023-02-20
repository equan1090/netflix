from .db import db, environment, SCHEMA, add_prefix_for_prod

class ProfileFavorite(db.Model):
    __tablename__ = 'profile_favorite'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('profile.id')), nullable=False)
    favorite_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('favorite.id')), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'profile_id': self.profile_id,
            'favorite_id': self.favorite_id
        }
