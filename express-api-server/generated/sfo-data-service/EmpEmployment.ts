/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpEmploymentRequestBuilder } from './EmpEmploymentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EmpEmployment" of service "SFOData".
 */
export class EmpEmployment extends Entity implements EmpEmploymentType {
  /**
   * Technical entity name for EmpEmployment.
   */
  static _entityName = 'EmpEmployment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpEmployment.
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
   * Employment Assignment Type.
   * Maximum length: 128.
   * @nullable
   */
  assignmentClass?: string;
  /**
   * Benefits Eligibility Start Date.
   * @nullable
   */
  benefitsEligibilityStartDate?: Moment;
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
   * Eligible for Stock.
   * @nullable
   */
  eligibleForStock?: boolean;
  /**
   * Employee's First Employment.
   * @nullable
   */
  employeeFirstEmployment?: boolean;
  /**
   * Termination Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * First Date Worked.
   * @nullable
   */
  firstDateWorked?: Moment;
  /**
   * Include All Records.
   * @nullable
   */
  includeAllRecords?: boolean;
  /**
   * Initial Option Grant.
   * @nullable
   */
  initialOptionGrant?: number;
  /**
   * Initial Stock Grant.
   * @nullable
   */
  initialStockGrant?: number;
  /**
   * Contingent Worker.
   * @nullable
   */
  isContingentWorker?: boolean;
  /**
   * isECRecord.
   * @nullable
   */
  isEcRecord?: boolean;
  /**
   * Employment Id.
   * @nullable
   */
  jobNumber?: BigNumber;
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
   * OK to Rehire.
   * @nullable
   */
  okToRehire?: boolean;
  /**
   * Original Start Date.
   * @nullable
   */
  originalStartDate?: Moment;
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
   * Previous Employment ID.
   * Maximum length: 256.
   * @nullable
   */
  prevEmployeeId?: string;
  /**
   * Professional Service Date.
   * @nullable
   */
  professionalServiceDate?: Moment;
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
   * Seniority Start Date.
   * @nullable
   */
  seniorityDate?: Moment;
  /**
   * Service Date.
   * @nullable
   */
  serviceDate?: Moment;
  /**
   * Hire Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-many navigation property to the [[EmpJobRelationships]] entity.
   */
  empJobRelationshipNav!: EmpJobRelationships[];
  /**
   * One-to-many navigation property to the [[EmpWorkPermit]] entity.
   */
  empWorkPermitNav!: EmpWorkPermit[];
  /**
   * One-to-many navigation property to the [[EmpJob]] entity.
   */
  jobInfoNav!: EmpJob[];

  /**
   * Returns an entity builder to construct instances `EmpEmployment`.
   * @returns A builder that constructs instances of entity type `EmpEmployment`.
   */
  static builder(): EntityBuilderType<EmpEmployment, EmpEmploymentTypeForceMandatory> {
    return Entity.entityBuilder(EmpEmployment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpEmployment` entity type.
   * @returns A `EmpEmployment` request builder.
   */
  static requestBuilder(): EmpEmploymentRequestBuilder {
    return new EmpEmploymentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmployment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpEmployment`.
   */
  static customField(fieldName: string): CustomField<EmpEmployment> {
    return Entity.customFieldSelector(fieldName, EmpEmployment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpJobRelationships, EmpJobRelationshipsType } from './EmpJobRelationships';
import { EmpWorkPermit, EmpWorkPermitType } from './EmpWorkPermit';
import { EmpJob, EmpJobType } from './EmpJob';

export interface EmpEmploymentType {
  stockEndDate?: Moment;
  assignmentClass?: string;
  benefitsEligibilityStartDate?: Moment;
  benefitsEndDate?: Moment;
  bonusPayExpirationDate?: Moment;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  eligibleForSalContinuation?: boolean;
  eligibleForStock?: boolean;
  employeeFirstEmployment?: boolean;
  endDate?: Moment;
  firstDateWorked?: Moment;
  includeAllRecords?: boolean;
  initialOptionGrant?: number;
  initialStockGrant?: number;
  isContingentWorker?: boolean;
  isEcRecord?: boolean;
  jobNumber?: BigNumber;
  lastDateWorked?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  okToRehire?: boolean;
  originalStartDate?: Moment;
  payrollEndDate?: Moment;
  personIdExternal: string;
  prevEmployeeId?: string;
  professionalServiceDate?: Moment;
  regretTermination?: boolean;
  salaryEndDate?: Moment;
  seniorityDate?: Moment;
  serviceDate?: Moment;
  startDate?: Moment;
  userId: string;
  empJobRelationshipNav: EmpJobRelationshipsType[];
  empWorkPermitNav: EmpWorkPermitType[];
  jobInfoNav: EmpJobType[];
}

export interface EmpEmploymentTypeForceMandatory {
  stockEndDate: Moment;
  assignmentClass: string;
  benefitsEligibilityStartDate: Moment;
  benefitsEndDate: Moment;
  bonusPayExpirationDate: Moment;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  eligibleForSalContinuation: boolean;
  eligibleForStock: boolean;
  employeeFirstEmployment: boolean;
  endDate: Moment;
  firstDateWorked: Moment;
  includeAllRecords: boolean;
  initialOptionGrant: number;
  initialStockGrant: number;
  isContingentWorker: boolean;
  isEcRecord: boolean;
  jobNumber: BigNumber;
  lastDateWorked: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  okToRehire: boolean;
  originalStartDate: Moment;
  payrollEndDate: Moment;
  personIdExternal: string;
  prevEmployeeId: string;
  professionalServiceDate: Moment;
  regretTermination: boolean;
  salaryEndDate: Moment;
  seniorityDate: Moment;
  serviceDate: Moment;
  startDate: Moment;
  userId: string;
  empJobRelationshipNav: EmpJobRelationshipsType[];
  empWorkPermitNav: EmpWorkPermitType[];
  jobInfoNav: EmpJobType[];
}

export namespace EmpEmployment {
  /**
   * Static representation of the [[stockEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_END_DATE: DateField<EmpEmployment> = new DateField('StockEndDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[assignmentClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_CLASS: StringField<EmpEmployment> = new StringField('assignmentClass', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[benefitsEligibilityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENEFITS_ELIGIBILITY_START_DATE: DateField<EmpEmployment> = new DateField('benefitsEligibilityStartDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[benefitsEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENEFITS_END_DATE: DateField<EmpEmployment> = new DateField('benefitsEndDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[bonusPayExpirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BONUS_PAY_EXPIRATION_DATE: DateField<EmpEmployment> = new DateField('bonusPayExpirationDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpEmployment> = new StringField('createdBy', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpEmployment> = new DateField('createdDateTime', EmpEmployment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpEmployment> = new DateField('createdOn', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[eligibleForSalContinuation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBLE_FOR_SAL_CONTINUATION: BooleanField<EmpEmployment> = new BooleanField('eligibleForSalContinuation', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[eligibleForStock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBLE_FOR_STOCK: BooleanField<EmpEmployment> = new BooleanField('eligibleForStock', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[employeeFirstEmployment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_FIRST_EMPLOYMENT: BooleanField<EmpEmployment> = new BooleanField('employeeFirstEmployment', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpEmployment> = new DateField('endDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[firstDateWorked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_DATE_WORKED: DateField<EmpEmployment> = new DateField('firstDateWorked', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<EmpEmployment> = new BooleanField('includeAllRecords', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[initialOptionGrant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_OPTION_GRANT: NumberField<EmpEmployment> = new NumberField('initialOptionGrant', EmpEmployment, 'Edm.Double');
  /**
   * Static representation of the [[initialStockGrant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_STOCK_GRANT: NumberField<EmpEmployment> = new NumberField('initialStockGrant', EmpEmployment, 'Edm.Double');
  /**
   * Static representation of the [[isContingentWorker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_CONTINGENT_WORKER: BooleanField<EmpEmployment> = new BooleanField('isContingentWorker', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[isEcRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EC_RECORD: BooleanField<EmpEmployment> = new BooleanField('isECRecord', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[jobNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_NUMBER: BigNumberField<EmpEmployment> = new BigNumberField('jobNumber', EmpEmployment, 'Edm.Int64');
  /**
   * Static representation of the [[lastDateWorked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_DATE_WORKED: DateField<EmpEmployment> = new DateField('lastDateWorked', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpEmployment> = new StringField('lastModifiedBy', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpEmployment> = new DateField('lastModifiedDateTime', EmpEmployment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpEmployment> = new DateField('lastModifiedOn', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[okToRehire]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OK_TO_REHIRE: BooleanField<EmpEmployment> = new BooleanField('okToRehire', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[originalStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_START_DATE: DateField<EmpEmployment> = new DateField('originalStartDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[payrollEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_END_DATE: DateField<EmpEmployment> = new DateField('payrollEndDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<EmpEmployment> = new StringField('personIdExternal', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[prevEmployeeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREV_EMPLOYEE_ID: StringField<EmpEmployment> = new StringField('prevEmployeeId', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the [[professionalServiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFESSIONAL_SERVICE_DATE: DateField<EmpEmployment> = new DateField('professionalServiceDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[regretTermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGRET_TERMINATION: BooleanField<EmpEmployment> = new BooleanField('regretTermination', EmpEmployment, 'Edm.Boolean');
  /**
   * Static representation of the [[salaryEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_END_DATE: DateField<EmpEmployment> = new DateField('salaryEndDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[seniorityDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENIORITY_DATE: DateField<EmpEmployment> = new DateField('seniorityDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[serviceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DATE: DateField<EmpEmployment> = new DateField('serviceDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpEmployment> = new DateField('startDate', EmpEmployment, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpEmployment> = new StringField('userId', EmpEmployment, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[empJobRelationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_JOB_RELATIONSHIP_NAV: Link<EmpEmployment, EmpJobRelationships> = new Link('empJobRelationshipNav', EmpEmployment, EmpJobRelationships);
  /**
   * Static representation of the one-to-many navigation property [[empWorkPermitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_WORK_PERMIT_NAV: Link<EmpEmployment, EmpWorkPermit> = new Link('empWorkPermitNav', EmpEmployment, EmpWorkPermit);
  /**
   * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_INFO_NAV: Link<EmpEmployment, EmpJob> = new Link('jobInfoNav', EmpEmployment, EmpJob);
  /**
   * All fields of the EmpEmployment entity.
   */
  export const _allFields: Array<DateField<EmpEmployment> | StringField<EmpEmployment> | BooleanField<EmpEmployment> | NumberField<EmpEmployment> | BigNumberField<EmpEmployment> | Link<EmpEmployment, EmpJobRelationships> | Link<EmpEmployment, EmpWorkPermit> | Link<EmpEmployment, EmpJob>> = [
    EmpEmployment.STOCK_END_DATE,
    EmpEmployment.ASSIGNMENT_CLASS,
    EmpEmployment.BENEFITS_ELIGIBILITY_START_DATE,
    EmpEmployment.BENEFITS_END_DATE,
    EmpEmployment.BONUS_PAY_EXPIRATION_DATE,
    EmpEmployment.CREATED_BY,
    EmpEmployment.CREATED_DATE_TIME,
    EmpEmployment.CREATED_ON,
    EmpEmployment.ELIGIBLE_FOR_SAL_CONTINUATION,
    EmpEmployment.ELIGIBLE_FOR_STOCK,
    EmpEmployment.EMPLOYEE_FIRST_EMPLOYMENT,
    EmpEmployment.END_DATE,
    EmpEmployment.FIRST_DATE_WORKED,
    EmpEmployment.INCLUDE_ALL_RECORDS,
    EmpEmployment.INITIAL_OPTION_GRANT,
    EmpEmployment.INITIAL_STOCK_GRANT,
    EmpEmployment.IS_CONTINGENT_WORKER,
    EmpEmployment.IS_EC_RECORD,
    EmpEmployment.JOB_NUMBER,
    EmpEmployment.LAST_DATE_WORKED,
    EmpEmployment.LAST_MODIFIED_BY,
    EmpEmployment.LAST_MODIFIED_DATE_TIME,
    EmpEmployment.LAST_MODIFIED_ON,
    EmpEmployment.OK_TO_REHIRE,
    EmpEmployment.ORIGINAL_START_DATE,
    EmpEmployment.PAYROLL_END_DATE,
    EmpEmployment.PERSON_ID_EXTERNAL,
    EmpEmployment.PREV_EMPLOYEE_ID,
    EmpEmployment.PROFESSIONAL_SERVICE_DATE,
    EmpEmployment.REGRET_TERMINATION,
    EmpEmployment.SALARY_END_DATE,
    EmpEmployment.SENIORITY_DATE,
    EmpEmployment.SERVICE_DATE,
    EmpEmployment.START_DATE,
    EmpEmployment.USER_ID,
    EmpEmployment.EMP_JOB_RELATIONSHIP_NAV,
    EmpEmployment.EMP_WORK_PERMIT_NAV,
    EmpEmployment.JOB_INFO_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpEmployment> = new AllFields('*', EmpEmployment);
  /**
   * All key fields of the EmpEmployment entity.
   */
  export const _keyFields: Array<Selectable<EmpEmployment>> = [EmpEmployment.PERSON_ID_EXTERNAL, EmpEmployment.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpEmployment.
   */
  export const _keys: { [keys: string]: Selectable<EmpEmployment> } = EmpEmployment._keyFields.reduce((acc: { [keys: string]: Selectable<EmpEmployment> }, field: Selectable<EmpEmployment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
