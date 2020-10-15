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
var EmpEmploymentRequestBuilder_1 = require("./EmpEmploymentRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EmpEmployment" of service "SFOData".
 */
var EmpEmployment = /** @class */ (function (_super) {
    __extends(EmpEmployment, _super);
    function EmpEmployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpEmployment`.
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    EmpEmployment.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EmpEmployment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpEmployment` entity type.
     * @returns A `EmpEmployment` request builder.
     */
    EmpEmployment.requestBuilder = function () {
        return new EmpEmploymentRequestBuilder_1.EmpEmploymentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmployment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpEmployment`.
     */
    EmpEmployment.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EmpEmployment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpEmployment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpEmployment.
     */
    EmpEmployment._entityName = 'EmpEmployment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpEmployment.
     */
    EmpEmployment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpEmployment._defaultServicePath = '/odata/v2';
    return EmpEmployment;
}(cloud_sdk_core_1.Entity));
exports.EmpEmployment = EmpEmployment;
var EmpJobRelationships_1 = require("./EmpJobRelationships");
var EmpWorkPermit_1 = require("./EmpWorkPermit");
var EmpJob_1 = require("./EmpJob");
(function (EmpEmployment) {
    /**
     * Static representation of the [[stockEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.STOCK_END_DATE = new cloud_sdk_core_1.DateField('StockEndDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[assignmentClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ASSIGNMENT_CLASS = new cloud_sdk_core_1.StringField('assignmentClass', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[benefitsEligibilityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.BENEFITS_ELIGIBILITY_START_DATE = new cloud_sdk_core_1.DateField('benefitsEligibilityStartDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[benefitsEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.BENEFITS_END_DATE = new cloud_sdk_core_1.DateField('benefitsEndDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[bonusPayExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.BONUS_PAY_EXPIRATION_DATE = new cloud_sdk_core_1.DateField('bonusPayExpirationDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', EmpEmployment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[eligibleForSalContinuation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ELIGIBLE_FOR_SAL_CONTINUATION = new cloud_sdk_core_1.BooleanField('eligibleForSalContinuation', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[eligibleForStock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ELIGIBLE_FOR_STOCK = new cloud_sdk_core_1.BooleanField('eligibleForStock', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[employeeFirstEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMPLOYEE_FIRST_EMPLOYMENT = new cloud_sdk_core_1.BooleanField('employeeFirstEmployment', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.END_DATE = new cloud_sdk_core_1.DateField('endDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[firstDateWorked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.FIRST_DATE_WORKED = new cloud_sdk_core_1.DateField('firstDateWorked', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[initialOptionGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.INITIAL_OPTION_GRANT = new cloud_sdk_core_1.NumberField('initialOptionGrant', EmpEmployment, 'Edm.Double');
    /**
     * Static representation of the [[initialStockGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.INITIAL_STOCK_GRANT = new cloud_sdk_core_1.NumberField('initialStockGrant', EmpEmployment, 'Edm.Double');
    /**
     * Static representation of the [[isContingentWorker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.IS_CONTINGENT_WORKER = new cloud_sdk_core_1.BooleanField('isContingentWorker', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[isEcRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.IS_EC_RECORD = new cloud_sdk_core_1.BooleanField('isECRecord', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[jobNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.JOB_NUMBER = new cloud_sdk_core_1.BigNumberField('jobNumber', EmpEmployment, 'Edm.Int64');
    /**
     * Static representation of the [[lastDateWorked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_DATE_WORKED = new cloud_sdk_core_1.DateField('lastDateWorked', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', EmpEmployment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[okToRehire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.OK_TO_REHIRE = new cloud_sdk_core_1.BooleanField('okToRehire', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[originalStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.ORIGINAL_START_DATE = new cloud_sdk_core_1.DateField('originalStartDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PAYROLL_END_DATE = new cloud_sdk_core_1.DateField('payrollEndDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[prevEmployeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PREV_EMPLOYEE_ID = new cloud_sdk_core_1.StringField('prevEmployeeId', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the [[professionalServiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.PROFESSIONAL_SERVICE_DATE = new cloud_sdk_core_1.DateField('professionalServiceDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[regretTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.REGRET_TERMINATION = new cloud_sdk_core_1.BooleanField('regretTermination', EmpEmployment, 'Edm.Boolean');
    /**
     * Static representation of the [[salaryEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.SALARY_END_DATE = new cloud_sdk_core_1.DateField('salaryEndDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[seniorityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.SENIORITY_DATE = new cloud_sdk_core_1.DateField('seniorityDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.SERVICE_DATE = new cloud_sdk_core_1.DateField('serviceDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.START_DATE = new cloud_sdk_core_1.DateField('startDate', EmpEmployment, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.USER_ID = new cloud_sdk_core_1.StringField('userId', EmpEmployment, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[empJobRelationshipNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_JOB_RELATIONSHIP_NAV = new cloud_sdk_core_1.Link('empJobRelationshipNav', EmpEmployment, EmpJobRelationships_1.EmpJobRelationships);
    /**
     * Static representation of the one-to-many navigation property [[empWorkPermitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.EMP_WORK_PERMIT_NAV = new cloud_sdk_core_1.Link('empWorkPermitNav', EmpEmployment, EmpWorkPermit_1.EmpWorkPermit);
    /**
     * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmployment.JOB_INFO_NAV = new cloud_sdk_core_1.Link('jobInfoNav', EmpEmployment, EmpJob_1.EmpJob);
    /**
     * All fields of the EmpEmployment entity.
     */
    EmpEmployment._allFields = [
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
    EmpEmployment.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EmpEmployment);
    /**
     * All key fields of the EmpEmployment entity.
     */
    EmpEmployment._keyFields = [EmpEmployment.PERSON_ID_EXTERNAL, EmpEmployment.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpEmployment.
     */
    EmpEmployment._keys = EmpEmployment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpEmployment = exports.EmpEmployment || (exports.EmpEmployment = {}));
exports.EmpEmployment = EmpEmployment;
//# sourceMappingURL=EmpEmployment.js.map