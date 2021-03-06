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
export interface GetWarsWarIdOk {
    aggressor?: models.GetWarsWarIdAggressor;

    /**
     * allied corporations or alliances, each object contains either corporation_id or alliance_id
     */
    allies?: Array<models.GetWarsWarIdAlly>;

    /**
     * Time that the war was declared
     */
    declared: Date;

    defender?: models.GetWarsWarIdDefender;

    /**
     * Time the war ended and shooting was no longer allowed
     */
    finished?: Date;

    /**
     * ID of the specified war
     */
    id: number;

    /**
     * Was the war declared mutual by both parties
     */
    mutual: boolean;

    /**
     * Is the war currently open for allies or not
     */
    open_for_allies: boolean;

    /**
     * Time the war was retracted but both sides could still shoot each other
     */
    retracted?: Date;

    /**
     * Time when the war started and both sides could shoot each other
     */
    started?: Date;

}
