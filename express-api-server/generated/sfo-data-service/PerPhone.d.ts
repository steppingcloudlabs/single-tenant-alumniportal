/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerPhoneRequestBuilder } from './PerPhoneRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerPhone" of service "SFOData".
 */
export declare class PerPhone extends Entity implements PerPhoneType {
    /**
     * Technical entity name for PerPhone.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPhone.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Area Code.
     * Maximum length: 32.
     * @nullable
     */
    areaCode?: string;
    /**
     * Country Code.
     * Maximum length: 32.
     * @nullable
     */
    countryCode?: string;
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
     * Extension.
     * Maximum length: 32.
     * @nullable
     */
    extension?: string;
    /**
     * Include All Records.
     * @nullable
     */
    includeAllRecords?: boolean;
    /**
     * Is Primary.
     * @nullable
     */
    isPrimary?: boolean;
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
     * Person ID External.
     * Maximum length: 100.
     */
    personIdExternal: string;
    /**
     * Phone Number.
     * Maximum length: 100.
     * @nullable
     */
    phoneNumber?: string;
    /**
     * Phone Type.
     * Maximum length: 100.
     */
    phoneType: string;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerPhone`.
     * @returns A builder that constructs instances of entity type `PerPhone`.
     */
    static builder(): EntityBuilderType<PerPhone, PerPhoneTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerPhone` entity type.
     * @returns A `PerPhone` request builder.
     */
    static requestBuilder(): PerPhoneRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPhone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPhone`.
     */
    static customField(fieldName: string): CustomField<PerPhone>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerPhoneType {
    areaCode?: string;
    countryCode?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    extension?: string;
    includeAllRecords?: boolean;
    isPrimary?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    personIdExternal: string;
    phoneNumber?: string;
    phoneType: string;
    personNav: PerPersonType;
}
export interface PerPhoneTypeForceMandatory {
    areaCode: string;
    countryCode: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    extension: string;
    includeAllRecords: boolean;
    isPrimary: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    personIdExternal: string;
    phoneNumber: string;
    phoneType: string;
    personNav: PerPersonType;
}
export declare namespace PerPhone {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AREA_CODE: StringField<PerPhone>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<PerPhone>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerPhone>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerPhone>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerPhone>;
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION: StringField<PerPhone>;
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_ALL_RECORDS: BooleanField<PerPhone>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<PerPhone>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerPhone>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerPhone>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerPhone>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerPhone>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerPhone>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<PerPhone>;
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_TYPE: StringField<PerPhone>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerPhone, PerPerson>;
    /**
     * All fields of the PerPhone entity.
     */
    const _allFields: Array<StringField<PerPhone> | DateField<PerPhone> | BooleanField<PerPhone> | OneToOneLink<PerPhone, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerPhone>;
    /**
     * All key fields of the PerPhone entity.
     */
    const _keyFields: Array<Selectable<PerPhone>>;
    /**
     * Mapping of all key field names to the respective static field property PerPhone.
     */
    const _keys: {
        [keys: string]: Selectable<PerPhone>;
    };
}
//# sourceMappingURL=PerPhone.d.ts.map