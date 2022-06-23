from .db import db

class Favorite(db.Model):
    __tablename__='favorite'

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    show_id = db.Column(db.Integer, db.ForeignKey('shows.id'), nullable=False)

    users = db.relationship("User", back_populates='favorite')
    shows = db.relationship("Show", back_populates='favorite')
    
