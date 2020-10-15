"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmpJobRequestBuilder_1 = require("./EmpJobRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EmpJob" of service "SFOData".
 */
var EmpJob = /** @class */ (function (_super) {
    __extends(EmpJob, _super);
    function EmpJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpJob`.
     * @returns A builder that constructs instances of entity type `EmpJob`.
     */
    EmpJob.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EmpJob);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpJob` entity type.
     * @returns A `EmpJob` request builder.
     */
    EmpJob.requestBuilder = function () {
        return new EmpJobRequestBuilder_1.EmpJobRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJob`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpJob`.
     */
    EmpJob.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EmpJob);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpJob.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpJob.
     */
    EmpJob._entityName = 'EmpJob';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpJob.
     */
    EmpJob._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpJob._defaultServicePath = '/odata/v2';
    return EmpJob;
}(cloud_sdk_core_1.Entity));
exports.EmpJob = EmpJob;
var EmpEmployment_1 = require("./EmpEmployment");
(function (EmpJob) {
    /**
     * Static representation of the [[assedicCertInitialStateNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ASSEDIC_CERT_INITIAL_STATE_NUM = new cloud_sdk_core_1.BigNumberField('assedicCertInitialStateNum', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[assedicCertObjectNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ASSEDIC_CERT_OBJECT_NUM = new cloud_sdk_core_1.BigNumberField('assedicCertObjectNum', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.BUSINESS_UNIT = new cloud_sdk_core_1.StringField('businessUnit', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[calcMethodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CALC_METHOD_INDICATOR = new cloud_sdk_core_1.BooleanField('calcMethodIndicator', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[commitmentIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMMITMENT_INDICATOR = new cloud_sdk_core_1.StringField('commitmentIndicator', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COMPANY = new cloud_sdk_core_1.StringField('company', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[contractReferenceForAed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_REFERENCE_FOR_AED = new cloud_sdk_core_1.StringField('contractReferenceForAed', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CONTRACT_TYPE = new cloud_sdk_core_1.StringField('contractType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COST_CENTER = new cloud_sdk_core_1.StringField('costCenter', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[countryOfCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.COUNTRY_OF_COMPANY = new cloud_sdk_core_1.StringField('countryOfCompany', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', EmpJob, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[defaultOvertimeCompensationVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DEFAULT_OVERTIME_COMPENSATION_VARIANT = new cloud_sdk_core_1.StringField('defaultOvertimeCompensationVariant', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DEPARTMENT = new cloud_sdk_core_1.StringField('department', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.DIVISION = new cloud_sdk_core_1.StringField('division', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo1JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_1_JOB_CATEGORY = new cloud_sdk_core_1.StringField('eeo1JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo4JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_4_JOB_CATEGORY = new cloud_sdk_core_1.StringField('eeo4JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo5JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_5_JOB_CATEGORY = new cloud_sdk_core_1.StringField('eeo5JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeo6JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_6_JOB_CATEGORY = new cloud_sdk_core_1.StringField('eeo6JobCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eeoClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EEO_CLASS = new cloud_sdk_core_1.StringField('eeoClass', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[electoralCollegeForWorkersRepresentatives]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES = new cloud_sdk_core_1.StringField('electoralCollegeForWorkersRepresentatives', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[electoralCollegeForWorksCouncil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL = new cloud_sdk_core_1.StringField('electoralCollegeForWorksCouncil', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[empRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMP_RELATIONSHIP = new cloud_sdk_core_1.StringField('empRelationship', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[emplStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPL_STATUS = new cloud_sdk_core_1.StringField('emplStatus', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[employeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYEE_CLASS = new cloud_sdk_core_1.StringField('employeeClass', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[employeeWorkgroupMembership]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYEE_WORKGROUP_MEMBERSHIP = new cloud_sdk_core_1.StringField('employeeWorkgroupMembership', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[employmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYMENT_TYPE = new cloud_sdk_core_1.StringField('employmentType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.END_DATE = new cloud_sdk_core_1.DateField('endDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT = new cloud_sdk_core_1.StringField('event', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EVENT_REASON = new cloud_sdk_core_1.StringField('eventReason', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[exclExecutiveSector]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EXCL_EXECUTIVE_SECTOR = new cloud_sdk_core_1.BooleanField('exclExecutiveSector', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[expectedReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EXPECTED_RETURN_DATE = new cloud_sdk_core_1.DateField('expectedReturnDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[familyRelationshipWithEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FAMILY_RELATIONSHIP_WITH_EMPLOYER = new cloud_sdk_core_1.StringField('familyRelationshipWithEmployer', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[fgtsDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_DATE = new cloud_sdk_core_1.DateField('fgtsDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[fgtsOptant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_OPTANT = new cloud_sdk_core_1.BooleanField('fgtsOptant', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[fgtsPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FGTS_PERCENT = new cloud_sdk_core_1.NumberField('fgtsPercent', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[flsaStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FLSA_STATUS = new cloud_sdk_core_1.StringField('flsaStatus', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[fte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.FTE = new cloud_sdk_core_1.NumberField('fte', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[harmfulAgentExposure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HARMFUL_AGENT_EXPOSURE = new cloud_sdk_core_1.StringField('harmfulAgentExposure', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[hazard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HAZARD = new cloud_sdk_core_1.BooleanField('hazard', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[healthRisk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HEALTH_RISK = new cloud_sdk_core_1.BooleanField('healthRisk', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[holidayCalendarCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.HOLIDAY_CALENDAR_CODE = new cloud_sdk_core_1.StringField('holidayCalendarCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[isCompetitionClauseActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.IS_COMPETITION_CLAUSE_ACTIVE = new cloud_sdk_core_1.BooleanField('isCompetitionClauseActive', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[isFulltimeEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.IS_FULLTIME_EMPLOYEE = new cloud_sdk_core_1.BooleanField('isFulltimeEmployee', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[isSideLineJobAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.IS_SIDE_LINE_JOB_ALLOWED = new cloud_sdk_core_1.BooleanField('isSideLineJobAllowed', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.JOB_CODE = new cloud_sdk_core_1.StringField('jobCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.JOB_TITLE = new cloud_sdk_core_1.StringField('jobTitle', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[laborProtection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LABOR_PROTECTION = new cloud_sdk_core_1.BooleanField('laborProtection', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', EmpJob, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.LOCATION = new cloud_sdk_core_1.StringField('location', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[managerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANAGER_ID = new cloud_sdk_core_1.StringField('managerId', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[mandatoryWorkBreakRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANDATORY_WORK_BREAK_RECORD = new cloud_sdk_core_1.BigNumberField('mandatoryWorkBreakRecord', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[municipalInseeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MUNICIPAL_INSEE_CODE = new cloud_sdk_core_1.BigNumberField('municipalInseeCode', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.NOTES = new cloud_sdk_core_1.StringField('notes', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.OPERATION = new cloud_sdk_core_1.StringField('operation', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_GRADE = new cloud_sdk_core_1.StringField('payGrade', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_AREA = new cloud_sdk_core_1.StringField('payScaleArea', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_GROUP = new cloud_sdk_core_1.StringField('payScaleGroup', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_LEVEL = new cloud_sdk_core_1.StringField('payScaleLevel', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[payScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PAY_SCALE_TYPE = new cloud_sdk_core_1.StringField('payScaleType', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[pcfm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PCFM = new cloud_sdk_core_1.BooleanField('pcfm', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[pensionProtection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PENSION_PROTECTION = new cloud_sdk_core_1.BooleanField('pensionProtection', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[permitIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PERMIT_INDICATOR = new cloud_sdk_core_1.BooleanField('permitIndicator', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.POSITION = new cloud_sdk_core_1.StringField('position', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[positionEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.POSITION_ENTRY_DATE = new cloud_sdk_core_1.DateField('positionEntryDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[probationPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.PROBATION_PERIOD_END_DATE = new cloud_sdk_core_1.DateField('probationPeriodEndDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[regularTemp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.REGULAR_TEMP = new cloud_sdk_core_1.StringField('regularTemp', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[residentVote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.RESIDENT_VOTE = new cloud_sdk_core_1.BooleanField('residentVote', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[retired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.RETIRED = new cloud_sdk_core_1.BooleanField('retired', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.SEQ_NUMBER = new cloud_sdk_core_1.BigNumberField('seqNumber', EmpJob, 'Edm.Int64');
    /**
     * Static representation of the [[sickPaySupplement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.SICK_PAY_SUPPLEMENT = new cloud_sdk_core_1.StringField('sickPaySupplement', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.STANDARD_HOURS = new cloud_sdk_core_1.NumberField('standardHours', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.START_DATE = new cloud_sdk_core_1.DateField('startDate', EmpJob, 'Edm.DateTime');
    /**
     * Static representation of the [[teachersPension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TEACHERS_PENSION = new cloud_sdk_core_1.BooleanField('teachersPension', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[timeRecordingAdmissibilityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_RECORDING_ADMISSIBILITY_CODE = new cloud_sdk_core_1.StringField('timeRecordingAdmissibilityCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[timeRecordingProfileCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_RECORDING_PROFILE_CODE = new cloud_sdk_core_1.StringField('timeRecordingProfileCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_RECORDING_VARIANT = new cloud_sdk_core_1.StringField('timeRecordingVariant', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[timeTypeProfileCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIME_TYPE_PROFILE_CODE = new cloud_sdk_core_1.StringField('timeTypeProfileCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[timezone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TIMEZONE = new cloud_sdk_core_1.StringField('timezone', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[travelDistance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TRAVEL_DISTANCE = new cloud_sdk_core_1.NumberField('travelDistance', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[tupeOrgNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.TUPE_ORG_NUMBER = new cloud_sdk_core_1.StringField('tupeOrgNumber', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.USER_ID = new cloud_sdk_core_1.StringField('userId', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORK_LOCATION = new cloud_sdk_core_1.StringField('workLocation', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKER_CATEGORY = new cloud_sdk_core_1.StringField('workerCategory', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[workingDaysPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKING_DAYS_PER_WEEK = new cloud_sdk_core_1.NumberField('workingDaysPerWeek', EmpJob, 'Edm.Double');
    /**
     * Static representation of the [[workingTimeDirective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKING_TIME_DIRECTIVE = new cloud_sdk_core_1.BooleanField('workingTimeDirective', EmpJob, 'Edm.Boolean');
    /**
     * Static representation of the [[workscheduleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WORKSCHEDULE_CODE = new cloud_sdk_core_1.StringField('workscheduleCode', EmpJob, 'Edm.String');
    /**
     * Static representation of the [[wtdHoursLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.WTD_HOURS_LIMIT = new cloud_sdk_core_1.StringField('wtdHoursLimit', EmpJob, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('employmentNav', EmpJob, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[managerEmploymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJob.MANAGER_EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('managerEmploymentNav', EmpJob, EmpEmployment_1.EmpEmployment);
    /**
     * All fields of the EmpJob entity.
     */
    EmpJob._allFields = [
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
    EmpJob.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EmpJob);
    /**
     * All key fields of the EmpJob entity.
     */
    EmpJob._keyFields = [EmpJob.SEQ_NUMBER, EmpJob.START_DATE, EmpJob.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpJob.
     */
    EmpJob._keys = EmpJob._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpJob = exports.EmpJob || (exports.EmpJob = {}));
exports.EmpJob = EmpJob;
//# sourceMappingURL=EmpJob.js.map