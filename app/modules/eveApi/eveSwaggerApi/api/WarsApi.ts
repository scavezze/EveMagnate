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
export class WarsApi {
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
     * List wars
     * Return a list of wars  ---  Alternate route: &#x60;/v1/wars/&#x60;  Alternate route: &#x60;/legacy/wars/&#x60;  Alternate route: &#x60;/dev/wars/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param maxWarId Only return wars with ID smaller than this.
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWars(datasource?: string, maxWarId?: number, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<number>> {
        return this.getWarsWithHttpInfo(datasource, maxWarId, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get war information
     * Return details about a war  ---  Alternate route: &#x60;/v1/wars/{war_id}/&#x60;  Alternate route: &#x60;/legacy/wars/{war_id}/&#x60;  Alternate route: &#x60;/dev/wars/{war_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param warId ID for a war
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWarsWarId(warId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<models.GetWarsWarIdOk> {
        return this.getWarsWarIdWithHttpInfo(warId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List kills for a war
     * Return a list of kills related to a war  ---  Alternate route: &#x60;/v1/wars/{war_id}/killmails/&#x60;  Alternate route: &#x60;/legacy/wars/{war_id}/killmails/&#x60;  Alternate route: &#x60;/dev/wars/{war_id}/killmails/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param warId A valid war ID
     * @param datasource The server name you would like data from
     * @param page Which page to query, starting at 1, 2000 killmails per page.
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWarsWarIdKillmails(warId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<models.GetWarsWarIdKillmails200Ok>> {
        return this.getWarsWarIdKillmailsWithHttpInfo(warId, datasource, page, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * List wars
     * Return a list of wars  ---  Alternate route: &#x60;/v1/wars/&#x60;  Alternate route: &#x60;/legacy/wars/&#x60;  Alternate route: &#x60;/dev/wars/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param maxWarId Only return wars with ID smaller than this.
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWarsWithHttpInfo(datasource?: string, maxWarId?: number, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wars/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (maxWarId !== undefined) {
            queryParameters.set('max_war_id', <any>maxWarId);
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
     * Get war information
     * Return details about a war  ---  Alternate route: &#x60;/v1/wars/{war_id}/&#x60;  Alternate route: &#x60;/legacy/wars/{war_id}/&#x60;  Alternate route: &#x60;/dev/wars/{war_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param warId ID for a war
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWarsWarIdWithHttpInfo(warId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wars/${war_id}/'
                    .replace('${' + 'war_id' + '}', String(warId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'warId' is not null or undefined
        if (warId === null || warId === undefined) {
            throw new Error('Required parameter warId was null or undefined when calling getWarsWarId.');
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
     * List kills for a war
     * Return a list of kills related to a war  ---  Alternate route: &#x60;/v1/wars/{war_id}/killmails/&#x60;  Alternate route: &#x60;/legacy/wars/{war_id}/killmails/&#x60;  Alternate route: &#x60;/dev/wars/{war_id}/killmails/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param warId A valid war ID
     * @param datasource The server name you would like data from
     * @param page Which page to query, starting at 1, 2000 killmails per page.
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getWarsWarIdKillmailsWithHttpInfo(warId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wars/${war_id}/killmails/'
                    .replace('${' + 'war_id' + '}', String(warId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'warId' is not null or undefined
        if (warId === null || warId === undefined) {
            throw new Error('Required parameter warId was null or undefined when calling getWarsWarIdKillmails.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
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

}
