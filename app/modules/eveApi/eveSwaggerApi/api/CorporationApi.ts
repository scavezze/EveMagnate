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
export class CorporationApi {
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
     * Get corporation information
     * Public information about a corporation  ---  Alternate route: &#x60;/v3/corporations/{corporation_id}/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An Eve corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationId(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<models.GetCorporationsCorporationIdOk> {
        return this.getCorporationsCorporationIdWithHttpInfo(corporationId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get alliance history
     * Get a list of all the alliances a corporation has been a member of  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/alliancehistory/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdAlliancehistory(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetCorporationsCorporationIdAlliancehistory200Ok>> {
        return this.getCorporationsCorporationIdAlliancehistoryWithHttpInfo(corporationId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get corporation icon
     * Get the icon urls for a corporation  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/icons/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdIcons(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<models.GetCorporationsCorporationIdIconsOk> {
        return this.getCorporationsCorporationIdIconsWithHttpInfo(corporationId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get corporation members
     * Read the current list of members if the calling character is a member.  ---  Alternate route: &#x60;/v2/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/members/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdMembers(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetCorporationsCorporationIdMembers200Ok>> {
        return this.getCorporationsCorporationIdMembersWithHttpInfo(corporationId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get corporation member roles
     * Return the roles of all members if the character has the personnel manager role or any grantable role.  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/roles/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdRoles(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetCorporationsCorporationIdRoles200Ok>> {
        return this.getCorporationsCorporationIdRolesWithHttpInfo(corporationId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get corporation structures
     * Get a list of corporation structures  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/structures/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/structures/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/structures/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param page Which page to query, 250 structures per page
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdStructures(corporationId: number, datasource?: string, language?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetCorporationsCorporationIdStructures200Ok>> {
        return this.getCorporationsCorporationIdStructuresWithHttpInfo(corporationId, datasource, language, page, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get corporation names
     * Resolve a set of corporation IDs to corporation names  ---  Alternate route: &#x60;/v1/corporations/names/&#x60;  Alternate route: &#x60;/legacy/corporations/names/&#x60;  Alternate route: &#x60;/dev/corporations/names/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationIds A comma separated list of corporation IDs
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsNames(corporationIds: Array<number>, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetCorporationsNames200Ok>> {
        return this.getCorporationsNamesWithHttpInfo(corporationIds, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get npc corporations
     * Get a list of npc corporations  ---  Alternate route: &#x60;/v1/corporations/npccorps/&#x60;  Alternate route: &#x60;/legacy/corporations/npccorps/&#x60;  Alternate route: &#x60;/dev/corporations/npccorps/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsNpccorps(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<number>> {
        return this.getCorporationsNpccorpsWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update structure vulnerability schedule
     * Update the vulnerability window schedule of a corporation structure  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/structures/{structure_id}/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/structures/{structure_id}/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/structures/{structure_id}/&#x60; 
     * @param corporationId A corporation ID
     * @param newSchedule New vulnerability window schedule for the structure
     * @param structureId A structure ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public putCorporationsCorporationIdStructuresStructureId(corporationId: number, newSchedule: Array<models.PutCorporationsCorporationIdStructuresStructureIdNewSchedule>, structureId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.putCorporationsCorporationIdStructuresStructureIdWithHttpInfo(corporationId, newSchedule, structureId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get corporation information
     * Public information about a corporation  ---  Alternate route: &#x60;/v3/corporations/{corporation_id}/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An Eve corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdWithHttpInfo(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationId.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Get alliance history
     * Get a list of all the alliances a corporation has been a member of  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/alliancehistory/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdAlliancehistoryWithHttpInfo(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/alliancehistory/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdAlliancehistory.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Get corporation icon
     * Get the icon urls for a corporation  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/icons/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdIconsWithHttpInfo(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/icons/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdIcons.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Get corporation members
     * Read the current list of members if the calling character is a member.  ---  Alternate route: &#x60;/v2/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/members/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdMembersWithHttpInfo(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/members/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdMembers.');
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
            method: RequestMethod.Get,
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
     * Get corporation member roles
     * Return the roles of all members if the character has the personnel manager role or any grantable role.  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/roles/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdRolesWithHttpInfo(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/roles/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdRoles.');
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
            method: RequestMethod.Get,
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
     * Get corporation structures
     * Get a list of corporation structures  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/structures/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/structures/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/structures/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationId A corporation ID
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param page Which page to query, 250 structures per page
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdStructuresWithHttpInfo(corporationId: number, datasource?: string, language?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/structures/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdStructures.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (language !== undefined) {
            queryParameters.set('language', <any>language);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
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
            method: RequestMethod.Get,
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
     * Get corporation names
     * Resolve a set of corporation IDs to corporation names  ---  Alternate route: &#x60;/v1/corporations/names/&#x60;  Alternate route: &#x60;/legacy/corporations/names/&#x60;  Alternate route: &#x60;/dev/corporations/names/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param corporationIds A comma separated list of corporation IDs
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsNamesWithHttpInfo(corporationIds: Array<number>, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/names/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationIds' is not null or undefined
        if (corporationIds === null || corporationIds === undefined) {
            throw new Error('Required parameter corporationIds was null or undefined when calling getCorporationsNames.');
        }
        if (corporationIds) {
            queryParameters.set('corporation_ids', corporationIds.join(COLLECTION_FORMATS['csv']));
        }

        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Get npc corporations
     * Get a list of npc corporations  ---  Alternate route: &#x60;/v1/corporations/npccorps/&#x60;  Alternate route: &#x60;/legacy/corporations/npccorps/&#x60;  Alternate route: &#x60;/dev/corporations/npccorps/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsNpccorpsWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/npccorps/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Update structure vulnerability schedule
     * Update the vulnerability window schedule of a corporation structure  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/structures/{structure_id}/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/structures/{structure_id}/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/structures/{structure_id}/&#x60; 
     * @param corporationId A corporation ID
     * @param newSchedule New vulnerability window schedule for the structure
     * @param structureId A structure ID
     * @param datasource The server name you would like data from
     * @param token Access token to use, if preferred over a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public putCorporationsCorporationIdStructuresStructureIdWithHttpInfo(corporationId: number, newSchedule: Array<models.PutCorporationsCorporationIdStructuresStructureIdNewSchedule>, structureId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/corporations/${corporation_id}/structures/${structure_id}/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId))
                    .replace('${' + 'structure_id' + '}', String(structureId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling putCorporationsCorporationIdStructuresStructureId.');
        }
        // verify required parameter 'newSchedule' is not null or undefined
        if (newSchedule === null || newSchedule === undefined) {
            throw new Error('Required parameter newSchedule was null or undefined when calling putCorporationsCorporationIdStructuresStructureId.');
        }
        // verify required parameter 'structureId' is not null or undefined
        if (structureId === null || structureId === undefined) {
            throw new Error('Required parameter structureId was null or undefined when calling putCorporationsCorporationIdStructuresStructureId.');
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
            method: RequestMethod.Put,
            headers: headers,
            body: newSchedule == null ? '' : JSON.stringify(newSchedule), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
