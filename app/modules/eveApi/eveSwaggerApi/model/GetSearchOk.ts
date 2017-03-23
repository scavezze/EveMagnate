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
export interface GetSearchOk {
    /**
     * agent array
     */
    agent?: Array<number>;

    /**
     * alliance array
     */
    alliance?: Array<number>;

    /**
     * character array
     */
    character?: Array<number>;

    /**
     * constellation array
     */
    constellation?: Array<number>;

    /**
     * corporation array
     */
    corporation?: Array<number>;

    /**
     * faction array
     */
    faction?: Array<number>;

    /**
     * inventorytype array
     */
    inventorytype?: Array<number>;

    /**
     * region array
     */
    region?: Array<number>;

    /**
     * solarsystem array
     */
    solarsystem?: Array<number>;

    /**
     * station array
     */
    station?: Array<number>;

    /**
     * wormhole array
     */
    wormhole?: Array<number>;

}
