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
 * Full details of a specific event
 */
export interface GetCharactersCharacterIdCalendarEventIdOk {
    /**
     * date string
     */
    date: Date;

    /**
     * Length in minutes
     */
    duration: number;

    /**
     * event_id integer
     */
    event_id: number;

    /**
     * importance integer
     */
    importance: number;

    /**
     * owner_id integer
     */
    owner_id: number;

    /**
     * owner_name string
     */
    owner_name: string;

    /**
     * owner_type string
     */
    owner_type: GetCharactersCharacterIdCalendarEventIdOk.OwnerTypeEnum;

    /**
     * response string
     */
    response: string;

    /**
     * text string
     */
    text: string;

    /**
     * title string
     */
    title: string;

}
export namespace GetCharactersCharacterIdCalendarEventIdOk {
    export enum OwnerTypeEnum {
        EveServer = <any> 'eve_server',
        Corporation = <any> 'corporation',
        Faction = <any> 'faction',
        Character = <any> 'character',
        Alliance = <any> 'alliance'
    }
}
