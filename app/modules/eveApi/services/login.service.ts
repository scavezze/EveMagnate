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
import { Character, VerifyTokenResponse, GetCharacterResponse } from '../model';
import * as moment from 'moment';

var config = require('../../../config.json');

@Injectable()
export class LoginService {
    state: String;
    currentCharacter: Character;
    private database: any;
    private tempCharacter: Character;


    constructor(private http: Http) {
        this.database = new Couchbase("data");
        this.database.createView("currentCharacter", "1", function(document: Character, emitter) {
            if(document.selectedAccount) {
                emitter.emit(document._id, document);
            }
        });
    }

    init() {
        var rows = this.database.executeQuery("currentCharacter");
        if(rows.length > 0) {
            this.currentCharacter = rows[0];
        }
    }

    loggedIn() {
        if(this.currentCharacter) {
            return true;
        } else {
            return false;
        }
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
        .flatMap(data => this.refreshCharacters(data as Character))
        .catch(this.handleErrors);  
    }

    refreshCharacters(character: Character) {
        let headers = new Headers();
        headers.append("Authorization", character.token_type + " " + character.access_token);
 
        return this.http.get(
            config.EveApi.SSOEndPoint + "/oauth/verify",
            { headers: headers }
        )
        .map(res => res.json())
        .map(this.handleRefreshCharacters.bind(this))
        .catch(this.handleErrors);   
    }

    getCurrentCharacter() {
        return this.currentCharacter;
    }

    getToken() {
         return new Promise(this.getTokenPromise.bind(this));
    } 

    private getTokenPromise(resolve, reject) {
        if(moment.utc(this.currentCharacter.expires_in).isAfter(moment().utc())) {
                resolve(this.currentCharacter.access_token);
        } else {
            let headers = new Headers();
            headers.append("Authorization", "Basic " + this.getAuthHeader());
            headers.append("Content-Type", "application/x-www-form-urlencoded");
    
            this.http.post(
                config.EveApi.SSOEndPoint + "/oauth/token",
                "grant_type=refresh_token&refresh_token=" + this.currentCharacter.refresh_token,
                { headers: headers }
            )
            .map(res => res.json())
            .map(this.updateVerifyToken.bind(this))
            .catch(this.handleErrors).subscribe(
                () => {
                    resolve(this.currentCharacter.access_token)
                },
                (error) => {
                    reject(error);
                }
            );
        }
    }

    private handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

     private updateVerifyToken(data) {
        this.currentCharacter.access_token = data.access_token;
        this.currentCharacter.expires_in = moment().utc().add((data.expires_in - 60), 's').toISOString();
        this.currentCharacter.refresh_token = data.refresh_token;
        this.database.updateDocument(this.currentCharacter._id, this.currentCharacter);
    }

    private handleVerifyToken(data: VerifyTokenResponse) {
        this.tempCharacter = new Character();
        this.tempCharacter.access_token = data.access_token;
        this.tempCharacter.expires_in = moment().utc().add((data.expires_in - 60), 's').toISOString();
        this.tempCharacter.refresh_token = data.refresh_token;
        this.tempCharacter.token_type = data.token_type;
        return this.tempCharacter;
    }

    private handleRefreshCharacters(data: GetCharacterResponse) {
        this.tempCharacter.CharacterID = data.CharacterID;
        this.tempCharacter.CharacterName = data.CharacterName;
        this.tempCharacter.ExpiresOn = data.ExpiresOn;
        this.tempCharacter.Scopes = data.Scopes;
        this.tempCharacter.TokenType = data.TokenType;
        this.tempCharacter.CharacterOwnerHash = data.CharacterOwnerHash;
        this.tempCharacter.IntellectualProperty = data.IntellectualProperty;
        this.tempCharacter.selectedAccount = true;
        this.tempCharacter._id = this.database.createDocument(this.tempCharacter);

        if(this.currentCharacter){
            this.currentCharacter.selectedAccount = false;
            this.database.updateDocument(this.currentCharacter._id, this.currentCharacter);
        }

        this.currentCharacter = this.tempCharacter;
        this.tempCharacter = null;
    }

    private getAuthHeader() {
        return base64.encode(config.EveApi.clientId + ":" + config.EveApi.secret);
    }
}