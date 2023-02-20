from flask import Blueprint
import requests
import os

url = os.environ.get('API_URL')
anime_routes = Blueprint('anime', __name__)



reqs = {
    "top": os.environ.get('API_URL') + 'top/anime',
}

@anime_routes.route("/trending")
def trending_anime():
    query={"filter": "airing", "limit": 25}
    res = requests.get(
        os.environ.get('API_URL') + 'top/anime',
        params=query
    )
    data = res.json()
    return data

@anime_routes.route("/top")
def popular_anime_series():
    """Return anime based off rank"""
    res = requests.get(
        os.environ.get('API_URL') + 'top/anime',
        params={"limit": 25}
    )

    data = res.json()
    return data

@anime_routes.route('/<int:id>/genre')
def getAnimeByGenre(id):
    query={"genres": id, "limit": 25, "sfw": True, "order_by": "popularity", "min_score":7}
    res = requests.get(
        os.environ.get('API_URL') + 'anime',
        params=query
    )

    data = res.json()
    return data
@anime_routes.route('/')
def getAllAnime():
    # query={"genres": id, "filter": 10}
    res = requests.get(
        os.environ.get('API_URL') + 'anime',
    )

    data = res.json()
    return data

@anime_routes.route('/search/<string:title>')
def searchAnime(title):
    query={"q": title, "limit": 50, "sfw": True, "order_by": "popularity", "min_score":2}

    res = requests.get(
        os.environ.get('API_URL') + 'anime',
        params=query
    )


    data = res.json()

    return data
