"""empty message

Revision ID: 90a255876fbb
Revises: ec200ee55dec
Create Date: 2023-03-07 14:26:09.411851

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '90a255876fbb'
down_revision = 'ec200ee55dec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('profile_favorite', sa.Column('id', sa.Integer(), nullable=False))
    op.alter_column('profile_favorite', 'profile_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('profile_favorite', 'favorite_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profile_favorite', 'favorite_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('profile_favorite', 'profile_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_column('profile_favorite', 'id')
    # ### end Alembic commands ###
