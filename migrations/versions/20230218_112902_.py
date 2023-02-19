"""empty message

Revision ID: 16f9e0d86123
Revises: 808aa060ef25
Create Date: 2023-02-18 11:29:02.965746

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '16f9e0d86123'
down_revision = '808aa060ef25'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('favorite', 'youtube_id',
               existing_type=sa.VARCHAR(length=300),
               nullable=True)
    op.drop_constraint('profile_user_id_fkey', 'profile', type_='foreignkey')
    op.create_foreign_key(None, 'profile', 'users', ['user_id'], ['id'], ondelete='CASCADE')
    op.drop_constraint('profile_favorite_favorite_id_fkey', 'profile_favorite', type_='foreignkey')
    op.drop_constraint('profile_favorite_profile_id_fkey', 'profile_favorite', type_='foreignkey')
    op.create_foreign_key(None, 'profile_favorite', 'favorite', ['favorite_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key(None, 'profile_favorite', 'profile', ['profile_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'profile_favorite', type_='foreignkey')
    op.drop_constraint(None, 'profile_favorite', type_='foreignkey')
    op.create_foreign_key('profile_favorite_profile_id_fkey', 'profile_favorite', 'profile', ['profile_id'], ['id'])
    op.create_foreign_key('profile_favorite_favorite_id_fkey', 'profile_favorite', 'favorite', ['favorite_id'], ['id'])
    op.drop_constraint(None, 'profile', type_='foreignkey')
    op.create_foreign_key('profile_user_id_fkey', 'profile', 'users', ['user_id'], ['id'])
    op.alter_column('favorite', 'youtube_id',
               existing_type=sa.VARCHAR(length=300),
               nullable=False)
    # ### end Alembic commands ###