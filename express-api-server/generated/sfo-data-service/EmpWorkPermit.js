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
var EmpWorkPermitRequestBuilder_1 = require("./EmpWorkPermitRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EmpWorkPermit" of service "SFOData".
 */
var EmpWorkPermit = /** @class */ (function (_super) {
    __extends(EmpWorkPermit, _super);
    function EmpWorkPermit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpWorkPermit`.
     * @returns A builder that constructs instances of entity type `EmpWorkPermit`.
     */
    EmpWorkPermit.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EmpWorkPermit);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpWorkPermit` entity type.
     * @returns A `EmpWorkPermit` request builder.
     */
    EmpWorkPermit.requestBuilder = function () {
        return new EmpWorkPermitRequestBuilder_1.EmpWorkPermitRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpWorkPermit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpWorkPermit`.
     */
    EmpWorkPermit.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EmpWorkPermit);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpWorkPermit.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpWorkPermit.
     */
    EmpWorkPermit._entityName = 'EmpWorkPermit';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpWorkPermit.
     */
    EmpWorkPermit._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpWorkPermit._defaultServicePath = '/odata/v2';
    return EmpWorkPermit;
}(cloud_sdk_core_1.Entity));
exports.EmpWorkPermit = EmpWorkPermit;
var EmpEmployment_1 = require("./EmpEmployment");
(function (EmpWorkPermit) {
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT = new cloud_sdk_core_1.BinaryField('attachment', EmpWorkPermit, 'Edm.Binary');
    /**
     * Static representation of the [[attachmentFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_FILE_NAME = new cloud_sdk_core_1.StringField('attachmentFileName', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[attachmentFileSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_FILE_SIZE = new cloud_sdk_core_1.BigNumberField('attachmentFileSize', EmpWorkPermit, 'Edm.Decimal');
    /**
     * Static representation of the [[attachmentFileType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_FILE_TYPE = new cloud_sdk_core_1.StringField('attachmentFileType', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_ID = new cloud_sdk_core_1.StringField('attachmentId', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[attachmentMimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_MIME_TYPE = new cloud_sdk_core_1.StringField('attachmentMimeType', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[attachmentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ATTACHMENT_STATUS = new cloud_sdk_core_1.BigNumberField('attachmentStatus', EmpWorkPermit, 'Edm.Decimal');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.COUNTRY = new cloud_sdk_core_1.StringField('country', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', EmpWorkPermit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', EmpWorkPermit, 'Edm.DateTime');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.DOCUMENT_NUMBER = new cloud_sdk_core_1.StringField('documentNumber', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[documentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.DOCUMENT_TITLE = new cloud_sdk_core_1.StringField('documentTitle', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.DOCUMENT_TYPE = new cloud_sdk_core_1.StringField('documentType', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.EXPIRATION_DATE = new cloud_sdk_core_1.DateField('expirationDate', EmpWorkPermit, 'Edm.DateTime');
    /**
     * Static representation of the [[isValidated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.IS_VALIDATED = new cloud_sdk_core_1.BooleanField('isValidated', EmpWorkPermit, 'Edm.Boolean');
    /**
     * Static representation of the [[issueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ISSUE_DATE = new cloud_sdk_core_1.DateField('issueDate', EmpWorkPermit, 'Edm.DateTime');
    /**
     * Static representation of the [[issuePlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ISSUE_PLACE = new cloud_sdk_core_1.StringField('issuePlace', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[issuingAuthority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.ISSUING_AUTHORITY = new cloud_sdk_core_1.StringField('issuingAuthority', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', EmpWorkPermit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', EmpWorkPermit, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.NOTES = new cloud_sdk_core_1.StringField('notes', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.USER_ID = new cloud_sdk_core_1.StringField('userId', EmpWorkPermit, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWorkPermit.EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('employmentNav', EmpWorkPermit, EmpEmployment_1.EmpEmployment);
    /**
     * All fields of the EmpWorkPermit entity.
     */
    EmpWorkPermit._allFields = [
        EmpWorkPermit.ATTACHMENT,
        EmpWorkPermit.ATTACHMENT_FILE_NAME,
        EmpWorkPermit.ATTACHMENT_FILE_SIZE,
        EmpWorkPermit.ATTACHMENT_FILE_TYPE,
        EmpWorkPermit.ATTACHMENT_ID,
        EmpWorkPermit.ATTACHMENT_MIME_TYPE,
        EmpWorkPermit.ATTACHMENT_STATUS,
        EmpWorkPermit.COUNTRY,
        EmpWorkPermit.CREATED_BY,
        EmpWorkPermit.CREATED_DATE_TIME,
        EmpWorkPermit.CREATED_ON,
        EmpWorkPermit.DOCUMENT_NUMBER,
        EmpWorkPermit.DOCUMENT_TITLE,
        EmpWorkPermit.DOCUMENT_TYPE,
        EmpWorkPermit.EXPIRATION_DATE,
        EmpWorkPermit.IS_VALIDATED,
        EmpWorkPermit.ISSUE_DATE,
        EmpWorkPermit.ISSUE_PLACE,
        EmpWorkPermit.ISSUING_AUTHORITY,
        EmpWorkPermit.LAST_MODIFIED_BY,
        EmpWorkPermit.LAST_MODIFIED_DATE_TIME,
        EmpWorkPermit.LAST_MODIFIED_ON,
        EmpWorkPermit.NOTES,
        EmpWorkPermit.USER_ID,
        EmpWorkPermit.EMPLOYMENT_NAV
    ];
    /**
     * All fields selector.
     */
    EmpWorkPermit.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EmpWorkPermit);
    /**
     * All key fields of the EmpWorkPermit entity.
     */
    EmpWorkPermit._keyFields = [EmpWorkPermit.COUNTRY, EmpWorkPermit.DOCUMENT_NUMBER, EmpWorkPermit.DOCUMENT_TYPE, EmpWorkPermit.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpWorkPermit.
     */
    EmpWorkPermit._keys = EmpWorkPermit._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpWorkPermit = exports.EmpWorkPermit || (exports.EmpWorkPermit = {}));
exports.EmpWorkPermit = EmpWorkPermit;
//# sourceMappingURL=EmpWorkPermit.js.map