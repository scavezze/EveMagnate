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
export interface GetAlliancesNames200Ok {
    /**
     * alliance_id integer
     */
    alliance_id: number;

    /**
     * alliance_name string
     */
    alliance_name: string;

}
