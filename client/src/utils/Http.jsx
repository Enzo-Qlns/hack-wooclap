import Utils from './Utils';
import Vars from "./Vars";

// open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/Users/enzoquelenis" --disable-web-security

const Http = {
    //  Génération des headers
    defaultHeaders(isJson) {
        const headers = new Headers();
        isJson && headers.append("Content-Type", "application/json");
        return headers;
    },
    //  Génération des options du call (méthode, body, headers...)
    defaultOptions(isJson = true) {
        const options = {};
        options.method = "GET";
        options.headers = Http.defaultHeaders(isJson);
        return options;
    },
    handleOups(err) {
        console.error('error', err);
    },
    //  Appel web generic
    async call(url = undefined, options = Http.defaultOptions(), onResponse = undefined) {
        try {
            //  Lancement du call REST si tout les paramètres sont présents
            if (!Utils.isEmpty(url) && !Utils.isEmpty(onResponse)) {
                //  On retourne l'ensemble de la promesse
                return await fetch(url, options).then((response) => {
                    //  On récupére la réponse serveur => on formate en JSON, avec le code http reçu
                    response.json().then(data => {
                        onResponse(response.status, data, response.headers);
                    });
                });
            }
            else if (!Utils.isEmpty(url)) //  Autrement call classique sans la couche de JSON
                return await fetch(url, options);
        }
        catch (err) {
            this.handleOups(err);
        }
    },

    request_get_action(action, WOOCLAP_ID, NUMBER_ATTACK, QUESTION_TITLE, onResponse) {
        const options = this.defaultOptions();
        options.method = 'POST';
        options.body = JSON.stringify({ "WOOCLAP_ID": WOOCLAP_ID, "QUESTION_TITLE": QUESTION_TITLE, "NUMBER_ATTACK": NUMBER_ATTACK });
        return this.call(Vars.getHost() + '/get_action?action=' + action, options, onResponse);
    },

};
export default Http;