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
 * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 */
export interface GetWarsWarIdDefender {
    /**
     * Alliance ID if and only if the defender is an alliance
     */
    alliance_id?: number;

    /**
     * Corporation ID if and only if the defender is a corporation
     */
    corporation_id?: number;

    /**
     * ISK value of ships the defender has killed
     */
    isk_destroyed: number;

    /**
     * The number of ships the defender has killed
     */
    ships_killed: number;

}
