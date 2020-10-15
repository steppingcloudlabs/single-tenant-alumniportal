/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerAddressDefltRequestBuilder } from './PerAddressDefltRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerAddressDEFLT" of service "SFOData".
 */
export declare class PerAddressDeflt extends Entity implements PerAddressDefltType {
    /**
     * Technical entity name for PerAddressDeflt.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerAddressDeflt.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * address1.
     * Maximum length: 256.
     * @nullable
     */
    address1?: string;
    /**
     * address2.
     * Maximum length: 256.
     * @nullable
     */
    address2?: string;
    /**
     * address3.
     * Maximum length: 256.
     * @nullable
     */
    address3?: string;
    /**
     * Neighborhood.
     * Maximum length: 256.
     * @nullable
     */
    address4?: string;
    /**
     * Municipality Name.
     * Maximum length: 256.
     * @nullable
     */
    address5?: string;
    /**
     * Address Type.
     * Maximum length: 30.
     */
    addressType: string;
    /**
     * city.
     * Maximum length: 256.
     * @nullable
     */
    city?: string;
    /**
     * country.
     * Maximum length: 256.
     * @nullable
     */
    country?: string;
    /**
     * County.
     * Maximum length: 256.
     * @nullable
     */
    county?: string;
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
     * Employee User Id Field.
     * Maximum length: 256.
     * @nullable
     */
    empUsersSysId?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Include All Records.
     * @nullable
     */
    includeAllRecords?: boolean;
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
     * notes.
     * Maximum length: 4000.
     * @nullable
     */
    notes?: string;
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
     * province.
     * Maximum length: 256.
     * @nullable
     */
    province?: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * State.
     * Maximum length: 256.
     * @nullable
     */
    state?: string;
    /**
     * zipCode.
     * Maximum length: 256.
     * @nullable
     */
    zipCode?: string;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerAddressDeflt`.
     * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
     */
    static builder(): EntityBuilderType<PerAddressDeflt, PerAddressDefltTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerAddressDeflt` entity type.
     * @returns A `PerAddressDeflt` request builder.
     */
    static requestBuilder(): PerAddressDefltRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerAddressDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
     */
    static customField(fieldName: string): CustomField<PerAddressDeflt>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerAddressDefltType {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    address5?: string;
    addressType: string;
    city?: string;
    country?: string;
    county?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    empUsersSysId?: string;
    endDate?: Moment;
    includeAllRecords?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    notes?: string;
    operation?: string;
    personIdExternal: string;
    province?: string;
    startDate: Moment;
    state?: string;
    zipCode?: string;
    personNav: PerPersonType;
}
export interface PerAddressDefltTypeForceMandatory {
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    address5: string;
    addressType: string;
    city: string;
    country: string;
    county: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    empUsersSysId: string;
    endDate: Moment;
    includeAllRecords: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    notes: string;
    operation: string;
    personIdExternal: string;
    province: string;
    startDate: Moment;
    state: string;
    zipCode: string;
    personNav: PerPersonType;
}
export declare namespace PerAddressDeflt {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_1: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[address3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_3: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[address4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_4: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[address5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_5: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[empUsersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_USERS_SYS_ID: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_ALL_RECORDS: BooleanField<PerAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVINCE: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<PerAddressDeflt>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<PerAddressDeflt>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<PerAddressDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerAddressDeflt, PerPerson>;
    /**
     * All fields of the PerAddressDeflt entity.
     */
    const _allFields: Array<StringField<PerAddressDeflt> | DateField<PerAddressDeflt> | BooleanField<PerAddressDeflt> | OneToOneLink<PerAddressDeflt, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerAddressDeflt>;
    /**
     * All key fields of the PerAddressDeflt entity.
     */
    const _keyFields: Array<Selectable<PerAddressDeflt>>;
    /**
     * Mapping of all key field names to the respective static field property PerAddressDeflt.
     */
    const _keys: {
        [keys: string]: Selectable<PerAddressDeflt>;
    };
}
//# sourceMappingURL=PerAddressDeflt.d.ts.map