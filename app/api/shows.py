from flask import Blueprint
import requests
import os
import tmdbsimple as tmdb
tmdb.API_KEY = os.environ.get('API_KEY')
api_key = os.environ.get('API_KEY')
series_url = 'https://api.themoviedb.org/3/discover/tv'

response = requests.get('https://api.themoviedb.org/3/discover/tv?api_key=' + api_key + '&page=1&with_genres=16&with_keywords=210024')
print(api_key)

# def popular_anime_series():
#     req = requests.get()

