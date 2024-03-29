"""empty message

Revision ID: 808aa060ef25
Revises: a08e614dd2c7
Create Date: 2023-02-18 00:39:49.514015

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '808aa060ef25'
down_revision = 'a08e614dd2c7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('favorite', sa.Column('youtube_id', sa.String(length=300), nullable=False))
    op.add_column('favorite', sa.Column('synopsis', sa.String(), nullable=False))
    op.drop_column('favorite', 'url')
    op.drop_column('favorite', 'description')
    # ### end Alembic commands ###

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('favorite', sa.Column('description', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('favorite', sa.Column('url', sa.VARCHAR(length=300), autoincrement=False, nullable=False))
    op.drop_column('favorite', 'synopsis')
    op.drop_column('favorite', 'youtube_id')
    # ### end Alembic commands ###
