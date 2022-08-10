from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class ProfileForm(FlaskForm):
    name = StringField('Name', [DataRequired()])
    user_id = IntegerField('User', validators=[DataRequired()])
    
