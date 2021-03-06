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
 * destination object
 */
export interface GetUniverseStargatesStargateIdDestination {
    /**
     * The stargate this stargate connects to
     */
    stargate_id: number;

    /**
     * The solar system this stargate connects to
     */
    system_id: number;

}
