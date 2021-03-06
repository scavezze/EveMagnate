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
 * link object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdLink {
    /**
     * destination_pin_id integer
     */
    destination_pin_id: number;

    /**
     * link_level integer
     */
    link_level: number;

    /**
     * source_pin_id integer
     */
    source_pin_id: number;

}
