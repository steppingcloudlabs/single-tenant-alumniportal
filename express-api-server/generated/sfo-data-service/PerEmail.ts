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
export class PerEmail extends Entity implements PerEmailType {
  /**
   * Technical entity name for PerEmail.
   */
  static _entityName = 'PerEmail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerEmail.
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
   * Email Address.
   * Maximum length: 100.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Email Type.
   * Maximum length: 38.
   */
  emailType!: string;
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
  personIdExternal!: string;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerEmail`.
   * @returns A builder that constructs instances of entity type `PerEmail`.
   */
  static builder(): EntityBuilderType<PerEmail, PerEmailTypeForceMandatory> {
    return Entity.entityBuilder(PerEmail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerEmail` entity type.
   * @returns A `PerEmail` request builder.
   */
  static requestBuilder(): PerEmailRequestBuilder {
    return new PerEmailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerEmail`.
   */
  static customField(fieldName: string): CustomField<PerEmail> {
    return Entity.customFieldSelector(fieldName, PerEmail);
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

export namespace PerEmail {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerEmail> = new StringField('createdBy', PerEmail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerEmail> = new DateField('createdDateTime', PerEmail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerEmail> = new DateField('createdOn', PerEmail, 'Edm.DateTime');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<PerEmail> = new StringField('emailAddress', PerEmail, 'Edm.String');
  /**
   * Static representation of the [[emailType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TYPE: StringField<PerEmail> = new StringField('emailType', PerEmail, 'Edm.String');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<PerEmail> = new BooleanField('includeAllRecords', PerEmail, 'Edm.Boolean');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: BooleanField<PerEmail> = new BooleanField('isPrimary', PerEmail, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerEmail> = new StringField('lastModifiedBy', PerEmail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerEmail> = new DateField('lastModifiedDateTime', PerEmail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerEmail> = new DateField('lastModifiedOn', PerEmail, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerEmail> = new StringField('operation', PerEmail, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerEmail> = new StringField('personIdExternal', PerEmail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerEmail, PerPerson> = new OneToOneLink('personNav', PerEmail, PerPerson);
  /**
   * All fields of the PerEmail entity.
   */
  export const _allFields: Array<StringField<PerEmail> | DateField<PerEmail> | BooleanField<PerEmail> | OneToOneLink<PerEmail, PerPerson>> = [
    PerEmail.CREATED_BY,
    PerEmail.CREATED_DATE_TIME,
    PerEmail.CREATED_ON,
    PerEmail.EMAIL_ADDRESS,
    PerEmail.EMAIL_TYPE,
    PerEmail.INCLUDE_ALL_RECORDS,
    PerEmail.IS_PRIMARY,
    PerEmail.LAST_MODIFIED_BY,
    PerEmail.LAST_MODIFIED_DATE_TIME,
    PerEmail.LAST_MODIFIED_ON,
    PerEmail.OPERATION,
    PerEmail.PERSON_ID_EXTERNAL,
    PerEmail.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerEmail> = new AllFields('*', PerEmail);
  /**
   * All key fields of the PerEmail entity.
   */
  export const _keyFields: Array<Selectable<PerEmail>> = [PerEmail.EMAIL_TYPE, PerEmail.PERSON_ID_EXTERNAL];
  /**
   * Mapping of all key field names to the respective static field property PerEmail.
   */
  export const _keys: { [keys: string]: Selectable<PerEmail> } = PerEmail._keyFields.reduce((acc: { [keys: string]: Selectable<PerEmail> }, field: Selectable<PerEmail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
