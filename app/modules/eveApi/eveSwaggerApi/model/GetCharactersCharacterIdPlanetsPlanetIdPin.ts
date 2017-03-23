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
 * pin object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdPin {
    /**
     * expiry_time string
     */
    expiry_time?: Date;

    extractor_details?: models.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails;

    factory_details?: models.GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails;

    /**
     * install_time string
     */
    install_time?: Date;

    /**
     * last_cycle_start string
     */
    last_cycle_start?: Date;

    /**
     * latitude number
     */
    latitude: number;

    /**
     * longitude number
     */
    longitude: number;

    /**
     * pin_id integer
     */
    pin_id: number;

    /**
     * schematic_id integer
     */
    schematic_id?: number;

    /**
     * type_id integer
     */
    type_id: number;

}
