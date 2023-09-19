import requests
import http.client
import json

# find answer of a question

def get_answer(TOKEN, WOOCLAP_ID, QUESTION_TITLE):
    conn = http.client.HTTPSConnection("app.wooclap.com")
    payload = ''
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+TOKEN
    }
    conn.request("GET", "/api/events/"+WOOCLAP_ID, payload, headers)
    res = conn.getresponse()
    data = res.read().decode()
    
    RESPONSES = json.loads(data)
    QUESTIONS = RESPONSES["questions"]

    for i in range(1, len(QUESTIONS)):
        if (QUESTION_TITLE == QUESTIONS[i]["title"]):
            match QUESTIONS[i]["__t"]:

                case "correctAnswer":
                    CORRECT_ANSWER = QUESTIONS[i]["correctAnswer"]

                case "OpenQuestion":
                    CORRECT_ANSWER = QUESTIONS[i]["allExpectedAnswers"]

                case "MCQ":
                    CORRECT_ANSWER = []
                    for y in range(len(QUESTIONS[i]["choices"])):
                        if QUESTIONS[i]["choices"][y]["isCorrect"]:
                            CORRECT_ANSWER.append(str(QUESTIONS[i]["choices"][y]["choice"]))

                case "FillInTheBlanks":
                    CORRECT_ANSWER = []
                    for y in range(len(QUESTIONS[i]["choices"])):
                        CORRECT_ANSWER.append(QUESTIONS[i]["choices"][y]["text"])

            return CORRECT_ANSWER