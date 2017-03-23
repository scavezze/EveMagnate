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
export class DogmaApi {
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
     * Get attributes
     * Get a list of dogma attribute ids  ---  Alternate route: &#x60;/v1/dogma/attributes/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaAttributes(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<number>> {
        return this.getDogmaAttributesWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get attribute information
     * Get information on a dogma attribute  ---  Alternate route: &#x60;/v1/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/{attribute_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param attributeId A dogma attribute ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaAttributesAttributeId(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<models.GetDogmaAttributesAttributeIdOk> {
        return this.getDogmaAttributesAttributeIdWithHttpInfo(attributeId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get effects
     * Get a list of dogma effect ids  ---  Alternate route: &#x60;/v1/dogma/effects/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/&#x60;  Alternate route: &#x60;/dev/dogma/effects/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaEffects(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<number>> {
        return this.getDogmaEffectsWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get effect information
     * Get information on a dogma effect  ---  Alternate route: &#x60;/v1/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/dev/dogma/effects/{effect_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param effectId A dogma effect ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaEffectsEffectId(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<models.GetDogmaEffectsEffectIdOk> {
        return this.getDogmaEffectsEffectIdWithHttpInfo(effectId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get attributes
     * Get a list of dogma attribute ids  ---  Alternate route: &#x60;/v1/dogma/attributes/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaAttributesWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dogma/attributes/';

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
     * Get attribute information
     * Get information on a dogma attribute  ---  Alternate route: &#x60;/v1/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/{attribute_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param attributeId A dogma attribute ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaAttributesAttributeIdWithHttpInfo(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dogma/attributes/${attribute_id}/'
                    .replace('${' + 'attribute_id' + '}', String(attributeId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'attributeId' is not null or undefined
        if (attributeId === null || attributeId === undefined) {
            throw new Error('Required parameter attributeId was null or undefined when calling getDogmaAttributesAttributeId.');
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
     * Get effects
     * Get a list of dogma effect ids  ---  Alternate route: &#x60;/v1/dogma/effects/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/&#x60;  Alternate route: &#x60;/dev/dogma/effects/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaEffectsWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dogma/effects/';

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
     * Get effect information
     * Get information on a dogma effect  ---  Alternate route: &#x60;/v1/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/dev/dogma/effects/{effect_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param effectId A dogma effect ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getDogmaEffectsEffectIdWithHttpInfo(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dogma/effects/${effect_id}/'
                    .replace('${' + 'effect_id' + '}', String(effectId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'effectId' is not null or undefined
        if (effectId === null || effectId === undefined) {
            throw new Error('Required parameter effectId was null or undefined when calling getDogmaEffectsEffectId.');
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

}