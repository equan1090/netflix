"""empty message

Revision ID: ed7adf343e58
Revises: cf650f3e813e
Create Date: 2023-02-02 22:12:42.874886

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ed7adf343e58'
down_revision = 'cf650f3e813e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('favorite', sa.Column('mal_id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('favorite', 'mal_id')
    # ### end Alembic commands ###
