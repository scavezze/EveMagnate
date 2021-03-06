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
export interface GetCharactersCharacterIdContacts200Ok {
    /**
     * contact_id integer
     */
    contact_id: number;

    /**
     * contact_type string
     */
    contact_type: GetCharactersCharacterIdContacts200Ok.ContactTypeEnum;

    /**
     * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
     */
    is_blocked?: boolean;

    /**
     * Whether this contact is being watched
     */
    is_watched?: boolean;

    /**
     * Custom label of the contact
     */
    label_id?: number;

    /**
     * Standing of the contact
     */
    standing: number;

}
export namespace GetCharactersCharacterIdContacts200Ok {
    export enum ContactTypeEnum {
        Character = <any> 'character',
        Corporation = <any> 'corporation',
        Alliance = <any> 'alliance',
        Faction = <any> 'faction'
    }
}
