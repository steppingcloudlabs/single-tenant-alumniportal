/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonEmpTerminationInfoRequestBuilder } from './PersonEmpTerminationInfoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PersonEmpTerminationInfo" of service "SFOData".
 */
export declare class PersonEmpTerminationInfo extends Entity implements PersonEmpTerminationInfoType {
    /**
     * Technical entity name for PersonEmpTerminationInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonEmpTerminationInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Active Employments Count.
     * @nullable
     */
    activeEmploymentsCount?: number;
    /**
     * Latest Termination Date.
     * @nullable
     */
    latestTerminationDate?: Moment;
    /**
     * Person ID External.
     * Maximum length: 100.
     */
    personIdExternal: string;
    /**
     * Returns an entity builder to construct instances `PersonEmpTerminationInfo`.
     * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
     */
    static builder(): EntityBuilderType<PersonEmpTerminationInfo, PersonEmpTerminationInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PersonEmpTerminationInfo` entity type.
     * @returns A `PersonEmpTerminationInfo` request builder.
     */
    static requestBuilder(): PersonEmpTerminationInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonEmpTerminationInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
     */
    static customField(fieldName: string): CustomField<PersonEmpTerminationInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PersonEmpTerminationInfoType {
    activeEmploymentsCount?: number;
    latestTerminationDate?: Moment;
    personIdExternal: string;
}
export interface PersonEmpTerminationInfoTypeForceMandatory {
    activeEmploymentsCount: number;
    latestTerminationDate: Moment;
    personIdExternal: string;
}
export declare namespace PersonEmpTerminationInfo {
    /**
     * Static representation of the [[activeEmploymentsCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_EMPLOYMENTS_COUNT: NumberField<PersonEmpTerminationInfo>;
    /**
     * Static representation of the [[latestTerminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LATEST_TERMINATION_DATE: DateField<PersonEmpTerminationInfo>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PersonEmpTerminationInfo>;
    /**
     * All fields of the PersonEmpTerminationInfo entity.
     */
    const _allFields: Array<NumberField<PersonEmpTerminationInfo> | DateField<PersonEmpTerminationInfo> | StringField<PersonEmpTerminationInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PersonEmpTerminationInfo>;
    /**
     * All key fields of the PersonEmpTerminationInfo entity.
     */
    const _keyFields: Array<Selectable<PersonEmpTerminationInfo>>;
    /**
     * Mapping of all key field names to the respective static field property PersonEmpTerminationInfo.
     */
    const _keys: {
        [keys: string]: Selectable<PersonEmpTerminationInfo>;
    };
}
//# sourceMappingURL=PersonEmpTerminationInfo.d.ts.map