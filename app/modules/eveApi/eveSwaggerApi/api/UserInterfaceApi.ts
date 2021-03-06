/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.4.2.dev11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class UserInterfaceApi {
    protected basePath = 'https://esi.tech.ccp.is/latest';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Set Autopilot Waypoint
     * Set a solar system as autopilot waypoint  ---  Alternate route: &#x60;/v2/ui/autopilot/waypoint/&#x60;  Alternate route: &#x60;/dev/ui/autopilot/waypoint/&#x60; 
     * @param addToBeginning Whether this solar system should be added to the beginning of all waypoints
     * @param clearOtherWaypoints Whether clean other waypoints beforing adding this one
     * @param destinationId The destination to travel to, can be solar system, station or structure&#39;s id
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiAutopilotWaypoint(addToBeginning: boolean, clearOtherWaypoints: boolean, destinationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.postUiAutopilotWaypointWithHttpInfo(addToBeginning, clearOtherWaypoints, destinationId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Open Contract Window
     * Open the contract window inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/contract/&#x60; 
     * @param contractId The contract to open
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowContract(contractId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.postUiOpenwindowContractWithHttpInfo(contractId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Open Information Window
     * Open the information window for a character, corporation or alliance inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/information/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/information/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/information/&#x60; 
     * @param targetId The target to open
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowInformation(targetId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.postUiOpenwindowInformationWithHttpInfo(targetId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Open Market Details
     * Open the market details window for a specific typeID inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/marketdetails/&#x60; 
     * @param typeId The item type to open in market window
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowMarketdetails(typeId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.postUiOpenwindowMarketdetailsWithHttpInfo(typeId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Open New Mail Window
     * Open the New Mail window, according to settings from the request if applicable  ---  Alternate route: &#x60;/v1/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/newmail/&#x60; 
     * @param newMail The details of mail to create
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowNewmail(newMail: models.PostUiOpenwindowNewmailNewMail, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.postUiOpenwindowNewmailWithHttpInfo(newMail, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Set Autopilot Waypoint
     * Set a solar system as autopilot waypoint  ---  Alternate route: &#x60;/v2/ui/autopilot/waypoint/&#x60;  Alternate route: &#x60;/dev/ui/autopilot/waypoint/&#x60; 
     * @param addToBeginning Whether this solar system should be added to the beginning of all waypoints
     * @param clearOtherWaypoints Whether clean other waypoints beforing adding this one
     * @param destinationId The destination to travel to, can be solar system, station or structure&#39;s id
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiAutopilotWaypointWithHttpInfo(addToBeginning: boolean, clearOtherWaypoints: boolean, destinationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/ui/autopilot/waypoint/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'addToBeginning' is not null or undefined
        if (addToBeginning === null || addToBeginning === undefined) {
            throw new Error('Required parameter addToBeginning was null or undefined when calling postUiAutopilotWaypoint.');
        }
        // verify required parameter 'clearOtherWaypoints' is not null or undefined
        if (clearOtherWaypoints === null || clearOtherWaypoints === undefined) {
            throw new Error('Required parameter clearOtherWaypoints was null or undefined when calling postUiAutopilotWaypoint.');
        }
        // verify required parameter 'destinationId' is not null or undefined
        if (destinationId === null || destinationId === undefined) {
            throw new Error('Required parameter destinationId was null or undefined when calling postUiAutopilotWaypoint.');
        }
        if (addToBeginning !== undefined) {
            queryParameters.set('add_to_beginning', <any>addToBeginning);
        }

        if (clearOtherWaypoints !== undefined) {
            queryParameters.set('clear_other_waypoints', <any>clearOtherWaypoints);
        }

        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (destinationId !== undefined) {
            queryParameters.set('destination_id', <any>destinationId);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        headers.set('X-User-Agent', String(xUserAgent));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Open Contract Window
     * Open the contract window inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/contract/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/contract/&#x60; 
     * @param contractId The contract to open
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowContractWithHttpInfo(contractId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/ui/openwindow/contract/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'contractId' is not null or undefined
        if (contractId === null || contractId === undefined) {
            throw new Error('Required parameter contractId was null or undefined when calling postUiOpenwindowContract.');
        }
        if (contractId !== undefined) {
            queryParameters.set('contract_id', <any>contractId);
        }

        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        headers.set('X-User-Agent', String(xUserAgent));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Open Information Window
     * Open the information window for a character, corporation or alliance inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/information/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/information/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/information/&#x60; 
     * @param targetId The target to open
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowInformationWithHttpInfo(targetId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/ui/openwindow/information/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'targetId' is not null or undefined
        if (targetId === null || targetId === undefined) {
            throw new Error('Required parameter targetId was null or undefined when calling postUiOpenwindowInformation.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (targetId !== undefined) {
            queryParameters.set('target_id', <any>targetId);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        headers.set('X-User-Agent', String(xUserAgent));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Open Market Details
     * Open the market details window for a specific typeID inside the client  ---  Alternate route: &#x60;/v1/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/marketdetails/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/marketdetails/&#x60; 
     * @param typeId The item type to open in market window
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowMarketdetailsWithHttpInfo(typeId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/ui/openwindow/marketdetails/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'typeId' is not null or undefined
        if (typeId === null || typeId === undefined) {
            throw new Error('Required parameter typeId was null or undefined when calling postUiOpenwindowMarketdetails.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (typeId !== undefined) {
            queryParameters.set('type_id', <any>typeId);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        headers.set('X-User-Agent', String(xUserAgent));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Open New Mail Window
     * Open the New Mail window, according to settings from the request if applicable  ---  Alternate route: &#x60;/v1/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/legacy/ui/openwindow/newmail/&#x60;  Alternate route: &#x60;/dev/ui/openwindow/newmail/&#x60; 
     * @param newMail The details of mail to create
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postUiOpenwindowNewmailWithHttpInfo(newMail: models.PostUiOpenwindowNewmailNewMail, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/ui/openwindow/newmail/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'newMail' is not null or undefined
        if (newMail === null || newMail === undefined) {
            throw new Error('Required parameter newMail was null or undefined when calling postUiOpenwindowNewmail.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        headers.set('X-User-Agent', String(xUserAgent));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: newMail == null ? '' : JSON.stringify(newMail), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
