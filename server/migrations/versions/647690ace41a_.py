"""empty message

Revision ID: 647690ace41a
Revises: 9e60b4955ae2
Create Date: 2023-03-30 14:43:43.256892

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '647690ace41a'
down_revision = '9e60b4955ae2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('email', sa.String(), nullable=True))
        batch_op.drop_column('username')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('email')
        batch_op.drop_column('name')

    # ### end Alembic commands ###
