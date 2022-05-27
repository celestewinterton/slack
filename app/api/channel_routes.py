from copyreg import remove_extension
from flask import Blueprint, render_template
from datetime import datetime
from ..forms.channel_form import ChannelForm
from ..utils import form_validation_errors
from ..models.user import Channel
from ..models.db import db
channel_routes = Blueprint('channels', __name__)


@channel_routes.route('/channels')
def get_all_channels():
  all_channels = Channel.query.all()
  return all_channels


@channel_routes.route('/channels/<int:id>')
def get_specific_channel(id):
  channel = Channel.query.get(id)
  return channel



@channel_routes.route('/channels' ,methods=['POST'])
def create_new_channel():
  form = ChannelForm()
  params = {
    'name': form.data['name'],
    'topic': form.data['topic'],
    'description': form.data['description']
  }
  if form.validate_on_submit():
    new_channel = Channel(**params)
    db.session.add(new_channel)
    db.session.commit()
    return new_channel
  return {'errors': form_validation_errors(form.errors)}, 401



@channel_routes.route('/channels/<int:id>',methods=['PATCH'])
def edit_channel(id):
  pass
  form = ChannelForm()
  if form.validate_on_submit():
    editable_channel = Channel.query.get(id)
    editable_channel = {
    'name': form.data['name'],
    'topic': form.data['topic'],
    'description': form.data['description']
  }
    db.session.commit()
    return editable_channel
  return {'errors': form_validation_errors(form.errors)}, 401



@channel_routes.route('/channels/<int:id>',methods=['DELETE'])
def delete_channel(id):
  remove_channel = Channel.query.get(id)
  db.session.delete(remove_channel)
  db.session.commit()
  return remove_channel