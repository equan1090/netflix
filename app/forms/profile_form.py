from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class ProfileForm(FlaskForm):
    name = StringField('Name', [DataRequired()])
    user_id = StringField("User Id", [DataRequired()])
    avatar_url=StringField("Avatar URL", [DataRequired()])

class EditProfileForm(FlaskForm):
    name = StringField('Name', [DataRequired()])
    avatar_url=StringField("Avatar URL", [DataRequired()])
    submit = SubmitField('Submit')
