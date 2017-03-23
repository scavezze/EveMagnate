import { Injectable } from '@angular/core';
import * as AdvancedWebView from 'nativescript-advanced-webview';
import { UUID } from 'angular2-uuid';

var config = require('../../../config.json');

@Injectable()
export class LoginService {
    state: String;

    loginToEveApi() {
        this.state = UUID.UUID();
        let url = config.EveApi.SSOEndPoint +"/oauth/authorize/?response_type=code&redirect_uri=" + encodeURIComponent(config.EveApi.redirectUri) + "&client_id=" + config.EveApi.clientId + "&scope=" + encodeURIComponent(config.EveApi.scope) + "&state=" + this.state;
        let opts: AdvancedWebView.AdvancedWebViewOptions = {
            url: url,
            showTitle: false // Android only     
        }
        
        AdvancedWebView.openAdvancedUrl(opts);
    }

    verifyAuthCode(authCode: String, state: String) {
        console.log("Code: " + authCode + " State: " + state + " == " + this.state);
        if(state === this.state) {

        } else {
            //Throw Error
        }
    }
}