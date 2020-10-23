/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerSocialAccountRequestBuilder } from './PerSocialAccountRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PerSocialAccount" of service "SFOData".
 */
export declare class PerSocialAccount extends Entity implements PerSocialAccountType {
    /**
     * Technical entity name for PerSocialAccount.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerSocialAccount.
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
     * Domain.
     * Maximum length: 100.
     */
    domain: string;
    /**
     * Instant Messaging ID.
     * Maximum length: 100.
     * @nullable
     */
    imId?: string;
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
     * URL.
     * Maximum length: 256.
     * @nullable
     */
    url?: string;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerSocialAccount`.
     * @returns A builder that constructs instances of entity type `PerSocialAccount`.
     */
    static builder(): EntityBuilderType<PerSocialAccount, PerSocialAccountTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerSocialAccount` entity type.
     * @returns A `PerSocialAccount` request builder.
     */
    static requestBuilder(): PerSocialAccountRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerSocialAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerSocialAccount`.
     */
    static customField(fieldName: string): CustomField<PerSocialAccount>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerSocialAccountType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    domain: string;
    imId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    personIdExternal: string;
    url?: string;
    personNav: PerPersonType;
}
export interface PerSocialAccountTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    domain: string;
    imId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    personIdExternal: string;
    url: string;
    personNav: PerPersonType;
}
export declare namespace PerSocialAccount {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerSocialAccount>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerSocialAccount>;
    /**
     * Static representation of the [[domain]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOMAIN: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[imId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IM_ID: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerSocialAccount>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerSocialAccount>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerSocialAccount>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<PerSocialAccount>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerSocialAccount, PerPerson>;
    /**
     * All fields of the PerSocialAccount entity.
     */
    const _allFields: Array<StringField<PerSocialAccount> | DateField<PerSocialAccount> | OneToOneLink<PerSocialAccount, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerSocialAccount>;
    /**
     * All key fields of the PerSocialAccount entity.
     */
    const _keyFields: Array<Selectable<PerSocialAccount>>;
    /**
     * Mapping of all key field names to the respective static field property PerSocialAccount.
     */
    const _keys: {
        [keys: string]: Selectable<PerSocialAccount>;
    };
}
//# sourceMappingURL=PerSocialAccount.d.ts.map