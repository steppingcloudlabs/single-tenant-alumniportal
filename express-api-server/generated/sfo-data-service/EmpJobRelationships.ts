/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpJobRelationshipsRequestBuilder } from './EmpJobRelationshipsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EmpJobRelationships" of service "SFOData".
 */
export class EmpJobRelationships extends Entity implements EmpJobRelationshipsType {
  /**
   * Technical entity name for EmpJobRelationships.
   */
  static _entityName = 'EmpJobRelationships';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpJobRelationships.
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
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Name.
   * Maximum length: 384.
   * @nullable
   */
  relUserId?: string;
  /**
   * Relationship Type.
   * Maximum length: 100.
   */
  relationshipType!: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  relEmploymentNav!: EmpEmployment;

  /**
   * Returns an entity builder to construct instances `EmpJobRelationships`.
   * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
   */
  static builder(): EntityBuilderType<EmpJobRelationships, EmpJobRelationshipsTypeForceMandatory> {
    return Entity.entityBuilder(EmpJobRelationships);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpJobRelationships` entity type.
   * @returns A `EmpJobRelationships` request builder.
   */
  static requestBuilder(): EmpJobRelationshipsRequestBuilder {
    return new EmpJobRelationshipsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJobRelationships`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
   */
  static customField(fieldName: string): CustomField<EmpJobRelationships> {
    return Entity.customFieldSelector(fieldName, EmpJobRelationships);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';

export interface EmpJobRelationshipsType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  operation?: string;
  relUserId?: string;
  relationshipType: string;
  startDate: Moment;
  userId: string;
  employmentNav: EmpEmploymentType;
  relEmploymentNav: EmpEmploymentType;
}

export interface EmpJobRelationshipsTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  operation: string;
  relUserId: string;
  relationshipType: string;
  startDate: Moment;
  userId: string;
  employmentNav: EmpEmploymentType;
  relEmploymentNav: EmpEmploymentType;
}

export namespace EmpJobRelationships {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpJobRelationships> = new StringField('createdBy', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpJobRelationships> = new DateField('createdDateTime', EmpJobRelationships, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpJobRelationships> = new DateField('createdOn', EmpJobRelationships, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpJobRelationships> = new DateField('endDate', EmpJobRelationships, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpJobRelationships> = new StringField('lastModifiedBy', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpJobRelationships> = new DateField('lastModifiedDateTime', EmpJobRelationships, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpJobRelationships> = new DateField('lastModifiedOn', EmpJobRelationships, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<EmpJobRelationships> = new StringField('operation', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the [[relUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REL_USER_ID: StringField<EmpJobRelationships> = new StringField('relUserId', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the [[relationshipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_TYPE: StringField<EmpJobRelationships> = new StringField('relationshipType', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpJobRelationships> = new DateField('startDate', EmpJobRelationships, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpJobRelationships> = new StringField('userId', EmpJobRelationships, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpJobRelationships, EmpEmployment> = new OneToOneLink('employmentNav', EmpJobRelationships, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[relEmploymentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REL_EMPLOYMENT_NAV: OneToOneLink<EmpJobRelationships, EmpEmployment> = new OneToOneLink('relEmploymentNav', EmpJobRelationships, EmpEmployment);
  /**
   * All fields of the EmpJobRelationships entity.
   */
  export const _allFields: Array<StringField<EmpJobRelationships> | DateField<EmpJobRelationships> | OneToOneLink<EmpJobRelationships, EmpEmployment>> = [
    EmpJobRelationships.CREATED_BY,
    EmpJobRelationships.CREATED_DATE_TIME,
    EmpJobRelationships.CREATED_ON,
    EmpJobRelationships.END_DATE,
    EmpJobRelationships.LAST_MODIFIED_BY,
    EmpJobRelationships.LAST_MODIFIED_DATE_TIME,
    EmpJobRelationships.LAST_MODIFIED_ON,
    EmpJobRelationships.OPERATION,
    EmpJobRelationships.REL_USER_ID,
    EmpJobRelationships.RELATIONSHIP_TYPE,
    EmpJobRelationships.START_DATE,
    EmpJobRelationships.USER_ID,
    EmpJobRelationships.EMPLOYMENT_NAV,
    EmpJobRelationships.REL_EMPLOYMENT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpJobRelationships> = new AllFields('*', EmpJobRelationships);
  /**
   * All key fields of the EmpJobRelationships entity.
   */
  export const _keyFields: Array<Selectable<EmpJobRelationships>> = [EmpJobRelationships.RELATIONSHIP_TYPE, EmpJobRelationships.START_DATE, EmpJobRelationships.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpJobRelationships.
   */
  export const _keys: { [keys: string]: Selectable<EmpJobRelationships> } = EmpJobRelationships._keyFields.reduce((acc: { [keys: string]: Selectable<EmpJobRelationships> }, field: Selectable<EmpJobRelationships>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
