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

import * as models from './models';

/**
 * response schema
 */
export interface PutCharactersCharacterIdCalendarEventIdResponse {
    /**
     * response string
     */
    response: PutCharactersCharacterIdCalendarEventIdResponse.ResponseEnum;

}
export namespace PutCharactersCharacterIdCalendarEventIdResponse {
    export enum ResponseEnum {
        Accepted = <any> 'accepted',
        Declined = <any> 'declined',
        Tentative = <any> 'tentative'
    }
}