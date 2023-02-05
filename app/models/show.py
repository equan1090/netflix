from .db import db

class Show(db.Model):
    __tablename__='shows'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    image = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    release_date = db.Column(db.String)


    # favorite = db.relationship("Favorite", back_populates='shows', cascade="all, delete")
