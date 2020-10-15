/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonEmpTerminationInfoRequestBuilder } from './PersonEmpTerminationInfoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "PersonEmpTerminationInfo" of service "SFOData".
 */
export class PersonEmpTerminationInfo extends Entity implements PersonEmpTerminationInfoType {
  /**
   * Technical entity name for PersonEmpTerminationInfo.
   */
  static _entityName = 'PersonEmpTerminationInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PersonEmpTerminationInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Active Employments Count.
   * @nullable
   */
  activeEmploymentsCount?: number;
  /**
   * Latest Termination Date.
   * @nullable
   */
  latestTerminationDate?: Moment;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;

  /**
   * Returns an entity builder to construct instances `PersonEmpTerminationInfo`.
   * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
   */
  static builder(): EntityBuilderType<PersonEmpTerminationInfo, PersonEmpTerminationInfoTypeForceMandatory> {
    return Entity.entityBuilder(PersonEmpTerminationInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PersonEmpTerminationInfo` entity type.
   * @returns A `PersonEmpTerminationInfo` request builder.
   */
  static requestBuilder(): PersonEmpTerminationInfoRequestBuilder {
    return new PersonEmpTerminationInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonEmpTerminationInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
   */
  static customField(fieldName: string): CustomField<PersonEmpTerminationInfo> {
    return Entity.customFieldSelector(fieldName, PersonEmpTerminationInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface PersonEmpTerminationInfoType {
  activeEmploymentsCount?: number;
  latestTerminationDate?: Moment;
  personIdExternal: string;
}

export interface PersonEmpTerminationInfoTypeForceMandatory {
  activeEmploymentsCount: number;
  latestTerminationDate: Moment;
  personIdExternal: string;
}

export namespace PersonEmpTerminationInfo {
  /**
   * Static representation of the [[activeEmploymentsCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_EMPLOYMENTS_COUNT: NumberField<PersonEmpTerminationInfo> = new NumberField('activeEmploymentsCount', PersonEmpTerminationInfo, 'Edm.Int32');
  /**
   * Static representation of the [[latestTerminationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LATEST_TERMINATION_DATE: DateField<PersonEmpTerminationInfo> = new DateField('latestTerminationDate', PersonEmpTerminationInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PersonEmpTerminationInfo> = new StringField('personIdExternal', PersonEmpTerminationInfo, 'Edm.String');
  /**
   * All fields of the PersonEmpTerminationInfo entity.
   */
  export const _allFields: Array<NumberField<PersonEmpTerminationInfo> | DateField<PersonEmpTerminationInfo> | StringField<PersonEmpTerminationInfo>> = [
    PersonEmpTerminationInfo.ACTIVE_EMPLOYMENTS_COUNT,
    PersonEmpTerminationInfo.LATEST_TERMINATION_DATE,
    PersonEmpTerminationInfo.PERSON_ID_EXTERNAL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PersonEmpTerminationInfo> = new AllFields('*', PersonEmpTerminationInfo);
  /**
   * All key fields of the PersonEmpTerminationInfo entity.
   */
  export const _keyFields: Array<Selectable<PersonEmpTerminationInfo>> = [PersonEmpTerminationInfo.PERSON_ID_EXTERNAL];
  /**
   * Mapping of all key field names to the respective static field property PersonEmpTerminationInfo.
   */
  export const _keys: { [keys: string]: Selectable<PersonEmpTerminationInfo> } = PersonEmpTerminationInfo._keyFields.reduce((acc: { [keys: string]: Selectable<PersonEmpTerminationInfo> }, field: Selectable<PersonEmpTerminationInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
