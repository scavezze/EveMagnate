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
 * 200 ok object
 */
export interface GetCharactersCharacterIdLocationOk {
    /**
     * solar_system_id integer
     */
    solar_system_id: number;

    /**
     * station_id integer
     */
    station_id?: number;

    /**
     * structure_id integer
     */
    structure_id?: number;

}
