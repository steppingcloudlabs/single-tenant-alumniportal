/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpJobRequestBuilder } from './EmpJobRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EmpJob" of service "SFOData".
 */
export class EmpJob extends Entity implements EmpJobType {
  /**
   * Technical entity name for EmpJob.
   */
  static _entityName = 'EmpJob';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpJob.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Number of Initial Pôle Emploi Statement (Entertainment Worker).
   * @nullable
   */
  assedicCertInitialStateNum?: BigNumber;
  /**
   * Pôle Emploi Certificate Object Number (Entertainment Worker).
   * @nullable
   */
  assedicCertObjectNum?: BigNumber;
  /**
   * Business Unit.
   * Maximum length: 32.
   * @nullable
   */
  businessUnit?: string;
  /**
   * Calculation Method Indicator.
   * @nullable
   */
  calcMethodIndicator?: boolean;
  /**
   * Commitment Indicator.
   * Maximum length: 256.
   * @nullable
   */
  commitmentIndicator?: string;
  /**
   * Company.
   * Maximum length: 32.
   * @nullable
   */
  company?: string;
  /**
   * Contract Reference.
   * Maximum length: 256.
   * @nullable
   */
  contractReferenceForAed?: string;
  /**
   * Contract Type.
   * Maximum length: 256.
   * @nullable
   */
  contractType?: string;
  /**
   * Cost Center.
   * Maximum length: 32.
   * @nullable
   */
  costCenter?: string;
  /**
   * Country.
   * Maximum length: 256.
   * @nullable
   */
  countryOfCompany?: string;
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
   * Default Overtime Compensation Variant.
   * @nullable
   */
  defaultOvertimeCompensationVariant?: string;
  /**
   * Department.
   * Maximum length: 32.
   * @nullable
   */
  department?: string;
  /**
   * Division.
   * Maximum length: 32.
   * @nullable
   */
  division?: string;
  /**
   * EEO Category 1.
   * Maximum length: 256.
   * @nullable
   */
  eeo1JobCategory?: string;
  /**
   * EEO Category 4.
   * Maximum length: 256.
   * @nullable
   */
  eeo4JobCategory?: string;
  /**
   * EEO Category 5.
   * Maximum length: 256.
   * @nullable
   */
  eeo5JobCategory?: string;
  /**
   * EEO Category 6.
   * Maximum length: 256.
   * @nullable
   */
  eeo6JobCategory?: string;
  /**
   * EEO Job Group.
   * Maximum length: 256.
   * @nullable
   */
  eeoClass?: string;
  /**
   * Electoral College for Workers Representatives.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorkersRepresentatives?: string;
  /**
   * Electoral College for Works Council.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorksCouncil?: string;
  /**
   * Employment Relationship.
   * Maximum length: 256.
   * @nullable
   */
  empRelationship?: string;
  /**
   * Employee Status.
   * Maximum length: 32.
   * @nullable
   */
  emplStatus?: string;
  /**
   * Employee Class.
   * Maximum length: 256.
   * @nullable
   */
  employeeClass?: string;
  /**
   * Employee Workgroup Membership.
   * Maximum length: 60.
   * @nullable
   */
  employeeWorkgroupMembership?: string;
  /**
   * Employment Type.
   * Maximum length: 32.
   * @nullable
   */
  employmentType?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Event.
   * Maximum length: 32.
   * @nullable
   */
  event?: string;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: string;
  /**
   * Excluded from Executive Sector.
   * @nullable
   */
  exclExecutiveSector?: boolean;
  /**
   * expectedReturnDate.
   * @nullable
   */
  expectedReturnDate?: Moment;
  /**
   * Family Relationship with Employer.
   * Maximum length: 256.
   * @nullable
   */
  familyRelationshipWithEmployer?: string;
  /**
   * FGTS Date.
   * @nullable
   */
  fgtsDate?: Moment;
  /**
   * FGTS Recipient (Entitled to Receive Severance Pay).
   * @nullable
   */
  fgtsOptant?: boolean;
  /**
   * FGTS Percentage.
   * @nullable
   */
  fgtsPercent?: number;
  /**
   * FLSA Status.
   * Maximum length: 256.
   * @nullable
   */
  flsaStatus?: string;
  /**
   * FTE.
   * @nullable
   */
  fte?: number;
  /**
   * Harmful Agent Exposure Code.
   * Maximum length: 256.
   * @nullable
   */
  harmfulAgentExposure?: string;
  /**
   * Hazard.
   * @nullable
   */
  hazard?: boolean;
  /**
   * Health Risk.
   * @nullable
   */
  healthRisk?: boolean;
  /**
   * Holiday Calendar.
   * Maximum length: 128.
   * @nullable
   */
  holidayCalendarCode?: string;
  /**
   * Competition Clause.
   * @nullable
   */
  isCompetitionClauseActive?: boolean;
  /**
   * Is Fulltime Employee.
   * @nullable
   */
  isFulltimeEmployee?: boolean;
  /**
   * Sideline Job Allowed.
   * @nullable
   */
  isSideLineJobAllowed?: boolean;
  /**
   * Job Classification.
   * Maximum length: 32.
   * @nullable
   */
  jobCode?: string;
  /**
   * Job Title.
   * Maximum length: 256.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Labor Protection.
   * @nullable
   */
  laborProtection?: boolean;
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
   * Location.
   * Maximum length: 128.
   * @nullable
   */
  location?: string;
  /**
   * Supervisor.
   * Maximum length: 256.
   * @nullable
   */
  managerId?: string;
  /**
   * Mandatory Work Break Record.
   * @nullable
   */
  mandatoryWorkBreakRecord?: BigNumber;
  /**
   * Municipal INSEE Code.
   * @nullable
   */
  municipalInseeCode?: BigNumber;
  /**
   * Notes.
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
   * Pay Grade.
   * Maximum length: 256.
   * @nullable
   */
  payGrade?: string;
  /**
   * Pay Scale Area.
   * Maximum length: 128.
   * @nullable
   */
  payScaleArea?: string;
  /**
   * Pay Scale Group.
   * Maximum length: 128.
   * @nullable
   */
  payScaleGroup?: string;
  /**
   * Pay Scale Level.
   * Maximum length: 128.
   * @nullable
   */
  payScaleLevel?: string;
  /**
   * Pay Scale Type.
   * Maximum length: 128.
   * @nullable
   */
  payScaleType?: string;
  /**
   * Provisional Certificate in Financial Movements (PCFM).
   * @nullable
   */
  pcfm?: boolean;
  /**
   * Pension Protection (Fixed or Enhanced).
   * @nullable
   */
  pensionProtection?: boolean;
  /**
   * Underage Apprentice Permit.
   * @nullable
   */
  permitIndicator?: boolean;
  /**
   * Position.
   * Maximum length: 128.
   * @nullable
   */
  position?: string;
  /**
   * Position Entry Date.
   * @nullable
   */
  positionEntryDate?: Moment;
  /**
   * Probationary Period End Date.
   * @nullable
   */
  probationPeriodEndDate?: Moment;
  /**
   * Regular/Temporary.
   * Maximum length: 32.
   * @nullable
   */
  regularTemp?: string;
  /**
   * Resident Vote.
   * @nullable
   */
  residentVote?: boolean;
  /**
   * Retired.
   * @nullable
   */
  retired?: boolean;
  /**
   * Sequence Number.
   */
  seqNumber!: BigNumber;
  /**
   * Sick Pay Supplement.
   * Maximum length: 256.
   * @nullable
   */
  sickPaySupplement?: string;
  /**
   * Standard Weekly Hours.
   * @nullable
   */
  standardHours?: number;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Teachers Pensions.
   * @nullable
   */
  teachersPension?: boolean;
  /**
   * Time Recording Admissibility.
   * Maximum length: 128.
   * @nullable
   */
  timeRecordingAdmissibilityCode?: string;
  /**
   * Time Recording Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeRecordingProfileCode?: string;
  /**
   * Time Recording Variant.
   * @nullable
   */
  timeRecordingVariant?: string;
  /**
   * Time Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeTypeProfileCode?: string;
  /**
   * Timezone.
   * Maximum length: 128.
   * @nullable
   */
  timezone?: string;
  /**
   * Travel Distance.
   * @nullable
   */
  travelDistance?: number;
  /**
   * TUPE Organization Number.
   * Maximum length: 256.
   * @nullable
   */
  tupeOrgNumber?: string;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * Work Location.
   * Maximum length: 256.
   * @nullable
   */
  workLocation?: string;
  /**
   * Worker Category.
   * Maximum length: 256.
   * @nullable
   */
  workerCategory?: string;
  /**
   * Working Days Per Week.
   * @nullable
   */
  workingDaysPerWeek?: number;
  /**
   * Working Time Directive.
   * @nullable
   */
  workingTimeDirective?: boolean;
  /**
   * Work Schedule.
   * Maximum length: 128.
   * @nullable
   */
  workscheduleCode?: string;
  /**
   * WTD Working Hours Limit.
   * Maximum length: 256.
   * @nullable
   */
  wtdHoursLimit?: string;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  managerEmploymentNav!: EmpEmployment;

  /**
   * Returns an entity builder to construct instances `EmpJob`.
   * @returns A builder that constructs instances of entity type `EmpJob`.
   */
  static builder(): EntityBuilderType<EmpJob, EmpJobTypeForceMandatory> {
    return Entity.entityBuilder(EmpJob);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpJob` entity type.
   * @returns A `EmpJob` request builder.
   */
  static requestBuilder(): EmpJobRequestBuilder {
    return new EmpJobRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJob`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpJob`.
   */
  static customField(fieldName: string): CustomField<EmpJob> {
    return Entity.customFieldSelector(fieldName, EmpJob);
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

export interface EmpJobType {
  assedicCertInitialStateNum?: BigNumber;
  assedicCertObjectNum?: BigNumber;
  businessUnit?: string;
  calcMethodIndicator?: boolean;
  commitmentIndicator?: string;
  company?: string;
  contractReferenceForAed?: string;
  contractType?: string;
  costCenter?: string;
  countryOfCompany?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  defaultOvertimeCompensationVariant?: string;
  department?: string;
  division?: string;
  eeo1JobCategory?: string;
  eeo4JobCategory?: string;
  eeo5JobCategory?: string;
  eeo6JobCategory?: string;
  eeoClass?: string;
  electoralCollegeForWorkersRepresentatives?: string;
  electoralCollegeForWorksCouncil?: string;
  empRelationship?: string;
  emplStatus?: string;
  employeeClass?: string;
  employeeWorkgroupMembership?: string;
  employmentType?: string;
  endDate?: Moment;
  event?: string;
  eventReason?: string;
  exclExecutiveSector?: boolean;
  expectedReturnDate?: Moment;
  familyRelationshipWithEmployer?: string;
  fgtsDate?: Moment;
  fgtsOptant?: boolean;
  fgtsPercent?: number;
  flsaStatus?: string;
  fte?: number;
  harmfulAgentExposure?: string;
  hazard?: boolean;
  healthRisk?: boolean;
  holidayCalendarCode?: string;
  isCompetitionClauseActive?: boolean;
  isFulltimeEmployee?: boolean;
  isSideLineJobAllowed?: boolean;
  jobCode?: string;
  jobTitle?: string;
  laborProtection?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  location?: string;
  managerId?: string;
  mandatoryWorkBreakRecord?: BigNumber;
  municipalInseeCode?: BigNumber;
  notes?: string;
  operation?: string;
  payGrade?: string;
  payScaleArea?: string;
  payScaleGroup?: string;
  payScaleLevel?: string;
  payScaleType?: string;
  pcfm?: boolean;
  pensionProtection?: boolean;
  permitIndicator?: boolean;
  position?: string;
  positionEntryDate?: Moment;
  probationPeriodEndDate?: Moment;
  regularTemp?: string;
  residentVote?: boolean;
  retired?: boolean;
  seqNumber: BigNumber;
  sickPaySupplement?: string;
  standardHours?: number;
  startDate: Moment;
  teachersPension?: boolean;
  timeRecordingAdmissibilityCode?: string;
  timeRecordingProfileCode?: string;
  timeRecordingVariant?: string;
  timeTypeProfileCode?: string;
  timezone?: string;
  travelDistance?: number;
  tupeOrgNumber?: string;
  userId: string;
  workLocation?: string;
  workerCategory?: string;
  workingDaysPerWeek?: number;
  workingTimeDirective?: boolean;
  workscheduleCode?: string;
  wtdHoursLimit?: string;
  employmentNav: EmpEmploymentType;
  managerEmploymentNav: EmpEmploymentType;
}

export interface EmpJobTypeForceMandatory {
  assedicCertInitialStateNum: BigNumber;
  assedicCertObjectNum: BigNumber;
  businessUnit: string;
  calcMethodIndicator: boolean;
  commitmentIndicator: string;
  company: string;
  contractReferenceForAed: string;
  contractType: string;
  costCenter: string;
  countryOfCompany: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  defaultOvertimeCompensationVariant: string;
  department: string;
  division: string;
  eeo1JobCategory: string;
  eeo4JobCategory: string;
  eeo5JobCategory: string;
  eeo6JobCategory: string;
  eeoClass: string;
  electoralCollegeForWorkersRepresentatives: string;
  electoralCollegeForWorksCouncil: string;
  empRelationship: string;
  emplStatus: string;
  employeeClass: string;
  employeeWorkgroupMembership: string;
  employmentType: string;
  endDate: Moment;
  event: string;
  eventReason: string;
  exclExecutiveSector: boolean;
  expectedReturnDate: Moment;
  familyRelationshipWithEmployer: string;
  fgtsDate: Moment;
  fgtsOptant: boolean;
  fgtsPercent: number;
  flsaStatus: string;
  fte: number;
  harmfulAgentExposure: string;
  hazard: boolean;
  healthRisk: boolean;
  holidayCalendarCode: string;
  isCompetitionClauseActive: boolean;
  isFulltimeEmployee: boolean;
  isSideLineJobAllowed: boolean;
  jobCode: string;
  jobTitle: string;
  laborProtection: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  location: string;
  managerId: string;
  mandatoryWorkBreakRecord: BigNumber;
  municipalInseeCode: BigNumber;
  notes: string;
  operation: string;
  payGrade: string;
  payScaleArea: string;
  payScaleGroup: string;
  payScaleLevel: string;
  payScaleType: string;
  pcfm: boolean;
  pensionProtection: boolean;
  permitIndicator: boolean;
  position: string;
  positionEntryDate: Moment;
  probationPeriodEndDate: Moment;
  regularTemp: string;
  residentVote: boolean;
  retired: boolean;
  seqNumber: BigNumber;
  sickPaySupplement: string;
  standardHours: number;
  startDate: Moment;
  teachersPension: boolean;
  timeRecordingAdmissibilityCode: string;
  timeRecordingProfileCode: string;
  timeRecordingVariant: string;
  timeTypeProfileCode: string;
  timezone: string;
  travelDistance: number;
  tupeOrgNumber: string;
  userId: string;
  workLocation: string;
  workerCategory: string;
  workingDaysPerWeek: number;
  workingTimeDirective: boolean;
  workscheduleCode: string;
  wtdHoursLimit: string;
  employmentNav: EmpEmploymentType;
  managerEmploymentNav: EmpEmploymentType;
}

export namespace EmpJob {
  /**
   * Static representation of the [[assedicCertInitialStateNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEDIC_CERT_INITIAL_STATE_NUM: BigNumberField<EmpJob> = new BigNumberField('assedicCertInitialStateNum', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[assedicCertObjectNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEDIC_CERT_OBJECT_NUM: BigNumberField<EmpJob> = new BigNumberField('assedicCertObjectNum', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[businessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT: StringField<EmpJob> = new StringField('businessUnit', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[calcMethodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALC_METHOD_INDICATOR: BooleanField<EmpJob> = new BooleanField('calcMethodIndicator', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[commitmentIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMITMENT_INDICATOR: StringField<EmpJob> = new StringField('commitmentIndicator', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<EmpJob> = new StringField('company', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[contractReferenceForAed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_REFERENCE_FOR_AED: StringField<EmpJob> = new StringField('contractReferenceForAed', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[contractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TYPE: StringField<EmpJob> = new StringField('contractType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<EmpJob> = new StringField('costCenter', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[countryOfCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_COMPANY: StringField<EmpJob> = new StringField('countryOfCompany', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpJob> = new StringField('createdBy', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpJob> = new DateField('createdDateTime', EmpJob, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpJob> = new DateField('createdOn', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[defaultOvertimeCompensationVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_OVERTIME_COMPENSATION_VARIANT: StringField<EmpJob> = new StringField('defaultOvertimeCompensationVariant', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<EmpJob> = new StringField('department', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<EmpJob> = new StringField('division', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo1JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_1_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo1JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo4JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_4_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo4JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo5JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_5_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo5JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo6JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_6_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo6JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeoClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_CLASS: StringField<EmpJob> = new StringField('eeoClass', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[electoralCollegeForWorkersRepresentatives]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES: StringField<EmpJob> = new StringField('electoralCollegeForWorkersRepresentatives', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[electoralCollegeForWorksCouncil]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL: StringField<EmpJob> = new StringField('electoralCollegeForWorksCouncil', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[empRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_RELATIONSHIP: StringField<EmpJob> = new StringField('empRelationship', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[emplStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPL_STATUS: StringField<EmpJob> = new StringField('emplStatus', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[employeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CLASS: StringField<EmpJob> = new StringField('employeeClass', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[employeeWorkgroupMembership]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_WORKGROUP_MEMBERSHIP: StringField<EmpJob> = new StringField('employeeWorkgroupMembership', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[employmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_TYPE: StringField<EmpJob> = new StringField('employmentType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpJob> = new DateField('endDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[event]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT: StringField<EmpJob> = new StringField('event', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<EmpJob> = new StringField('eventReason', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[exclExecutiveSector]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCL_EXECUTIVE_SECTOR: BooleanField<EmpJob> = new BooleanField('exclExecutiveSector', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[expectedReturnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_RETURN_DATE: DateField<EmpJob> = new DateField('expectedReturnDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[familyRelationshipWithEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_RELATIONSHIP_WITH_EMPLOYER: StringField<EmpJob> = new StringField('familyRelationshipWithEmployer', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[fgtsDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_DATE: DateField<EmpJob> = new DateField('fgtsDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[fgtsOptant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_OPTANT: BooleanField<EmpJob> = new BooleanField('fgtsOptant', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[fgtsPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_PERCENT: NumberField<EmpJob> = new NumberField('fgtsPercent', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[flsaStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA_STATUS: StringField<EmpJob> = new StringField('flsaStatus', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[fte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FTE: NumberField<EmpJob> = new NumberField('fte', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[harmfulAgentExposure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARMFUL_AGENT_EXPOSURE: StringField<EmpJob> = new StringField('harmfulAgentExposure', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[hazard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAZARD: BooleanField<EmpJob> = new BooleanField('hazard', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[healthRisk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEALTH_RISK: BooleanField<EmpJob> = new BooleanField('healthRisk', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[holidayCalendarCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CALENDAR_CODE: StringField<EmpJob> = new StringField('holidayCalendarCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[isCompetitionClauseActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_COMPETITION_CLAUSE_ACTIVE: BooleanField<EmpJob> = new BooleanField('isCompetitionClauseActive', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[isFulltimeEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FULLTIME_EMPLOYEE: BooleanField<EmpJob> = new BooleanField('isFulltimeEmployee', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[isSideLineJobAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SIDE_LINE_JOB_ALLOWED: BooleanField<EmpJob> = new BooleanField('isSideLineJobAllowed', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<EmpJob> = new StringField('jobCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<EmpJob> = new StringField('jobTitle', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[laborProtection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABOR_PROTECTION: BooleanField<EmpJob> = new BooleanField('laborProtection', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpJob> = new StringField('lastModifiedBy', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpJob> = new DateField('lastModifiedDateTime', EmpJob, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpJob> = new DateField('lastModifiedOn', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<EmpJob> = new StringField('location', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[managerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_ID: StringField<EmpJob> = new StringField('managerId', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[mandatoryWorkBreakRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANDATORY_WORK_BREAK_RECORD: BigNumberField<EmpJob> = new BigNumberField('mandatoryWorkBreakRecord', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[municipalInseeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MUNICIPAL_INSEE_CODE: BigNumberField<EmpJob> = new BigNumberField('municipalInseeCode', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<EmpJob> = new StringField('notes', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<EmpJob> = new StringField('operation', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE: StringField<EmpJob> = new StringField('payGrade', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA: StringField<EmpJob> = new StringField('payScaleArea', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_GROUP: StringField<EmpJob> = new StringField('payScaleGroup', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL: StringField<EmpJob> = new StringField('payScaleLevel', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE: StringField<EmpJob> = new StringField('payScaleType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[pcfm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PCFM: BooleanField<EmpJob> = new BooleanField('pcfm', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[pensionProtection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PENSION_PROTECTION: BooleanField<EmpJob> = new BooleanField('pensionProtection', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[permitIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMIT_INDICATOR: BooleanField<EmpJob> = new BooleanField('permitIndicator', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[position]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION: StringField<EmpJob> = new StringField('position', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[positionEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ENTRY_DATE: DateField<EmpJob> = new DateField('positionEntryDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[probationPeriodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBATION_PERIOD_END_DATE: DateField<EmpJob> = new DateField('probationPeriodEndDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[regularTemp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGULAR_TEMP: StringField<EmpJob> = new StringField('regularTemp', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[residentVote]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESIDENT_VOTE: BooleanField<EmpJob> = new BooleanField('residentVote', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[retired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIRED: BooleanField<EmpJob> = new BooleanField('retired', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[seqNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQ_NUMBER: BigNumberField<EmpJob> = new BigNumberField('seqNumber', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[sickPaySupplement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SICK_PAY_SUPPLEMENT: StringField<EmpJob> = new StringField('sickPaySupplement', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[standardHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_HOURS: NumberField<EmpJob> = new NumberField('standardHours', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpJob> = new DateField('startDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[teachersPension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEACHERS_PENSION: BooleanField<EmpJob> = new BooleanField('teachersPension', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[timeRecordingAdmissibilityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_ADMISSIBILITY_CODE: StringField<EmpJob> = new StringField('timeRecordingAdmissibilityCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[timeRecordingProfileCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_PROFILE_CODE: StringField<EmpJob> = new StringField('timeRecordingProfileCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[timeRecordingVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT: StringField<EmpJob> = new StringField('timeRecordingVariant', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[timeTypeProfileCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_PROFILE_CODE: StringField<EmpJob> = new StringField('timeTypeProfileCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[timezone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEZONE: StringField<EmpJob> = new StringField('timezone', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[travelDistance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRAVEL_DISTANCE: NumberField<EmpJob> = new NumberField('travelDistance', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[tupeOrgNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUPE_ORG_NUMBER: StringField<EmpJob> = new StringField('tupeOrgNumber', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpJob> = new StringField('userId', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_LOCATION: StringField<EmpJob> = new StringField('workLocation', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workerCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKER_CATEGORY: StringField<EmpJob> = new StringField('workerCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workingDaysPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_DAYS_PER_WEEK: NumberField<EmpJob> = new NumberField('workingDaysPerWeek', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[workingTimeDirective]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_TIME_DIRECTIVE: BooleanField<EmpJob> = new BooleanField('workingTimeDirective', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[workscheduleCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKSCHEDULE_CODE: StringField<EmpJob> = new StringField('workscheduleCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[wtdHoursLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_HOURS_LIMIT: StringField<EmpJob> = new StringField('wtdHoursLimit', EmpJob, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpJob, EmpEmployment> = new OneToOneLink('employmentNav', EmpJob, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[managerEmploymentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_EMPLOYMENT_NAV: OneToOneLink<EmpJob, EmpEmployment> = new OneToOneLink('managerEmploymentNav', EmpJob, EmpEmployment);
  /**
   * All fields of the EmpJob entity.
   */
  export const _allFields: Array<BigNumberField<EmpJob> | StringField<EmpJob> | BooleanField<EmpJob> | DateField<EmpJob> | NumberField<EmpJob> | OneToOneLink<EmpJob, EmpEmployment>> = [
    EmpJob.ASSEDIC_CERT_INITIAL_STATE_NUM,
    EmpJob.ASSEDIC_CERT_OBJECT_NUM,
    EmpJob.BUSINESS_UNIT,
    EmpJob.CALC_METHOD_INDICATOR,
    EmpJob.COMMITMENT_INDICATOR,
    EmpJob.COMPANY,
    EmpJob.CONTRACT_REFERENCE_FOR_AED,
    EmpJob.CONTRACT_TYPE,
    EmpJob.COST_CENTER,
    EmpJob.COUNTRY_OF_COMPANY,
    EmpJob.CREATED_BY,
    EmpJob.CREATED_DATE_TIME,
    EmpJob.CREATED_ON,
    EmpJob.DEFAULT_OVERTIME_COMPENSATION_VARIANT,
    EmpJob.DEPARTMENT,
    EmpJob.DIVISION,
    EmpJob.EEO_1_JOB_CATEGORY,
    EmpJob.EEO_4_JOB_CATEGORY,
    EmpJob.EEO_5_JOB_CATEGORY,
    EmpJob.EEO_6_JOB_CATEGORY,
    EmpJob.EEO_CLASS,
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES,
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL,
    EmpJob.EMP_RELATIONSHIP,
    EmpJob.EMPL_STATUS,
    EmpJob.EMPLOYEE_CLASS,
    EmpJob.EMPLOYEE_WORKGROUP_MEMBERSHIP,
    EmpJob.EMPLOYMENT_TYPE,
    EmpJob.END_DATE,
    EmpJob.EVENT,
    EmpJob.EVENT_REASON,
    EmpJob.EXCL_EXECUTIVE_SECTOR,
    EmpJob.EXPECTED_RETURN_DATE,
    EmpJob.FAMILY_RELATIONSHIP_WITH_EMPLOYER,
    EmpJob.FGTS_DATE,
    EmpJob.FGTS_OPTANT,
    EmpJob.FGTS_PERCENT,
    EmpJob.FLSA_STATUS,
    EmpJob.FTE,
    EmpJob.HARMFUL_AGENT_EXPOSURE,
    EmpJob.HAZARD,
    EmpJob.HEALTH_RISK,
    EmpJob.HOLIDAY_CALENDAR_CODE,
    EmpJob.IS_COMPETITION_CLAUSE_ACTIVE,
    EmpJob.IS_FULLTIME_EMPLOYEE,
    EmpJob.IS_SIDE_LINE_JOB_ALLOWED,
    EmpJob.JOB_CODE,
    EmpJob.JOB_TITLE,
    EmpJob.LABOR_PROTECTION,
    EmpJob.LAST_MODIFIED_BY,
    EmpJob.LAST_MODIFIED_DATE_TIME,
    EmpJob.LAST_MODIFIED_ON,
    EmpJob.LOCATION,
    EmpJob.MANAGER_ID,
    EmpJob.MANDATORY_WORK_BREAK_RECORD,
    EmpJob.MUNICIPAL_INSEE_CODE,
    EmpJob.NOTES,
    EmpJob.OPERATION,
    EmpJob.PAY_GRADE,
    EmpJob.PAY_SCALE_AREA,
    EmpJob.PAY_SCALE_GROUP,
    EmpJob.PAY_SCALE_LEVEL,
    EmpJob.PAY_SCALE_TYPE,
    EmpJob.PCFM,
    EmpJob.PENSION_PROTECTION,
    EmpJob.PERMIT_INDICATOR,
    EmpJob.POSITION,
    EmpJob.POSITION_ENTRY_DATE,
    EmpJob.PROBATION_PERIOD_END_DATE,
    EmpJob.REGULAR_TEMP,
    EmpJob.RESIDENT_VOTE,
    EmpJob.RETIRED,
    EmpJob.SEQ_NUMBER,
    EmpJob.SICK_PAY_SUPPLEMENT,
    EmpJob.STANDARD_HOURS,
    EmpJob.START_DATE,
    EmpJob.TEACHERS_PENSION,
    EmpJob.TIME_RECORDING_ADMISSIBILITY_CODE,
    EmpJob.TIME_RECORDING_PROFILE_CODE,
    EmpJob.TIME_RECORDING_VARIANT,
    EmpJob.TIME_TYPE_PROFILE_CODE,
    EmpJob.TIMEZONE,
    EmpJob.TRAVEL_DISTANCE,
    EmpJob.TUPE_ORG_NUMBER,
    EmpJob.USER_ID,
    EmpJob.WORK_LOCATION,
    EmpJob.WORKER_CATEGORY,
    EmpJob.WORKING_DAYS_PER_WEEK,
    EmpJob.WORKING_TIME_DIRECTIVE,
    EmpJob.WORKSCHEDULE_CODE,
    EmpJob.WTD_HOURS_LIMIT,
    EmpJob.EMPLOYMENT_NAV,
    EmpJob.MANAGER_EMPLOYMENT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpJob> = new AllFields('*', EmpJob);
  /**
   * All key fields of the EmpJob entity.
   */
  export const _keyFields: Array<Selectable<EmpJob>> = [EmpJob.SEQ_NUMBER, EmpJob.START_DATE, EmpJob.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpJob.
   */
  export const _keys: { [keys: string]: Selectable<EmpJob> } = EmpJob._keyFields.reduce((acc: { [keys: string]: Selectable<EmpJob> }, field: Selectable<EmpJob>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
