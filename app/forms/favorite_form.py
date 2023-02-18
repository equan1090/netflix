from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class FavoriteForm(FlaskForm):
    profile_id = IntegerField('Profile Id', validators=[DataRequired()])
    mal_id = IntegerField('Mal Id', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    youtube_id = StringField('Youtube_Id', validators=[DataRequired()])
    image= StringField('Image', validators=[DataRequired()])
    genres = StringField('Genres', validators=[DataRequired()])
    synopsis = StringField('Synopsis', validators=[DataRequired()])

    submit = SubmitField('Submit')
