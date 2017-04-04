import * as moment from 'moment';

export class Character {
    constructor(obj: any = null) {
        if(obj) {
            this._id = obj._id;
            this.access_token = obj.access_token;
            this.token_type = obj.token_type;
            this.expires_in = obj.expires_in;
            this.refresh_token = obj.refresh_token;
            this.selectedAccount = obj.selectedAccount;
            this.CharacterID = obj.CharacterID;
            this.CharacterName = obj.CharacterName;
            this.ExpiresOn = obj.ExpiresOn;
            this.Scopes = obj.Scopes;
            this.TokenType = obj.TokenType;
            this.CharacterOwnerHash = obj.CharacterOwnerHash;
            this.IntellectualProperty = obj.IntellectualProperty;
        }
    }

    _id: number;

    access_token: string;

    token_type: string;

    private m_expires_in: moment.Moment;
    get expires_in():moment.Moment {
        return this.m_expires_in;
    }
    set expires_in(value:moment.Moment) {
        this.m_expires_in = moment(value);
    }

    refresh_token: string;

    selectedAccount: boolean;

    CharacterID: number;
    
    CharacterName: string;
    
    ExpiresOn: string;
    
    Scopes: string;
    
    TokenType: string;
    
    CharacterOwnerHash: string;
    
    IntellectualProperty: string;
}
