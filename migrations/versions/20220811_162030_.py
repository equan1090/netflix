"""empty message

Revision ID: 234dec7af82c
Revises: b23e3947ae9b
Create Date: 2022-08-11 16:20:30.644544

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '234dec7af82c'
down_revision = 'b23e3947ae9b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('profile', 'avatar_url')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('profile', sa.Column('avatar_url', sa.VARCHAR(length=300), autoincrement=False, nullable=False))
    # ### end Alembic commands ###