from components.core import generate_token

import http.client
import json

# Send word or sentences for WORDCLOUD

def send_answer(TOKEN):
    TEXT = ""
    ID_QUESTION = ""
    QUESTION_TITLE = ""
    WOOCLAP_ID = ""
    NBR_ATTACK = ""

    HEADERS = {
        'Authorization': f'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    }

    if WOOCLAP_ID == "":
        WOOCLAP_ID = input("WOOCLAP_ID ?\n> ")

    if QUESTION_TITLE == "":
        QUESTION_TITLE = input("QUESTION_TITLE ?\n> ")

    conn = http.client.HTTPSConnection("app.wooclap.com")
    conn.request("GET", f"/api/events/{WOOCLAP_ID}", headers=HEADERS)
    res = conn.getresponse()
    RESPONSES = json.loads(res.read().decode())

    QUESTIONS = RESPONSES.get("questions", [])
    for i in range(1, len(QUESTIONS)):
        try:
            if QUESTIONS[i].get("title") == QUESTION_TITLE:
                ID_QUESTION = QUESTIONS[i]["_id"]
                break
        except:
            continue

    if ID_QUESTION == "":
        ID_QUESTION = input("QUESTION_ID :\n> ")

    if TEXT == "":
        TEXT = input("WRITE SOMETHING :\n> ")

    if NBR_ATTACK == "":
        NBR_ATTACK = input("NUMBER OF ATTACK :\n> ")

    PAYLOAD = json.dumps({"text": TEXT})

    for _ in range(int(NBR_ATTACK)):
        conn.request("POST", f"/api/questions/{ID_QUESTION}/push_answer", body=PAYLOAD, headers=HEADERS)
        res = conn.getresponse()
        print(f"\n'{TEXT}' IS SENDING...")
