/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerPersonalRequestBuilder } from './PerPersonalRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerPersonal" of service "SFOData".
 */
export declare class PerPersonal extends Entity implements PerPersonalType {
    /**
     * Technical entity name for PerPersonal.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPersonal.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Attachment.
     * @nullable
     */
    attachmentId?: string;
    /**
     * Business First Name.
     * Maximum length: 128.
     * @nullable
     */
    businessFirstName?: string;
    /**
     * Business Last Name.
     * Maximum length: 128.
     * @nullable
     */
    businessLastName?: string;
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
     * Display Name.
     * Maximum length: 128.
     * @nullable
     */
    displayName?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * First Name.
     * Maximum length: 128.
     * @nullable
     */
    firstName?: string;
    /**
     * Gender.
     * Maximum length: 2.
     * @nullable
     */
    gender?: string;
    /**
     * Include All Records.
     * @nullable
     */
    includeAllRecords?: boolean;
    /**
     * Initials.
     * Maximum length: 128.
     * @nullable
     */
    initials?: string;
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
     * Last Name.
     * Maximum length: 128.
     * @nullable
     */
    lastName?: string;
    /**
     * Marital Status.
     * Maximum length: 50.
     * @nullable
     */
    maritalStatus?: string;
    /**
     * Middle Name.
     * Maximum length: 128.
     * @nullable
     */
    middleName?: string;
    /**
     * Nationality.
     * Maximum length: 128.
     * @nullable
     */
    nationality?: string;
    /**
     * Preferred Language.
     * Maximum length: 256.
     * @nullable
     */
    nativePreferredLang?: string;
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
     * Preferred Name.
     * Maximum length: 128.
     * @nullable
     */
    preferredName?: string;
    /**
     * Salutation.
     * Maximum length: 128.
     * @nullable
     */
    salutation?: string;
    /**
     * Language Script.
     * Maximum length: 32.
     * @nullable
     */
    script?: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Title.
     * Maximum length: 128.
     * @nullable
     */
    title?: string;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerPersonal`.
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    static builder(): EntityBuilderType<PerPersonal, PerPersonalTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerPersonal` entity type.
     * @returns A `PerPersonal` request builder.
     */
    static requestBuilder(): PerPersonalRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    static customField(fieldName: string): CustomField<PerPersonal>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerPersonalType {
    attachmentId?: string;
    businessFirstName?: string;
    businessLastName?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    displayName?: string;
    endDate?: Moment;
    firstName?: string;
    gender?: string;
    includeAllRecords?: boolean;
    initials?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    lastName?: string;
    maritalStatus?: string;
    middleName?: string;
    nationality?: string;
    nativePreferredLang?: string;
    operation?: string;
    personIdExternal: string;
    preferredName?: string;
    salutation?: string;
    script?: string;
    startDate: Moment;
    title?: string;
    personNav: PerPersonType;
}
export interface PerPersonalTypeForceMandatory {
    attachmentId: string;
    businessFirstName: string;
    businessLastName: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    displayName: string;
    endDate: Moment;
    firstName: string;
    gender: string;
    includeAllRecords: boolean;
    initials: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    lastName: string;
    maritalStatus: string;
    middleName: string;
    nationality: string;
    nativePreferredLang: string;
    operation: string;
    personIdExternal: string;
    preferredName: string;
    salutation: string;
    script: string;
    startDate: Moment;
    title: string;
    personNav: PerPersonType;
}
export declare namespace PerPersonal {
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ID: StringField<PerPersonal>;
    /**
     * Static representation of the [[businessFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_FIRST_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[businessLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_LAST_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerPersonal>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerPersonal>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerPersonal>;
    /**
     * Static representation of the [[displayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<PerPersonal>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: StringField<PerPersonal>;
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_ALL_RECORDS: BooleanField<PerPersonal>;
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIALS: StringField<PerPersonal>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerPersonal>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerPersonal>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerPersonal>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[maritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARITAL_STATUS: StringField<PerPersonal>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIONALITY: StringField<PerPersonal>;
    /**
     * Static representation of the [[nativePreferredLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIVE_PREFERRED_LANG: StringField<PerPersonal>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerPersonal>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerPersonal>;
    /**
     * Static representation of the [[preferredName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREFERRED_NAME: StringField<PerPersonal>;
    /**
     * Static representation of the [[salutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALUTATION: StringField<PerPersonal>;
    /**
     * Static representation of the [[script]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCRIPT: StringField<PerPersonal>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<PerPersonal>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<PerPersonal>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerPersonal, PerPerson>;
    /**
     * All fields of the PerPersonal entity.
     */
    const _allFields: Array<StringField<PerPersonal> | DateField<PerPersonal> | BooleanField<PerPersonal> | OneToOneLink<PerPersonal, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerPersonal>;
    /**
     * All key fields of the PerPersonal entity.
     */
    const _keyFields: Array<Selectable<PerPersonal>>;
    /**
     * Mapping of all key field names to the respective static field property PerPersonal.
     */
    const _keys: {
        [keys: string]: Selectable<PerPersonal>;
    };
}
//# sourceMappingURL=PerPersonal.d.ts.map