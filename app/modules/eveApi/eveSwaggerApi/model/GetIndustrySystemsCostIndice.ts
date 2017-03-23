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
 * cost_indice object
 */
export interface GetIndustrySystemsCostIndice {
    /**
     * activity string
     */
    activity: GetIndustrySystemsCostIndice.ActivityEnum;

    /**
     * cost_index number
     */
    cost_index: number;

}
export namespace GetIndustrySystemsCostIndice {
    export enum ActivityEnum {
        None = <any> 'none',
        Manufacturing = <any> 'manufacturing',
        ResearchingTechnology = <any> 'researching_technology',
        ResearchingTimeEfficiency = <any> 'researching_time_efficiency',
        ResearchingMaterialEfficiency = <any> 'researching_material_efficiency',
        Copying = <any> 'copying',
        Duplicating = <any> 'duplicating',
        Invention = <any> 'invention',
        ReverseEngineering = <any> 'reverse_engineering'
    }
}
