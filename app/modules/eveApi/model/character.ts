import * as moment from 'moment';

export class Character {
    _id: number;

    access_token: string;

    token_type: string;

    expires_in: moment.Moment;
  
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
