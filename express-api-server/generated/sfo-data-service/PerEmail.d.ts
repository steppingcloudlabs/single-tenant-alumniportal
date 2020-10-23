/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerEmailRequestBuilder } from './PerEmailRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerEmail" of service "SFOData".
 */
export declare class PerEmail extends Entity implements PerEmailType {
    /**
     * Technical entity name for PerEmail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerEmail.
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
     * Email Address.
     * Maximum length: 100.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Email Type.
     * Maximum length: 38.
     */
    emailType: string;
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
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerEmail`.
     * @returns A builder that constructs instances of entity type `PerEmail`.
     */
    static builder(): EntityBuilderType<PerEmail, PerEmailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerEmail` entity type.
     * @returns A `PerEmail` request builder.
     */
    static requestBuilder(): PerEmailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerEmail`.
     */
    static customField(fieldName: string): CustomField<PerEmail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerEmailType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    emailAddress?: string;
    emailType: string;
    includeAllRecords?: boolean;
    isPrimary?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    personIdExternal: string;
    personNav: PerPersonType;
}
export interface PerEmailTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    emailAddress: string;
    emailType: string;
    includeAllRecords: boolean;
    isPrimary: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    personIdExternal: string;
    personNav: PerPersonType;
}
export declare namespace PerEmail {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerEmail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerEmail>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerEmail>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<PerEmail>;
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_TYPE: StringField<PerEmail>;
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_ALL_RECORDS: BooleanField<PerEmail>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<PerEmail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerEmail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerEmail>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerEmail>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerEmail>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerEmail>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerEmail, PerPerson>;
    /**
     * All fields of the PerEmail entity.
     */
    const _allFields: Array<StringField<PerEmail> | DateField<PerEmail> | BooleanField<PerEmail> | OneToOneLink<PerEmail, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerEmail>;
    /**
     * All key fields of the PerEmail entity.
     */
    const _keyFields: Array<Selectable<PerEmail>>;
    /**
     * Mapping of all key field names to the respective static field property PerEmail.
     */
    const _keys: {
        [keys: string]: Selectable<PerEmail>;
    };
}
//# sourceMappingURL=PerEmail.d.ts.map