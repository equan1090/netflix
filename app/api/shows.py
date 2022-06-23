from flask import Blueprint, request
import os
import tmdbsimple as tmdb
tmdb.API_KEY = os.environ.get('API_KEY')
def popular_anime():
    pass

