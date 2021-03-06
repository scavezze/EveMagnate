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
export interface GetCharactersCharacterIdBookmarks200Ok {
    /**
     * bookmark_id integer
     */
    bookmark_id: number;

    /**
     * create_date string
     */
    create_date: Date;

    /**
     * creator_id integer
     */
    creator_id: number;

    /**
     * folder_id integer
     */
    folder_id?: number;

    /**
     * memo string
     */
    memo: string;

    /**
     * note string
     */
    note: string;

    /**
     * owner_id integer
     */
    owner_id: number;

    target?: models.GetCharactersCharacterIdBookmarksTarget;

}
