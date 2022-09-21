from flask import Blueprint
import requests
import os

url = os.environ.get('API_URL')
anime_routes = Blueprint('anime', __name__)


@anime_routes.route("/top")
def popular_anime_series():
    """Return anime based off rank"""
    print('************Inside populare anime series function in api')
    res = requests.get(
        os.environ.get('API_URL') + 'top/anime',
        params={"limit": 10}
    )

    anime = res.json()
    return anime
