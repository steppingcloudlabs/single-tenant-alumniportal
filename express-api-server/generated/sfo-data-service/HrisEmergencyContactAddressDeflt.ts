/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HrisEmergencyContactAddressDefltRequestBuilder } from './HrisEmergencyContactAddressDefltRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "HrisEmergencyContactAddressDEFLT" of service "SFOData".
 */
export class HrisEmergencyContactAddressDeflt extends Entity implements HrisEmergencyContactAddressDefltType {
  /**
   * Technical entity name for HrisEmergencyContactAddressDeflt.
   */
  static _entityName = 'HrisEmergencyContactAddressDEFLT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HrisEmergencyContactAddressDeflt.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
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
   * Address ID.
   */
  addressId!: BigNumber;
  /**
   * Address Type.
   * Maximum length: 30.
   * @nullable
   */
  addressType?: string;
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
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
   * province.
   * Maximum length: 256.
   * @nullable
   */
  province?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
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
   * Returns an entity builder to construct instances `HrisEmergencyContactAddressDeflt`.
   * @returns A builder that constructs instances of entity type `HrisEmergencyContactAddressDeflt`.
   */
  static builder(): EntityBuilderType<HrisEmergencyContactAddressDeflt, HrisEmergencyContactAddressDefltTypeForceMandatory> {
    return Entity.entityBuilder(HrisEmergencyContactAddressDeflt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HrisEmergencyContactAddressDeflt` entity type.
   * @returns A `HrisEmergencyContactAddressDeflt` request builder.
   */
  static requestBuilder(): HrisEmergencyContactAddressDefltRequestBuilder {
    return new HrisEmergencyContactAddressDefltRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HrisEmergencyContactAddressDeflt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HrisEmergencyContactAddressDeflt`.
   */
  static customField(fieldName: string): CustomField<HrisEmergencyContactAddressDeflt> {
    return Entity.customFieldSelector(fieldName, HrisEmergencyContactAddressDeflt);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface HrisEmergencyContactAddressDefltType {
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  addressId: BigNumber;
  addressType?: string;
  city?: string;
  country?: string;
  county?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  notes?: string;
  province?: string;
  startDate?: Moment;
  state?: string;
  zipCode?: string;
}

export interface HrisEmergencyContactAddressDefltTypeForceMandatory {
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  addressId: BigNumber;
  addressType: string;
  city: string;
  country: string;
  county: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  notes: string;
  province: string;
  startDate: Moment;
  state: string;
  zipCode: string;
}

export namespace HrisEmergencyContactAddressDeflt {
  /**
   * Static representation of the [[address1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_1: StringField<HrisEmergencyContactAddressDeflt> = new StringField('address1', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<HrisEmergencyContactAddressDeflt> = new StringField('address2', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_3: StringField<HrisEmergencyContactAddressDeflt> = new StringField('address3', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_4: StringField<HrisEmergencyContactAddressDeflt> = new StringField('address4', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_5: StringField<HrisEmergencyContactAddressDeflt> = new StringField('address5', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: BigNumberField<HrisEmergencyContactAddressDeflt> = new BigNumberField('addressId', HrisEmergencyContactAddressDeflt, 'Edm.Decimal');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<HrisEmergencyContactAddressDeflt> = new StringField('addressType', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<HrisEmergencyContactAddressDeflt> = new StringField('city', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<HrisEmergencyContactAddressDeflt> = new StringField('country', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<HrisEmergencyContactAddressDeflt> = new StringField('county', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HrisEmergencyContactAddressDeflt> = new StringField('createdBy', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HrisEmergencyContactAddressDeflt> = new DateField('createdDateTime', HrisEmergencyContactAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<HrisEmergencyContactAddressDeflt> = new DateField('createdOn', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<HrisEmergencyContactAddressDeflt> = new DateField('endDate', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HrisEmergencyContactAddressDeflt> = new StringField('lastModifiedBy', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HrisEmergencyContactAddressDeflt> = new DateField('lastModifiedDateTime', HrisEmergencyContactAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<HrisEmergencyContactAddressDeflt> = new DateField('lastModifiedOn', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<HrisEmergencyContactAddressDeflt> = new StringField('notes', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[province]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVINCE: StringField<HrisEmergencyContactAddressDeflt> = new StringField('province', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<HrisEmergencyContactAddressDeflt> = new DateField('startDate', HrisEmergencyContactAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<HrisEmergencyContactAddressDeflt> = new StringField('state', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<HrisEmergencyContactAddressDeflt> = new StringField('zipCode', HrisEmergencyContactAddressDeflt, 'Edm.String');
  /**
   * All fields of the HrisEmergencyContactAddressDeflt entity.
   */
  export const _allFields: Array<StringField<HrisEmergencyContactAddressDeflt> | BigNumberField<HrisEmergencyContactAddressDeflt> | DateField<HrisEmergencyContactAddressDeflt>> = [
    HrisEmergencyContactAddressDeflt.ADDRESS_1,
    HrisEmergencyContactAddressDeflt.ADDRESS_2,
    HrisEmergencyContactAddressDeflt.ADDRESS_3,
    HrisEmergencyContactAddressDeflt.ADDRESS_4,
    HrisEmergencyContactAddressDeflt.ADDRESS_5,
    HrisEmergencyContactAddressDeflt.ADDRESS_ID,
    HrisEmergencyContactAddressDeflt.ADDRESS_TYPE,
    HrisEmergencyContactAddressDeflt.CITY,
    HrisEmergencyContactAddressDeflt.COUNTRY,
    HrisEmergencyContactAddressDeflt.COUNTY,
    HrisEmergencyContactAddressDeflt.CREATED_BY,
    HrisEmergencyContactAddressDeflt.CREATED_DATE_TIME,
    HrisEmergencyContactAddressDeflt.CREATED_ON,
    HrisEmergencyContactAddressDeflt.END_DATE,
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_BY,
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_DATE_TIME,
    HrisEmergencyContactAddressDeflt.LAST_MODIFIED_ON,
    HrisEmergencyContactAddressDeflt.NOTES,
    HrisEmergencyContactAddressDeflt.PROVINCE,
    HrisEmergencyContactAddressDeflt.START_DATE,
    HrisEmergencyContactAddressDeflt.STATE,
    HrisEmergencyContactAddressDeflt.ZIP_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HrisEmergencyContactAddressDeflt> = new AllFields('*', HrisEmergencyContactAddressDeflt);
  /**
   * All key fields of the HrisEmergencyContactAddressDeflt entity.
   */
  export const _keyFields: Array<Selectable<HrisEmergencyContactAddressDeflt>> = [HrisEmergencyContactAddressDeflt.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property HrisEmergencyContactAddressDeflt.
   */
  export const _keys: { [keys: string]: Selectable<HrisEmergencyContactAddressDeflt> } = HrisEmergencyContactAddressDeflt._keyFields.reduce((acc: { [keys: string]: Selectable<HrisEmergencyContactAddressDeflt> }, field: Selectable<HrisEmergencyContactAddressDeflt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
