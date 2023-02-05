from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class FavoriteForm(FlaskForm):
    mal_id = IntegerField('Mal Id', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    url = StringField('URL', validators=[DataRequired()])
    image= StringField('Image', validators=[DataRequired()])
    genres = StringField('Genres', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])

    submit = SubmitField('Submit')
