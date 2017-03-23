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
export interface GetUniverseConstellationsConstellationIdOk {
    /**
     * constellation_id integer
     */
    constellation_id: number;

    /**
     * name string
     */
    name: string;

    position?: models.GetUniverseConstellationsConstellationIdPosition;

    /**
     * The region this constellation is in
     */
    region_id: number;

    /**
     * systems array
     */
    systems: Array<number>;

}
