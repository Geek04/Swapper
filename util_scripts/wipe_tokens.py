import requests
import json


for token in json.loads(requests.get("http://localhost:3000/api/tokens").content.decode("utf-8")):
    requests.delete(f"http://localhost:3000/api/tokens/{token['_id']}")
