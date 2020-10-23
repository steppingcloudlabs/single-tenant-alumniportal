/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerPersonRequestBuilder } from './PerPersonRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "PerPerson" of service "SFOData".
 */
export class PerPerson extends Entity implements PerPersonType {
  /**
   * Technical entity name for PerPerson.
   */
  static _entityName = 'PerPerson';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerPerson.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Birth Name.
   * Maximum length: 128.
   * @nullable
   */
  birthName?: string;
  /**
   * Country Of Birth.
   * Maximum length: 100.
   * @nullable
   */
  countryOfBirth?: string;
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
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: Moment;
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
   * perPersonUuid.
   * Maximum length: 32.
   * @nullable
   */
  perPersonUuid?: string;
  /**
   * personId.
   * @nullable
   */
  personId?: BigNumber;
  /**
   * Person Id.
   * Maximum length: 32.
   */
  personIdExternal!: string;
  /**
   * Region Of Birth.
   * Maximum length: 100.
   * @nullable
   */
  regionOfBirth?: string;
  /**
   * User Id.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-many navigation property to the [[PerEmail]] entity.
   */
  emailNav!: PerEmail[];
  /**
   * One-to-many navigation property to the [[PerEmergencyContacts]] entity.
   */
  emergencyContactNav!: PerEmergencyContacts[];
  /**
   * One-to-many navigation property to the [[PerAddressDeflt]] entity.
   */
  homeAddressNavDeflt!: PerAddressDeflt[];
  /**
   * One-to-many navigation property to the [[PerNationalId]] entity.
   */
  nationalIdNav!: PerNationalId[];
  /**
   * One-to-many navigation property to the [[PerPersonRelationship]] entity.
   */
  personRerlationshipNav!: PerPersonRelationship[];
  /**
   * One-to-many navigation property to the [[PerPersonal]] entity.
   */
  personalInfoNav!: PerPersonal[];
  /**
   * One-to-many navigation property to the [[PerPhone]] entity.
   */
  phoneNav!: PerPhone[];
  /**
   * One-to-many navigation property to the [[PerSocialAccount]] entity.
   */
  socialAccountNav!: PerSocialAccount[];

  /**
   * Returns an entity builder to construct instances `PerPerson`.
   * @returns A builder that constructs instances of entity type `PerPerson`.
   */
  static builder(): EntityBuilderType<PerPerson, PerPersonTypeForceMandatory> {
    return Entity.entityBuilder(PerPerson);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerPerson` entity type.
   * @returns A `PerPerson` request builder.
   */
  static requestBuilder(): PerPersonRequestBuilder {
    return new PerPersonRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPerson`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerPerson`.
   */
  static customField(fieldName: string): CustomField<PerPerson> {
    return Entity.customFieldSelector(fieldName, PerPerson);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PerEmail, PerEmailType } from './PerEmail';
import { PerEmergencyContacts, PerEmergencyContactsType } from './PerEmergencyContacts';
import { PerAddressDeflt, PerAddressDefltType } from './PerAddressDeflt';
import { PerNationalId, PerNationalIdType } from './PerNationalId';
import { PerPersonRelationship, PerPersonRelationshipType } from './PerPersonRelationship';
import { PerPersonal, PerPersonalType } from './PerPersonal';
import { PerPhone, PerPhoneType } from './PerPhone';
import { PerSocialAccount, PerSocialAccountType } from './PerSocialAccount';

export interface PerPersonType {
  birthName?: string;
  countryOfBirth?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  dateOfBirth?: Moment;
  includeAllRecords?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  perPersonUuid?: string;
  personId?: BigNumber;
  personIdExternal: string;
  regionOfBirth?: string;
  userId?: string;
  emailNav: PerEmailType[];
  emergencyContactNav: PerEmergencyContactsType[];
  homeAddressNavDeflt: PerAddressDefltType[];
  nationalIdNav: PerNationalIdType[];
  personRerlationshipNav: PerPersonRelationshipType[];
  personalInfoNav: PerPersonalType[];
  phoneNav: PerPhoneType[];
  socialAccountNav: PerSocialAccountType[];
}

export interface PerPersonTypeForceMandatory {
  birthName: string;
  countryOfBirth: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  dateOfBirth: Moment;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  perPersonUuid: string;
  personId: BigNumber;
  personIdExternal: string;
  regionOfBirth: string;
  userId: string;
  emailNav: PerEmailType[];
  emergencyContactNav: PerEmergencyContactsType[];
  homeAddressNavDeflt: PerAddressDefltType[];
  nationalIdNav: PerNationalIdType[];
  personRerlationshipNav: PerPersonRelationshipType[];
  personalInfoNav: PerPersonalType[];
  phoneNav: PerPhoneType[];
  socialAccountNav: PerSocialAccountType[];
}

export namespace PerPerson {
  /**
   * Static representation of the [[birthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_NAME: StringField<PerPerson> = new StringField('birthName', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[countryOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_BIRTH: StringField<PerPerson> = new StringField('countryOfBirth', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerPerson> = new StringField('createdBy', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerPerson> = new DateField('createdDateTime', PerPerson, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerPerson> = new DateField('createdOn', PerPerson, 'Edm.DateTime');
  /**
   * Static representation of the [[dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_BIRTH: DateField<PerPerson> = new DateField('dateOfBirth', PerPerson, 'Edm.DateTime');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<PerPerson> = new BooleanField('includeAllRecords', PerPerson, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerPerson> = new StringField('lastModifiedBy', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerPerson> = new DateField('lastModifiedDateTime', PerPerson, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerPerson> = new DateField('lastModifiedOn', PerPerson, 'Edm.DateTime');
  /**
   * Static representation of the [[perPersonUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PER_PERSON_UUID: StringField<PerPerson> = new StringField('perPersonUuid', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: BigNumberField<PerPerson> = new BigNumberField('personId', PerPerson, 'Edm.Int64');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerPerson> = new StringField('personIdExternal', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[regionOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION_OF_BIRTH: StringField<PerPerson> = new StringField('regionOfBirth', PerPerson, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<PerPerson> = new StringField('userId', PerPerson, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[emailNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_NAV: Link<PerPerson, PerEmail> = new Link('emailNav', PerPerson, PerEmail);
  /**
   * Static representation of the one-to-many navigation property [[emergencyContactNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMERGENCY_CONTACT_NAV: Link<PerPerson, PerEmergencyContacts> = new Link('emergencyContactNav', PerPerson, PerEmergencyContacts);
  /**
   * Static representation of the one-to-many navigation property [[homeAddressNavDeflt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_ADDRESS_NAV_DEFLT: Link<PerPerson, PerAddressDeflt> = new Link('homeAddressNavDEFLT', PerPerson, PerAddressDeflt);
  /**
   * Static representation of the one-to-many navigation property [[nationalIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONAL_ID_NAV: Link<PerPerson, PerNationalId> = new Link('nationalIdNav', PerPerson, PerNationalId);
  /**
   * Static representation of the one-to-many navigation property [[personRerlationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_RERLATIONSHIP_NAV: Link<PerPerson, PerPersonRelationship> = new Link('personRerlationshipNav', PerPerson, PerPersonRelationship);
  /**
   * Static representation of the one-to-many navigation property [[personalInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONAL_INFO_NAV: Link<PerPerson, PerPersonal> = new Link('personalInfoNav', PerPerson, PerPersonal);
  /**
   * Static representation of the one-to-many navigation property [[phoneNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NAV: Link<PerPerson, PerPhone> = new Link('phoneNav', PerPerson, PerPhone);
  /**
   * Static representation of the one-to-many navigation property [[socialAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOCIAL_ACCOUNT_NAV: Link<PerPerson, PerSocialAccount> = new Link('socialAccountNav', PerPerson, PerSocialAccount);
  /**
   * All fields of the PerPerson entity.
   */
  export const _allFields: Array<StringField<PerPerson> | DateField<PerPerson> | BooleanField<PerPerson> | BigNumberField<PerPerson> | Link<PerPerson, PerEmail> | Link<PerPerson, PerEmergencyContacts> | Link<PerPerson, PerAddressDeflt> | Link<PerPerson, PerNationalId> | Link<PerPerson, PerPersonRelationship> | Link<PerPerson, PerPersonal> | Link<PerPerson, PerPhone> | Link<PerPerson, PerSocialAccount>> = [
    PerPerson.BIRTH_NAME,
    PerPerson.COUNTRY_OF_BIRTH,
    PerPerson.CREATED_BY,
    PerPerson.CREATED_DATE_TIME,
    PerPerson.CREATED_ON,
    PerPerson.DATE_OF_BIRTH,
    PerPerson.INCLUDE_ALL_RECORDS,
    PerPerson.LAST_MODIFIED_BY,
    PerPerson.LAST_MODIFIED_DATE_TIME,
    PerPerson.LAST_MODIFIED_ON,
    PerPerson.PER_PERSON_UUID,
    PerPerson.PERSON_ID,
    PerPerson.PERSON_ID_EXTERNAL,
    PerPerson.REGION_OF_BIRTH,
    PerPerson.USER_ID,
    PerPerson.EMAIL_NAV,
    PerPerson.EMERGENCY_CONTACT_NAV,
    PerPerson.HOME_ADDRESS_NAV_DEFLT,
    PerPerson.NATIONAL_ID_NAV,
    PerPerson.PERSON_RERLATIONSHIP_NAV,
    PerPerson.PERSONAL_INFO_NAV,
    PerPerson.PHONE_NAV,
    PerPerson.SOCIAL_ACCOUNT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerPerson> = new AllFields('*', PerPerson);
  /**
   * All key fields of the PerPerson entity.
   */
  export const _keyFields: Array<Selectable<PerPerson>> = [PerPerson.PERSON_ID_EXTERNAL];
  /**
   * Mapping of all key field names to the respective static field property PerPerson.
   */
  export const _keys: { [keys: string]: Selectable<PerPerson> } = PerPerson._keyFields.reduce((acc: { [keys: string]: Selectable<PerPerson> }, field: Selectable<PerPerson>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
