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
export interface GetIncursions200Ok {
    /**
     * The constellation id in which this incursion takes place
     */
    constellation_id: number;

    /**
     * The attacking faction's id
     */
    faction_id: number;

    /**
     * Whether the final encounter has boss or not
     */
    has_boss: boolean;

    /**
     * A list of infested solar system ids that are a part of this incursion
     */
    infested_solar_systems: Array<number>;

    /**
     * Influence of this incursion as a float from 0 to 1
     */
    influence: number;

    /**
     * Staging solar system for this incursion
     */
    staging_solar_system_id: number;

    /**
     * The state of this incursion
     */
    state: GetIncursions200Ok.StateEnum;

    /**
     * The type of this incursion
     */
    type: string;

}
export namespace GetIncursions200Ok {
    export enum StateEnum {
        Withdrawing = <any> 'withdrawing',
        Mobilizing = <any> 'mobilizing',
        Established = <any> 'established'
    }
}
