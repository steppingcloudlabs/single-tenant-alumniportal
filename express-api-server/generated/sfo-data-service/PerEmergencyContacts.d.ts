/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerEmergencyContactsRequestBuilder } from './PerEmergencyContactsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerEmergencyContacts" of service "SFOData".
 */
export declare class PerEmergencyContacts extends Entity implements PerEmergencyContactsType {
    /**
     * Technical entity name for PerEmergencyContacts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerEmergencyContacts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * addressAddress1.
     * Maximum length: 256.
     * @nullable
     */
    addressAddress1?: string;
    /**
     * addressAddress2.
     * Maximum length: 256.
     * @nullable
     */
    addressAddress2?: string;
    /**
     * addressAddress3.
     * Maximum length: 256.
     * @nullable
     */
    addressAddress3?: string;
    /**
     * addressCity.
     * Maximum length: 256.
     * @nullable
     */
    addressCity?: string;
    /**
     * addressCountry.
     * Maximum length: 256.
     * @nullable
     */
    addressCountry?: string;
    /**
     * addressCounty.
     * Maximum length: 256.
     * @nullable
     */
    addressCounty?: string;
    /**
     * addressProvince.
     * Maximum length: 256.
     * @nullable
     */
    addressProvince?: string;
    /**
     * addressState.
     * Maximum length: 256.
     * @nullable
     */
    addressState?: string;
    /**
     * addressZipCode.
     * Maximum length: 256.
     * @nullable
     */
    addressZipCode?: string;
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
     * eMail.
     * Maximum length: 100.
     * @nullable
     */
    email?: string;
    /**
     * Copy Address from Employee.
     * @nullable
     */
    isAddSameAsEmployee?: boolean;
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
     * Name.
     * Maximum length: 256.
     */
    name: string;
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
     * Phone.
     * Maximum length: 256.
     * @nullable
     */
    phone?: string;
    /**
     * primaryFlag.
     * Maximum length: 1.
     * @nullable
     */
    primaryFlag?: string;
    /**
     * Relationship.
     * Maximum length: 50.
     */
    relationship: string;
    /**
     * Alt Phone.
     * Maximum length: 256.
     * @nullable
     */
    secondPhone?: string;
    /**
     * One-to-one navigation property to the [[HrisEmergencyContactAddressDeflt]] entity.
     */
    addressNavDeflt: HrisEmergencyContactAddressDeflt;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerEmergencyContacts`.
     * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
     */
    static builder(): EntityBuilderType<PerEmergencyContacts, PerEmergencyContactsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerEmergencyContacts` entity type.
     * @returns A `PerEmergencyContacts` request builder.
     */
    static requestBuilder(): PerEmergencyContactsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmergencyContacts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
     */
    static customField(fieldName: string): CustomField<PerEmergencyContacts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { HrisEmergencyContactAddressDeflt, HrisEmergencyContactAddressDefltType } from './HrisEmergencyContactAddressDeflt';
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerEmergencyContactsType {
    addressAddress1?: string;
    addressAddress2?: string;
    addressAddress3?: string;
    addressCity?: string;
    addressCountry?: string;
    addressCounty?: string;
    addressProvince?: string;
    addressState?: string;
    addressZipCode?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    email?: string;
    isAddSameAsEmployee?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name: string;
    operation?: string;
    personIdExternal: string;
    phone?: string;
    primaryFlag?: string;
    relationship: string;
    secondPhone?: string;
    addressNavDeflt: HrisEmergencyContactAddressDefltType;
    personNav: PerPersonType;
}
export interface PerEmergencyContactsTypeForceMandatory {
    addressAddress1: string;
    addressAddress2: string;
    addressAddress3: string;
    addressCity: string;
    addressCountry: string;
    addressCounty: string;
    addressProvince: string;
    addressState: string;
    addressZipCode: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    email: string;
    isAddSameAsEmployee: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    operation: string;
    personIdExternal: string;
    phone: string;
    primaryFlag: string;
    relationship: string;
    secondPhone: string;
    addressNavDeflt: HrisEmergencyContactAddressDefltType;
    personNav: PerPersonType;
}
export declare namespace PerEmergencyContacts {
    /**
     * Static representation of the [[addressAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_1: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_2: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_3: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_CITY: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COUNTRY: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COUNTY: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressProvince]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_PROVINCE: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_STATE: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[addressZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ZIP_CODE: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerEmergencyContacts>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerEmergencyContacts>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[isAddSameAsEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ADD_SAME_AS_EMPLOYEE: BooleanField<PerEmergencyContacts>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerEmergencyContacts>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerEmergencyContacts>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[primaryFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_FLAG: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[relationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the [[secondPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_PHONE: StringField<PerEmergencyContacts>;
    /**
     * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAV_DEFLT: OneToOneLink<PerEmergencyContacts, HrisEmergencyContactAddressDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerEmergencyContacts, PerPerson>;
    /**
     * All fields of the PerEmergencyContacts entity.
     */
    const _allFields: Array<StringField<PerEmergencyContacts> | DateField<PerEmergencyContacts> | BooleanField<PerEmergencyContacts> | OneToOneLink<PerEmergencyContacts, HrisEmergencyContactAddressDeflt> | OneToOneLink<PerEmergencyContacts, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerEmergencyContacts>;
    /**
     * All key fields of the PerEmergencyContacts entity.
     */
    const _keyFields: Array<Selectable<PerEmergencyContacts>>;
    /**
     * Mapping of all key field names to the respective static field property PerEmergencyContacts.
     */
    const _keys: {
        [keys: string]: Selectable<PerEmergencyContacts>;
    };
}
//# sourceMappingURL=PerEmergencyContacts.d.ts.map