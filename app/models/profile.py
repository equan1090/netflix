from .db import db
from datetime import datetime
class Profile(db.Model):
    __tablename__='profile'

    id =         db.Column(db.Integer, primary_key=True)
    name =       db.Column(db.String(20), nullable=False)
    user_id =    db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    avatar_url = db.Column(db.String(300), nullable=False)
    new_profile= db.Column(db.Boolean, nullable=False, default=True)



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'avatar_url': self.avatar_url,
            'new_profile': self.new_profile

        }
