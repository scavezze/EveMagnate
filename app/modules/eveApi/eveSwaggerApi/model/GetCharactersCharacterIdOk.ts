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
export interface GetCharactersCharacterIdOk {
    /**
     * The character's alliance ID
     */
    alliance_id?: number;

    /**
     * ancestry_id integer
     */
    ancestry_id?: number;

    /**
     * Creation date of the character
     */
    birthday: Date;

    /**
     * bloodline_id integer
     */
    bloodline_id: number;

    /**
     * The character's corporation ID
     */
    corporation_id: number;

    /**
     * description string
     */
    description?: string;

    /**
     * gender string
     */
    gender: GetCharactersCharacterIdOk.GenderEnum;

    /**
     * name string
     */
    name: string;

    /**
     * race_id integer
     */
    race_id: number;

    /**
     * security_status number
     */
    security_status?: number;

}
export namespace GetCharactersCharacterIdOk {
    export enum GenderEnum {
        Female = <any> 'female',
        Male = <any> 'male'
    }
}
