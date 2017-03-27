import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import * as AdvancedWebView from 'nativescript-advanced-webview';
import { UUID } from 'angular2-uuid';
import * as base64 from 'base-64';
import { Couchbase } from "nativescript-couchbase";
import { Account } from '../model';

var config = require('../../../config.json');

@Injectable()
export class LoginService {
    state: String;
    currentAccount: Account;
    private database: any;


    constructor(private http: Http) {
        this.database = new Couchbase("data");
    }

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
        .map(this.handleVerifyToken.bind(this))
        .flatMap(data => this.refreshCharacters(data as Account))
        .catch(this.handleErrors)   
    }

    refreshCharacters(authData: Account) {
        let headers = new Headers();
        headers.append("Authorization", authData.token_type + " " + authData.access_token);
 
        return this.http.get(
            config.EveApi.SSOEndPoint + "/oauth/verify",
            { headers: headers }
        )
        .map(res => res.json())
        .map(this.handleRefreshCharacters.bind(this))
        .catch(this.handleErrors);   
    }

    getToken() {
        return this.currentAccount.access_token;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    private handleVerifyToken(data) {
        let account = data as Account;
        account.selectedAccount = true;
        let documentId = this.database.createDocument(data as Account);
        account = this.database.getDocument(documentId) as Account;
        this.currentAccount = account
        return account;
    }

    private handleRefreshCharacters(data) {
        console.log(JSON.stringify(data));
    }

    private getAuthHeader() {
        return base64.encode(config.EveApi.clientId + ":" + config.EveApi.secret);
    }
}