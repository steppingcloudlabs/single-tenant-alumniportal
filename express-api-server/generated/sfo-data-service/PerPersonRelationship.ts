/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerPersonRelationshipRequestBuilder } from './PerPersonRelationshipRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "PerPersonRelationship" of service "SFOData".
 */
export class PerPersonRelationship extends Entity implements PerPersonRelationshipType {
  /**
   * Technical entity name for PerPersonRelationship.
   */
  static _entityName = 'PerPersonRelationship';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerPersonRelationship.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
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
   * Attachments.
   * @nullable
   */
  attachmentId?: string;
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
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: string;
  /**
   * Accompanying.
   * @nullable
   */
  isAccompanyingDependent?: boolean;
  /**
   * Copy Address from Employee.
   * @nullable
   */
  isAddressSameAsPerson?: boolean;
  /**
   * Is Beneficiary.
   * @nullable
   */
  isBeneficiary?: boolean;
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
   * Related Person ID External.
   * Maximum length: 100.
   */
  relatedPersonIdExternal!: string;
  /**
   * Relationship.
   * Maximum length: 30.
   * @nullable
   */
  relationshipType?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[PerNationalId]] entity.
   */
  relNationalIdNav!: PerNationalId;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  relPersonNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[PerPersonal]] entity.
   */
  relPersonalNav!: PerPersonal;

  /**
   * Returns an entity builder to construct instances `PerPersonRelationship`.
   * @returns A builder that constructs instances of entity type `PerPersonRelationship`.
   */
  static builder(): EntityBuilderType<PerPersonRelationship, PerPersonRelationshipTypeForceMandatory> {
    return Entity.entityBuilder(PerPersonRelationship);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerPersonRelationship` entity type.
   * @returns A `PerPersonRelationship` request builder.
   */
  static requestBuilder(): PerPersonRelationshipRequestBuilder {
    return new PerPersonRelationshipRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonRelationship`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerPersonRelationship`.
   */
  static customField(fieldName: string): CustomField<PerPersonRelationship> {
    return Entity.customFieldSelector(fieldName, PerPersonRelationship);
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
import { PerNationalId, PerNationalIdType } from './PerNationalId';
import { PerPersonal, PerPersonalType } from './PerPersonal';

export interface PerPersonRelationshipType {
  addressAddress1?: string;
  addressAddress2?: string;
  addressAddress3?: string;
  addressCity?: string;
  addressCountry?: string;
  addressCounty?: string;
  addressProvince?: string;
  addressState?: string;
  addressZipCode?: string;
  attachmentId?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  firstName?: string;
  isAccompanyingDependent?: boolean;
  isAddressSameAsPerson?: boolean;
  isBeneficiary?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  lastName?: string;
  operation?: string;
  personIdExternal: string;
  relatedPersonIdExternal: string;
  relationshipType?: string;
  startDate: Moment;
  personNav: PerPersonType;
  relNationalIdNav: PerNationalIdType;
  relPersonNav: PerPersonType;
  relPersonalNav: PerPersonalType;
}

export interface PerPersonRelationshipTypeForceMandatory {
  addressAddress1: string;
  addressAddress2: string;
  addressAddress3: string;
  addressCity: string;
  addressCountry: string;
  addressCounty: string;
  addressProvince: string;
  addressState: string;
  addressZipCode: string;
  attachmentId: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  firstName: string;
  isAccompanyingDependent: boolean;
  isAddressSameAsPerson: boolean;
  isBeneficiary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  lastName: string;
  operation: string;
  personIdExternal: string;
  relatedPersonIdExternal: string;
  relationshipType: string;
  startDate: Moment;
  personNav: PerPersonType;
  relNationalIdNav: PerNationalIdType;
  relPersonNav: PerPersonType;
  relPersonalNav: PerPersonalType;
}

export namespace PerPersonRelationship {
  /**
   * Static representation of the [[addressAddress1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_1: StringField<PerPersonRelationship> = new StringField('addressAddress1', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_2: StringField<PerPersonRelationship> = new StringField('addressAddress2', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_3: StringField<PerPersonRelationship> = new StringField('addressAddress3', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_CITY: StringField<PerPersonRelationship> = new StringField('addressCity', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTRY: StringField<PerPersonRelationship> = new StringField('addressCountry', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressCounty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTY: StringField<PerPersonRelationship> = new StringField('addressCounty', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressProvince]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_PROVINCE: StringField<PerPersonRelationship> = new StringField('addressProvince', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_STATE: StringField<PerPersonRelationship> = new StringField('addressState', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[addressZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ZIP_CODE: StringField<PerPersonRelationship> = new StringField('addressZipCode', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[attachmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ID: StringField<PerPersonRelationship> = new StringField('attachmentId', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerPersonRelationship> = new StringField('createdBy', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerPersonRelationship> = new DateField('createdDateTime', PerPersonRelationship, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerPersonRelationship> = new DateField('createdOn', PerPersonRelationship, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerPersonRelationship> = new DateField('endDate', PerPersonRelationship, 'Edm.DateTime');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<PerPersonRelationship> = new StringField('firstName', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[isAccompanyingDependent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACCOMPANYING_DEPENDENT: BooleanField<PerPersonRelationship> = new BooleanField('isAccompanyingDependent', PerPersonRelationship, 'Edm.Boolean');
  /**
   * Static representation of the [[isAddressSameAsPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ADDRESS_SAME_AS_PERSON: BooleanField<PerPersonRelationship> = new BooleanField('isAddressSameAsPerson', PerPersonRelationship, 'Edm.Boolean');
  /**
   * Static representation of the [[isBeneficiary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_BENEFICIARY: BooleanField<PerPersonRelationship> = new BooleanField('isBeneficiary', PerPersonRelationship, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerPersonRelationship> = new StringField('lastModifiedBy', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerPersonRelationship> = new DateField('lastModifiedDateTime', PerPersonRelationship, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerPersonRelationship> = new DateField('lastModifiedOn', PerPersonRelationship, 'Edm.DateTime');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<PerPersonRelationship> = new StringField('lastName', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerPersonRelationship> = new StringField('operation', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerPersonRelationship> = new StringField('personIdExternal', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[relatedPersonIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_PERSON_ID_EXTERNAL: StringField<PerPersonRelationship> = new StringField('relatedPersonIdExternal', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[relationshipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_TYPE: StringField<PerPersonRelationship> = new StringField('relationshipType', PerPersonRelationship, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerPersonRelationship> = new DateField('startDate', PerPersonRelationship, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerPersonRelationship, PerPerson> = new OneToOneLink('personNav', PerPersonRelationship, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[relNationalIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REL_NATIONAL_ID_NAV: OneToOneLink<PerPersonRelationship, PerNationalId> = new OneToOneLink('relNationalIdNav', PerPersonRelationship, PerNationalId);
  /**
   * Static representation of the one-to-one navigation property [[relPersonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REL_PERSON_NAV: OneToOneLink<PerPersonRelationship, PerPerson> = new OneToOneLink('relPersonNav', PerPersonRelationship, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[relPersonalNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REL_PERSONAL_NAV: OneToOneLink<PerPersonRelationship, PerPersonal> = new OneToOneLink('relPersonalNav', PerPersonRelationship, PerPersonal);
  /**
   * All fields of the PerPersonRelationship entity.
   */
  export const _allFields: Array<StringField<PerPersonRelationship> | DateField<PerPersonRelationship> | BooleanField<PerPersonRelationship> | OneToOneLink<PerPersonRelationship, PerPerson> | OneToOneLink<PerPersonRelationship, PerNationalId> | OneToOneLink<PerPersonRelationship, PerPersonal>> = [
    PerPersonRelationship.ADDRESS_ADDRESS_1,
    PerPersonRelationship.ADDRESS_ADDRESS_2,
    PerPersonRelationship.ADDRESS_ADDRESS_3,
    PerPersonRelationship.ADDRESS_CITY,
    PerPersonRelationship.ADDRESS_COUNTRY,
    PerPersonRelationship.ADDRESS_COUNTY,
    PerPersonRelationship.ADDRESS_PROVINCE,
    PerPersonRelationship.ADDRESS_STATE,
    PerPersonRelationship.ADDRESS_ZIP_CODE,
    PerPersonRelationship.ATTACHMENT_ID,
    PerPersonRelationship.CREATED_BY,
    PerPersonRelationship.CREATED_DATE_TIME,
    PerPersonRelationship.CREATED_ON,
    PerPersonRelationship.END_DATE,
    PerPersonRelationship.FIRST_NAME,
    PerPersonRelationship.IS_ACCOMPANYING_DEPENDENT,
    PerPersonRelationship.IS_ADDRESS_SAME_AS_PERSON,
    PerPersonRelationship.IS_BENEFICIARY,
    PerPersonRelationship.LAST_MODIFIED_BY,
    PerPersonRelationship.LAST_MODIFIED_DATE_TIME,
    PerPersonRelationship.LAST_MODIFIED_ON,
    PerPersonRelationship.LAST_NAME,
    PerPersonRelationship.OPERATION,
    PerPersonRelationship.PERSON_ID_EXTERNAL,
    PerPersonRelationship.RELATED_PERSON_ID_EXTERNAL,
    PerPersonRelationship.RELATIONSHIP_TYPE,
    PerPersonRelationship.START_DATE,
    PerPersonRelationship.PERSON_NAV,
    PerPersonRelationship.REL_NATIONAL_ID_NAV,
    PerPersonRelationship.REL_PERSON_NAV,
    PerPersonRelationship.REL_PERSONAL_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerPersonRelationship> = new AllFields('*', PerPersonRelationship);
  /**
   * All key fields of the PerPersonRelationship entity.
   */
  export const _keyFields: Array<Selectable<PerPersonRelationship>> = [PerPersonRelationship.PERSON_ID_EXTERNAL, PerPersonRelationship.RELATED_PERSON_ID_EXTERNAL, PerPersonRelationship.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerPersonRelationship.
   */
  export const _keys: { [keys: string]: Selectable<PerPersonRelationship> } = PerPersonRelationship._keyFields.reduce((acc: { [keys: string]: Selectable<PerPersonRelationship> }, field: Selectable<PerPersonRelationship>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
