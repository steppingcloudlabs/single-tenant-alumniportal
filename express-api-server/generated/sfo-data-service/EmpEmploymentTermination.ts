/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpEmploymentTerminationRequestBuilder } from './EmpEmploymentTerminationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EmpEmploymentTermination" of service "SFOData".
 */
export class EmpEmploymentTermination extends Entity implements EmpEmploymentTerminationType {
  /**
   * Technical entity name for EmpEmploymentTermination.
   */
  static _entityName = 'EmpEmploymentTermination';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpEmploymentTermination.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Stock End Date.
   * @nullable
   */
  stockEndDate?: Moment;
  /**
   * attachmentId.
   * @nullable
   */
  attachmentId?: string;
  /**
   * Benefits End Date.
   * @nullable
   */
  benefitsEndDate?: Moment;
  /**
   * bonusPayExpirationDate.
   * @nullable
   */
  bonusPayExpirationDate?: Moment;
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
   * Eligible for Salary Continuation.
   * @nullable
   */
  eligibleForSalContinuation?: boolean;
  /**
   * Termination Date.
   */
  endDate!: Moment;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: string;
  /**
   * Last Date Worked.
   * @nullable
   */
  lastDateWorked?: Moment;
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
   * newMainEmploymentId.
   * @nullable
   */
  newMainEmploymentId?: BigNumber;
  /**
   * Notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: string;
  /**
   * OK to Rehire.
   * @nullable
   */
  okToRehire?: boolean;
  /**
   * Payroll End Date.
   * @nullable
   */
  payrollEndDate?: Moment;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Regret Termination.
   * @nullable
   */
  regretTermination?: boolean;
  /**
   * Salary End Date.
   * @nullable
   */
  salaryEndDate?: Moment;
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
   * One-to-one navigation property to the [[EmpJob]] entity.
   */
  jobInfoNav!: EmpJob;

  /**
   * Returns an entity builder to construct instances `EmpEmploymentTermination`.
   * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
   */
  static builder(): EntityBuilderType<EmpEmploymentTermination, EmpEmploymentTerminationTypeForceMandatory> {
    return Entity.entityBuilder(EmpEmploymentTermination);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpEmploymentTermination` entity type.
   * @returns A `EmpEmploymentTermination` request builder.
   */
  static requestBuilder(): EmpEmploymentTerminationRequestBuilder {
    return new EmpEmploymentTerminationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmploymentTermination`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
   */
  static customField(fieldName: string): CustomField<EmpEmploymentTermination> {
    return Entity.customFieldSelector(fieldName, EmpEmploymentTermination);
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
import { EmpJob, EmpJobType } from './EmpJob';

export interface EmpEmploymentTerminationType {
  stockEndDate?: Moment;
  attachmentId?: string;
  benefitsEndDate?: Moment;
  bonusPayExpirationDate?: Moment;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  eligibleForSalContinuation?: boolean;
  endDate: Moment;
  eventReason?: string;
  lastDateWorked?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  newMainEmploymentId?: BigNumber;
  notes?: string;
  okToRehire?: boolean;
  payrollEndDate?: Moment;
  personIdExternal: string;
  regretTermination?: boolean;
  salaryEndDate?: Moment;
  userId: string;
  employmentNav: EmpEmploymentType;
  jobInfoNav: EmpJobType;
}

export interface EmpEmploymentTerminationTypeForceMandatory {
  stockEndDate: Moment;
  attachmentId: string;
  benefitsEndDate: Moment;
  bonusPayExpirationDate: Moment;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  eligibleForSalContinuation: boolean;
  endDate: Moment;
  eventReason: string;
  lastDateWorked: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  newMainEmploymentId: BigNumber;
  notes: string;
  okToRehire: boolean;
  payrollEndDate: Moment;
  personIdExternal: string;
  regretTermination: boolean;
  salaryEndDate: Moment;
  userId: string;
  employmentNav: EmpEmploymentType;
  jobInfoNav: EmpJobType;
}

export namespace EmpEmploymentTermination {
  /**
   * Static representation of the [[stockEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_END_DATE: DateField<EmpEmploymentTermination> = new DateField('StockEndDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[attachmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ID: StringField<EmpEmploymentTermination> = new StringField('attachmentId', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[benefitsEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENEFITS_END_DATE: DateField<EmpEmploymentTermination> = new DateField('benefitsEndDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[bonusPayExpirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BONUS_PAY_EXPIRATION_DATE: DateField<EmpEmploymentTermination> = new DateField('bonusPayExpirationDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpEmploymentTermination> = new StringField('createdBy', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpEmploymentTermination> = new DateField('createdDateTime', EmpEmploymentTermination, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpEmploymentTermination> = new DateField('createdOn', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[eligibleForSalContinuation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBLE_FOR_SAL_CONTINUATION: BooleanField<EmpEmploymentTermination> = new BooleanField('eligibleForSalContinuation', EmpEmploymentTermination, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpEmploymentTermination> = new DateField('endDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<EmpEmploymentTermination> = new StringField('eventReason', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[lastDateWorked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_DATE_WORKED: DateField<EmpEmploymentTermination> = new DateField('lastDateWorked', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpEmploymentTermination> = new StringField('lastModifiedBy', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpEmploymentTermination> = new DateField('lastModifiedDateTime', EmpEmploymentTermination, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpEmploymentTermination> = new DateField('lastModifiedOn', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[newMainEmploymentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_MAIN_EMPLOYMENT_ID: BigNumberField<EmpEmploymentTermination> = new BigNumberField('newMainEmploymentId', EmpEmploymentTermination, 'Edm.Decimal');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<EmpEmploymentTermination> = new StringField('notes', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[okToRehire]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OK_TO_REHIRE: BooleanField<EmpEmploymentTermination> = new BooleanField('okToRehire', EmpEmploymentTermination, 'Edm.Boolean');
  /**
   * Static representation of the [[payrollEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_END_DATE: DateField<EmpEmploymentTermination> = new DateField('payrollEndDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<EmpEmploymentTermination> = new StringField('personIdExternal', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the [[regretTermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGRET_TERMINATION: BooleanField<EmpEmploymentTermination> = new BooleanField('regretTermination', EmpEmploymentTermination, 'Edm.Boolean');
  /**
   * Static representation of the [[salaryEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_END_DATE: DateField<EmpEmploymentTermination> = new DateField('salaryEndDate', EmpEmploymentTermination, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpEmploymentTermination> = new StringField('userId', EmpEmploymentTermination, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpEmploymentTermination, EmpEmployment> = new OneToOneLink('employmentNav', EmpEmploymentTermination, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[jobInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_INFO_NAV: OneToOneLink<EmpEmploymentTermination, EmpJob> = new OneToOneLink('jobInfoNav', EmpEmploymentTermination, EmpJob);
  /**
   * All fields of the EmpEmploymentTermination entity.
   */
  export const _allFields: Array<DateField<EmpEmploymentTermination> | StringField<EmpEmploymentTermination> | BooleanField<EmpEmploymentTermination> | BigNumberField<EmpEmploymentTermination> | OneToOneLink<EmpEmploymentTermination, EmpEmployment> | OneToOneLink<EmpEmploymentTermination, EmpJob>> = [
    EmpEmploymentTermination.STOCK_END_DATE,
    EmpEmploymentTermination.ATTACHMENT_ID,
    EmpEmploymentTermination.BENEFITS_END_DATE,
    EmpEmploymentTermination.BONUS_PAY_EXPIRATION_DATE,
    EmpEmploymentTermination.CREATED_BY,
    EmpEmploymentTermination.CREATED_DATE_TIME,
    EmpEmploymentTermination.CREATED_ON,
    EmpEmploymentTermination.ELIGIBLE_FOR_SAL_CONTINUATION,
    EmpEmploymentTermination.END_DATE,
    EmpEmploymentTermination.EVENT_REASON,
    EmpEmploymentTermination.LAST_DATE_WORKED,
    EmpEmploymentTermination.LAST_MODIFIED_BY,
    EmpEmploymentTermination.LAST_MODIFIED_DATE_TIME,
    EmpEmploymentTermination.LAST_MODIFIED_ON,
    EmpEmploymentTermination.NEW_MAIN_EMPLOYMENT_ID,
    EmpEmploymentTermination.NOTES,
    EmpEmploymentTermination.OK_TO_REHIRE,
    EmpEmploymentTermination.PAYROLL_END_DATE,
    EmpEmploymentTermination.PERSON_ID_EXTERNAL,
    EmpEmploymentTermination.REGRET_TERMINATION,
    EmpEmploymentTermination.SALARY_END_DATE,
    EmpEmploymentTermination.USER_ID,
    EmpEmploymentTermination.EMPLOYMENT_NAV,
    EmpEmploymentTermination.JOB_INFO_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpEmploymentTermination> = new AllFields('*', EmpEmploymentTermination);
  /**
   * All key fields of the EmpEmploymentTermination entity.
   */
  export const _keyFields: Array<Selectable<EmpEmploymentTermination>> = [EmpEmploymentTermination.END_DATE, EmpEmploymentTermination.PERSON_ID_EXTERNAL, EmpEmploymentTermination.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpEmploymentTermination.
   */
  export const _keys: { [keys: string]: Selectable<EmpEmploymentTermination> } = EmpEmploymentTermination._keyFields.reduce((acc: { [keys: string]: Selectable<EmpEmploymentTermination> }, field: Selectable<EmpEmploymentTermination>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
