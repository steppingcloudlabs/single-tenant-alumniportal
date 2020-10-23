/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerNationalIdRequestBuilder } from './PerNationalIdRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "PerNationalId" of service "SFOData".
 */
export class PerNationalId extends Entity implements PerNationalIdType {
  /**
   * Technical entity name for PerNationalId.
   */
  static _entityName = 'PerNationalId';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerNationalId.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * National Id Card Type.
   * Maximum length: 256.
   */
  cardType!: string;
  /**
   * Country.
   * Maximum length: 100.
   */
  country!: string;
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
   * National Id.
   * Maximum length: 256.
   * @nullable
   */
  nationalId?: string;
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
  personIdExternal!: string;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerNationalId`.
   * @returns A builder that constructs instances of entity type `PerNationalId`.
   */
  static builder(): EntityBuilderType<PerNationalId, PerNationalIdTypeForceMandatory> {
    return Entity.entityBuilder(PerNationalId);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerNationalId` entity type.
   * @returns A `PerNationalId` request builder.
   */
  static requestBuilder(): PerNationalIdRequestBuilder {
    return new PerNationalIdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerNationalId`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerNationalId`.
   */
  static customField(fieldName: string): CustomField<PerNationalId> {
    return Entity.customFieldSelector(fieldName, PerNationalId);
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

export interface PerNationalIdType {
  cardType: string;
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  isPrimary?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  nationalId?: string;
  notes?: string;
  operation?: string;
  personIdExternal: string;
  personNav: PerPersonType;
}

export interface PerNationalIdTypeForceMandatory {
  cardType: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  isPrimary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  nationalId: string;
  notes: string;
  operation: string;
  personIdExternal: string;
  personNav: PerPersonType;
}

export namespace PerNationalId {
  /**
   * Static representation of the [[cardType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_TYPE: StringField<PerNationalId> = new StringField('cardType', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerNationalId> = new StringField('country', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerNationalId> = new StringField('createdBy', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerNationalId> = new DateField('createdDateTime', PerNationalId, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerNationalId> = new DateField('createdOn', PerNationalId, 'Edm.DateTime');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: BooleanField<PerNationalId> = new BooleanField('isPrimary', PerNationalId, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerNationalId> = new StringField('lastModifiedBy', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerNationalId> = new DateField('lastModifiedDateTime', PerNationalId, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerNationalId> = new DateField('lastModifiedOn', PerNationalId, 'Edm.DateTime');
  /**
   * Static representation of the [[nationalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONAL_ID: StringField<PerNationalId> = new StringField('nationalId', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<PerNationalId> = new StringField('notes', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerNationalId> = new StringField('operation', PerNationalId, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerNationalId> = new StringField('personIdExternal', PerNationalId, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerNationalId, PerPerson> = new OneToOneLink('personNav', PerNationalId, PerPerson);
  /**
   * All fields of the PerNationalId entity.
   */
  export const _allFields: Array<StringField<PerNationalId> | DateField<PerNationalId> | BooleanField<PerNationalId> | OneToOneLink<PerNationalId, PerPerson>> = [
    PerNationalId.CARD_TYPE,
    PerNationalId.COUNTRY,
    PerNationalId.CREATED_BY,
    PerNationalId.CREATED_DATE_TIME,
    PerNationalId.CREATED_ON,
    PerNationalId.IS_PRIMARY,
    PerNationalId.LAST_MODIFIED_BY,
    PerNationalId.LAST_MODIFIED_DATE_TIME,
    PerNationalId.LAST_MODIFIED_ON,
    PerNationalId.NATIONAL_ID,
    PerNationalId.NOTES,
    PerNationalId.OPERATION,
    PerNationalId.PERSON_ID_EXTERNAL,
    PerNationalId.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerNationalId> = new AllFields('*', PerNationalId);
  /**
   * All key fields of the PerNationalId entity.
   */
  export const _keyFields: Array<Selectable<PerNationalId>> = [PerNationalId.CARD_TYPE, PerNationalId.COUNTRY, PerNationalId.PERSON_ID_EXTERNAL];
  /**
   * Mapping of all key field names to the respective static field property PerNationalId.
   */
  export const _keys: { [keys: string]: Selectable<PerNationalId> } = PerNationalId._keyFields.reduce((acc: { [keys: string]: Selectable<PerNationalId> }, field: Selectable<PerNationalId>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
