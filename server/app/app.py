from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from services.add_users import add_users
from services.get_answer import get_answer
from services.model_service import modelService
from components.core import generate_token
from components.core import starter

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000", "http://localhost:3001"])

modelService = modelService()


@app.route('/')
def main_page():
    starter()
    return "\nATTACK (1) || GET_ANSWER (2) || SEND_ANSWER(WordCloud) (3)"


@app.route('/api/get_questions')
def get_questions():
    try:
        TOKEN = generate_token()
        result = modelService.get_questions(token=TOKEN)
        for question in result['questions']:
            print(question['title'])

        return jsonify({"status": "success", "detail": result['questions']}), 200
    except Exception as e:
        return jsonify({"status": "error", "detail": str(e)}), 400



@app.route('/api/get_action', methods=['POST'])
def get_action():
    data = request.get_json()

    TOKEN = generate_token()
    WOOCLAP_ID = data['WOOCLAP_ID']
    QUESTION_TITLE = data['QUESTION_TITLE']
    NUMBER_ATTACK = data['NUMBER_ATTACK']

    if not request.args.get('action'):
        return jsonify({"status": "error", "detail": "Action not specified"}), 400

    action = request.args.get('action')

    if int(action) == 1:
        add_users(WOOCLAP_ID, NUMBER_ATTACK)
        return jsonify({"status": "success", "detail": "Users added successfully"})

    elif int(action) == 2:
        response = get_answer(TOKEN, WOOCLAP_ID, QUESTION_TITLE)
        return jsonify({"status": "success", "detail": response})

    # elif int(action) == 3:
    #     send_answer(TOKEN)
    #     return jsonify({"status": "success", "message": "Answer sent successfully"})

    else:
        return jsonify({"status": "error", "detail": "Invalid action"}), 400


if __name__ == '__main__':
    app.run(debug=True, port=5002, host='0.0.0.0')
