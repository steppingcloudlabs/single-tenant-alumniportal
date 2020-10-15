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
export declare class EmpEmployment extends Entity implements EmpEmploymentType {
    /**
     * Technical entity name for EmpEmployment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpEmployment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    personIdExternal: string;
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
    userId: string;
    /**
     * One-to-many navigation property to the [[EmpJobRelationships]] entity.
     */
    empJobRelationshipNav: EmpJobRelationships[];
    /**
     * One-to-many navigation property to the [[EmpWorkPermit]] entity.
     */
    empWorkPermitNav: EmpWorkPermit[];
    /**
     * One-to-many navigation property to the [[EmpJob]] entity.
     */
    jobInfoNav: EmpJob[];
    /**
     * Returns an entity builder to construct instances `EmpEmployment`.
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    static builder(): EntityBuilderType<EmpEmployment, EmpEmploymentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpEmployment` entity type.
     * @returns A `EmpEmployment` request builder.
     */
    static requestBuilder(): EmpEmploymentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmployment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    static customField(fieldName: string): CustomField<EmpEmployment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace EmpEmployment {
    /**
     * Static representation of the [[stockEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_END_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[assignmentClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENT_CLASS: StringField<EmpEmployment>;
    /**
     * Static representation of the [[benefitsEligibilityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENEFITS_ELIGIBILITY_START_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[benefitsEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENEFITS_END_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[bonusPayExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BONUS_PAY_EXPIRATION_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpEmployment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpEmployment>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpEmployment>;
    /**
     * Static representation of the [[eligibleForSalContinuation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIGIBLE_FOR_SAL_CONTINUATION: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[eligibleForStock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIGIBLE_FOR_STOCK: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[employeeFirstEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_FIRST_EMPLOYMENT: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[firstDateWorked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_DATE_WORKED: DateField<EmpEmployment>;
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_ALL_RECORDS: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[initialOptionGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_OPTION_GRANT: NumberField<EmpEmployment>;
    /**
     * Static representation of the [[initialStockGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_STOCK_GRANT: NumberField<EmpEmployment>;
    /**
     * Static representation of the [[isContingentWorker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_CONTINGENT_WORKER: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[isEcRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EC_RECORD: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[jobNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_NUMBER: BigNumberField<EmpEmployment>;
    /**
     * Static representation of the [[lastDateWorked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_DATE_WORKED: DateField<EmpEmployment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpEmployment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpEmployment>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpEmployment>;
    /**
     * Static representation of the [[okToRehire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OK_TO_REHIRE: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[originalStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_START_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_END_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<EmpEmployment>;
    /**
     * Static representation of the [[prevEmployeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREV_EMPLOYEE_ID: StringField<EmpEmployment>;
    /**
     * Static representation of the [[professionalServiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFESSIONAL_SERVICE_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[regretTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGRET_TERMINATION: BooleanField<EmpEmployment>;
    /**
     * Static representation of the [[salaryEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_END_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[seniorityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SENIORITY_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpEmployment>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpEmployment>;
    /**
     * Static representation of the one-to-many navigation property [[empJobRelationshipNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_JOB_RELATIONSHIP_NAV: Link<EmpEmployment, EmpJobRelationships>;
    /**
     * Static representation of the one-to-many navigation property [[empWorkPermitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_WORK_PERMIT_NAV: Link<EmpEmployment, EmpWorkPermit>;
    /**
     * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_INFO_NAV: Link<EmpEmployment, EmpJob>;
    /**
     * All fields of the EmpEmployment entity.
     */
    const _allFields: Array<DateField<EmpEmployment> | StringField<EmpEmployment> | BooleanField<EmpEmployment> | NumberField<EmpEmployment> | BigNumberField<EmpEmployment> | Link<EmpEmployment, EmpJobRelationships> | Link<EmpEmployment, EmpWorkPermit> | Link<EmpEmployment, EmpJob>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpEmployment>;
    /**
     * All key fields of the EmpEmployment entity.
     */
    const _keyFields: Array<Selectable<EmpEmployment>>;
    /**
     * Mapping of all key field names to the respective static field property EmpEmployment.
     */
    const _keys: {
        [keys: string]: Selectable<EmpEmployment>;
    };
}
//# sourceMappingURL=EmpEmployment.d.ts.map