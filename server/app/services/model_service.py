import http.client
import json

class modelService():
    def __init__(self):
        pass

    def get_questions(self, token):
        conn = http.client.HTTPSConnection("app.wooclap.com")
        payload = ''
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }
        conn.request("GET", "/api/events/YATFCD", payload, headers)
        res = conn.getresponse()
        data = res.read().decode()
        return json.loads(data)
