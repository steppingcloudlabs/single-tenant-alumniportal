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
var EmpEmploymentTerminationRequestBuilder_1 = require("./EmpEmploymentTerminationRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EmpEmploymentTermination" of service "SFOData".
 */
var EmpEmploymentTermination = /** @class */ (function (_super) {
    __extends(EmpEmploymentTermination, _super);
    function EmpEmploymentTermination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpEmploymentTermination`.
     * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
     */
    EmpEmploymentTermination.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EmpEmploymentTermination);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpEmploymentTermination` entity type.
     * @returns A `EmpEmploymentTermination` request builder.
     */
    EmpEmploymentTermination.requestBuilder = function () {
        return new EmpEmploymentTerminationRequestBuilder_1.EmpEmploymentTerminationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmploymentTermination`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
     */
    EmpEmploymentTermination.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EmpEmploymentTermination);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpEmploymentTermination.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpEmploymentTermination.
     */
    EmpEmploymentTermination._entityName = 'EmpEmploymentTermination';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpEmploymentTermination.
     */
    EmpEmploymentTermination._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpEmploymentTermination._defaultServicePath = '/odata/v2';
    return EmpEmploymentTermination;
}(cloud_sdk_core_1.Entity));
exports.EmpEmploymentTermination = EmpEmploymentTermination;
var EmpEmployment_1 = require("./EmpEmployment");
var EmpJob_1 = require("./EmpJob");
(function (EmpEmploymentTermination) {
    /**
     * Static representation of the [[stockEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.STOCK_END_DATE = new cloud_sdk_core_1.DateField('StockEndDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.ATTACHMENT_ID = new cloud_sdk_core_1.StringField('attachmentId', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[benefitsEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.BENEFITS_END_DATE = new cloud_sdk_core_1.DateField('benefitsEndDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[bonusPayExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.BONUS_PAY_EXPIRATION_DATE = new cloud_sdk_core_1.DateField('bonusPayExpirationDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', EmpEmploymentTermination, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[eligibleForSalContinuation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.ELIGIBLE_FOR_SAL_CONTINUATION = new cloud_sdk_core_1.BooleanField('eligibleForSalContinuation', EmpEmploymentTermination, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.END_DATE = new cloud_sdk_core_1.DateField('endDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.EVENT_REASON = new cloud_sdk_core_1.StringField('eventReason', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[lastDateWorked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.LAST_DATE_WORKED = new cloud_sdk_core_1.DateField('lastDateWorked', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', EmpEmploymentTermination, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[newMainEmploymentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.NEW_MAIN_EMPLOYMENT_ID = new cloud_sdk_core_1.BigNumberField('newMainEmploymentId', EmpEmploymentTermination, 'Edm.Decimal');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.NOTES = new cloud_sdk_core_1.StringField('notes', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[okToRehire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.OK_TO_REHIRE = new cloud_sdk_core_1.BooleanField('okToRehire', EmpEmploymentTermination, 'Edm.Boolean');
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.PAYROLL_END_DATE = new cloud_sdk_core_1.DateField('payrollEndDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the [[regretTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.REGRET_TERMINATION = new cloud_sdk_core_1.BooleanField('regretTermination', EmpEmploymentTermination, 'Edm.Boolean');
    /**
     * Static representation of the [[salaryEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.SALARY_END_DATE = new cloud_sdk_core_1.DateField('salaryEndDate', EmpEmploymentTermination, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.USER_ID = new cloud_sdk_core_1.StringField('userId', EmpEmploymentTermination, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('employmentNav', EmpEmploymentTermination, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpEmploymentTermination.JOB_INFO_NAV = new cloud_sdk_core_1.OneToOneLink('jobInfoNav', EmpEmploymentTermination, EmpJob_1.EmpJob);
    /**
     * All fields of the EmpEmploymentTermination entity.
     */
    EmpEmploymentTermination._allFields = [
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
    EmpEmploymentTermination.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EmpEmploymentTermination);
    /**
     * All key fields of the EmpEmploymentTermination entity.
     */
    EmpEmploymentTermination._keyFields = [EmpEmploymentTermination.END_DATE, EmpEmploymentTermination.PERSON_ID_EXTERNAL, EmpEmploymentTermination.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpEmploymentTermination.
     */
    EmpEmploymentTermination._keys = EmpEmploymentTermination._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpEmploymentTermination = exports.EmpEmploymentTermination || (exports.EmpEmploymentTermination = {}));
exports.EmpEmploymentTermination = EmpEmploymentTermination;
//# sourceMappingURL=EmpEmploymentTermination.js.map