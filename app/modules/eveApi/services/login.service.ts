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
    authData: Object;

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
            this.authData = data; 
        })
        .catch(this.handleErrors);   
    }

    getCharacters() {
        let headers = new Headers();
        headers.append("Authorization", this.authData["token_type"] + " " + this.authData["access_token"]);
 
        return this.http.get(
            config.EveApi.SSOEndPoint + "/oauth/verify",
            { headers: headers }
        )
        .map(res => res.json())
        .map(data => {
            return data;
        })
        .catch(this.handleErrors);   
    }

    getToken() {
        return this.authData["access_token"];
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    private getAuthHeader() {
        return base64.encode(config.EveApi.clientId + ":" + config.EveApi.secret);
    }
}