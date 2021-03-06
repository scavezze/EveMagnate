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
export interface GetInsurancePrices200Ok {
    /**
     * A list of a available insurance levels for this ship type
     */
    levels: Array<models.GetInsurancePricesLevel>;

    /**
     * type_id integer
     */
    type_id: number;

}
