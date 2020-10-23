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
export class PerSocialAccount extends Entity implements PerSocialAccountType {
  /**
   * Technical entity name for PerSocialAccount.
   */
  static _entityName = 'PerSocialAccount';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerSocialAccount.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
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
  domain!: string;
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
  personIdExternal!: string;
  /**
   * URL.
   * Maximum length: 256.
   * @nullable
   */
  url?: string;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerSocialAccount`.
   * @returns A builder that constructs instances of entity type `PerSocialAccount`.
   */
  static builder(): EntityBuilderType<PerSocialAccount, PerSocialAccountTypeForceMandatory> {
    return Entity.entityBuilder(PerSocialAccount);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerSocialAccount` entity type.
   * @returns A `PerSocialAccount` request builder.
   */
  static requestBuilder(): PerSocialAccountRequestBuilder {
    return new PerSocialAccountRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerSocialAccount`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerSocialAccount`.
   */
  static customField(fieldName: string): CustomField<PerSocialAccount> {
    return Entity.customFieldSelector(fieldName, PerSocialAccount);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace PerSocialAccount {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerSocialAccount> = new StringField('createdBy', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerSocialAccount> = new DateField('createdDateTime', PerSocialAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerSocialAccount> = new DateField('createdOn', PerSocialAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[domain]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOMAIN: StringField<PerSocialAccount> = new StringField('domain', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[imId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IM_ID: StringField<PerSocialAccount> = new StringField('imId', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerSocialAccount> = new StringField('lastModifiedBy', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerSocialAccount> = new DateField('lastModifiedDateTime', PerSocialAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerSocialAccount> = new DateField('lastModifiedOn', PerSocialAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerSocialAccount> = new StringField('operation', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerSocialAccount> = new StringField('personIdExternal', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<PerSocialAccount> = new StringField('url', PerSocialAccount, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerSocialAccount, PerPerson> = new OneToOneLink('personNav', PerSocialAccount, PerPerson);
  /**
   * All fields of the PerSocialAccount entity.
   */
  export const _allFields: Array<StringField<PerSocialAccount> | DateField<PerSocialAccount> | OneToOneLink<PerSocialAccount, PerPerson>> = [
    PerSocialAccount.CREATED_BY,
    PerSocialAccount.CREATED_DATE_TIME,
    PerSocialAccount.CREATED_ON,
    PerSocialAccount.DOMAIN,
    PerSocialAccount.IM_ID,
    PerSocialAccount.LAST_MODIFIED_BY,
    PerSocialAccount.LAST_MODIFIED_DATE_TIME,
    PerSocialAccount.LAST_MODIFIED_ON,
    PerSocialAccount.OPERATION,
    PerSocialAccount.PERSON_ID_EXTERNAL,
    PerSocialAccount.URL,
    PerSocialAccount.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerSocialAccount> = new AllFields('*', PerSocialAccount);
  /**
   * All key fields of the PerSocialAccount entity.
   */
  export const _keyFields: Array<Selectable<PerSocialAccount>> = [PerSocialAccount.DOMAIN, PerSocialAccount.PERSON_ID_EXTERNAL];
  /**
   * Mapping of all key field names to the respective static field property PerSocialAccount.
   */
  export const _keys: { [keys: string]: Selectable<PerSocialAccount> } = PerSocialAccount._keyFields.reduce((acc: { [keys: string]: Selectable<PerSocialAccount> }, field: Selectable<PerSocialAccount>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
