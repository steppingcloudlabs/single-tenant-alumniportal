/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpJobRelationshipsRequestBuilder } from './EmpJobRelationshipsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "EmpJobRelationships" of service "SFOData".
 */
export declare class EmpJobRelationships extends Entity implements EmpJobRelationshipsType {
    /**
     * Technical entity name for EmpJobRelationships.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpJobRelationships.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * operation.
     * @nullable
     */
    operation?: string;
    /**
     * Name.
     * Maximum length: 384.
     * @nullable
     */
    relUserId?: string;
    /**
     * Relationship Type.
     * Maximum length: 100.
     */
    relationshipType: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    relEmploymentNav: EmpEmployment;
    /**
     * Returns an entity builder to construct instances `EmpJobRelationships`.
     * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
     */
    static builder(): EntityBuilderType<EmpJobRelationships, EmpJobRelationshipsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpJobRelationships` entity type.
     * @returns A `EmpJobRelationships` request builder.
     */
    static requestBuilder(): EmpJobRelationshipsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJobRelationships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
     */
    static customField(fieldName: string): CustomField<EmpJobRelationships>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
export interface EmpJobRelationshipsType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    relUserId?: string;
    relationshipType: string;
    startDate: Moment;
    userId: string;
    employmentNav: EmpEmploymentType;
    relEmploymentNav: EmpEmploymentType;
}
export interface EmpJobRelationshipsTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    relUserId: string;
    relationshipType: string;
    startDate: Moment;
    userId: string;
    employmentNav: EmpEmploymentType;
    relEmploymentNav: EmpEmploymentType;
}
export declare namespace EmpJobRelationships {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpJobRelationships>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpJobRelationships>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<EmpJobRelationships>;
    /**
     * Static representation of the [[relUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REL_USER_ID: StringField<EmpJobRelationships>;
    /**
     * Static representation of the [[relationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_TYPE: StringField<EmpJobRelationships>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpJobRelationships>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpJobRelationships>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpJobRelationships, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[relEmploymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REL_EMPLOYMENT_NAV: OneToOneLink<EmpJobRelationships, EmpEmployment>;
    /**
     * All fields of the EmpJobRelationships entity.
     */
    const _allFields: Array<StringField<EmpJobRelationships> | DateField<EmpJobRelationships> | OneToOneLink<EmpJobRelationships, EmpEmployment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpJobRelationships>;
    /**
     * All key fields of the EmpJobRelationships entity.
     */
    const _keyFields: Array<Selectable<EmpJobRelationships>>;
    /**
     * Mapping of all key field names to the respective static field property EmpJobRelationships.
     */
    const _keys: {
        [keys: string]: Selectable<EmpJobRelationships>;
    };
}
//# sourceMappingURL=EmpJobRelationships.d.ts.map