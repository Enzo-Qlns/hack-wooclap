import React, { Component } from 'react';
import Home from './views/Home';
import Http from './utils/Http';
import Utils from './utils/Utils';

class App extends Component {
  get_action(action, WOOCLAP_ID, NUMBER_ATTACK, QUESTION_TITLE, funcAs200, funcAsErr) {
    Http.request_get_action(action, WOOCLAP_ID, NUMBER_ATTACK, QUESTION_TITLE, (statusCode, jsonBody) => {
      if (200 === statusCode) {
        if (!Utils.isEmpty(funcAs200))
          funcAs200(jsonBody);
      }
      else if (400 === statusCode) {
        if (!Utils.isEmpty(funcAsErr))
          funcAsErr(jsonBody);
      }
      else {
        if (!Utils.isEmpty(funcAsErr)) {
          funcAsErr(jsonBody);
        };
      };
    });
  };
  render() {
    return (
      <Home getAction={this.get_action} />
    );
  };
};
export default App;