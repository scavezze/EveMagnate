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
export interface GetKillmailsKillmailIdKillmailHashOk {
    /**
     * attackers array
     */
    attackers: Array<models.GetKillmailsKillmailIdKillmailHashAttacker>;

    /**
     * ID of the killmail
     */
    killmail_id: number;

    /**
     * Time that the victim was killed and the killmail generated 
     */
    killmail_time: Date;

    /**
     * Moon if the kill took place at one
     */
    moon_id?: number;

    /**
     * Solar system that the kill took place in 
     */
    solar_system_id: number;

    victim?: models.GetKillmailsKillmailIdKillmailHashVictim;

    /**
     * War if the killmail is generated in relation to an official war 
     */
    war_id?: number;

}
