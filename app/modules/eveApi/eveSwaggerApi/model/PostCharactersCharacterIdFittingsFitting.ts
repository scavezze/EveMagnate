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
 * fitting object
 */
export interface PostCharactersCharacterIdFittingsFitting {
    /**
     * description string
     */
    description: string;

    /**
     * items array
     */
    items: Array<models.PostCharactersCharacterIdFittingsItem>;

    /**
     * name string
     */
    name: string;

    /**
     * ship_type_id integer
     */
    ship_type_id: number;

}
