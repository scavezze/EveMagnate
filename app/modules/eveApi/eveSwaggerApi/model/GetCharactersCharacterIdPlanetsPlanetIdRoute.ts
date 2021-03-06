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
 * route object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdRoute {
    /**
     * content_type_id integer
     */
    content_type_id: number;

    /**
     * destination_pin_id integer
     */
    destination_pin_id: number;

    /**
     * quantity number
     */
    quantity: number;

    /**
     * route_id integer
     */
    route_id: number;

    /**
     * source_pin_id integer
     */
    source_pin_id: number;

    /**
     * waypoints array
     */
    waypoints?: Array<models.GetCharactersCharacterIdPlanetsPlanetIdWaypoint>;

}
