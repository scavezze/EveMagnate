export interface Account {
    _id: number;

    access_token: string;

    token_type: string;

    expires_in: number;
  
    refresh_token: string;

    selectedAccount: boolean;
}
