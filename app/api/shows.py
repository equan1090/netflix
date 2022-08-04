from flask import Blueprint
import requests
import os

url = os.environ.get('API_URL')

print(url)

# def popular_anime_series():
#     req = requests.get()

