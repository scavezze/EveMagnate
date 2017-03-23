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
export interface GetUniverseRaces200Ok {
    /**
     * The alliance generally associated with this race
     */
    alliance_id: number;

    /**
     * description string
     */
    description: string;

    /**
     * name string
     */
    name: string;

    /**
     * race_id integer
     */
    race_id: number;

}
