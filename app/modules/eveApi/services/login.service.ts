import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import * as AdvancedWebView from 'nativescript-advanced-webview';
import { UUID } from 'angular2-uuid';
import * as base64 from 'base-64';

var config = require('../../../config.json');

@Injectable()
export class LoginService {
    state: String;

    constructor(private http: Http) {}

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
        if(state !== this.state) {
            return Observable.throw("INVALID State Token.");
        }

        let headers = new Headers();
        headers.append("Authorization", "Basic " + this.getAuthHeader());
        headers.append("Content-Type", "application/x-www-form-urlencoded");
 
        return this.http.post(
            config.EveApi.SSOEndPoint + "/oauth/token",
            "grant_type=authorization_code&code=" + authCode,
            { headers: headers }
        )
        .map(res => res.json())
        .map(data => {
            console.log(JSON.stringify(data));    
        })
        .catch(this.handleErrors);
          
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    private getAuthHeader() {
        return base64.encode(config.EveApi.clientId + ":" + config.EveApi.secret);
    }
}