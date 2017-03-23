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
export interface GetLoyaltyStoresCorporationIdOffers200Ok {
    /**
     * isk_cost number
     */
    isk_cost: number;

    /**
     * lp_cost integer
     */
    lp_cost: number;

    /**
     * offer_id integer
     */
    offer_id: number;

    /**
     * quantity integer
     */
    quantity: number;

    /**
     * required_items array
     */
    required_items: Array<models.GetLoyaltyStoresCorporationIdOffersRequiredItem>;

    /**
     * type_id integer
     */
    type_id: number;

}