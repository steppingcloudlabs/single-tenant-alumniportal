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
var PerEmailRequestBuilder_1 = require("./PerEmailRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerEmail" of service "SFOData".
 */
var PerEmail = /** @class */ (function (_super) {
    __extends(PerEmail, _super);
    function PerEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerEmail`.
     * @returns A builder that constructs instances of entity type `PerEmail`.
     */
    PerEmail.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerEmail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerEmail` entity type.
     * @returns A `PerEmail` request builder.
     */
    PerEmail.requestBuilder = function () {
        return new PerEmailRequestBuilder_1.PerEmailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerEmail`.
     */
    PerEmail.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerEmail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerEmail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerEmail.
     */
    PerEmail._entityName = 'PerEmail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerEmail.
     */
    PerEmail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerEmail._defaultServicePath = '/odata/v2';
    return PerEmail;
}(cloud_sdk_core_1.Entity));
exports.PerEmail = PerEmail;
var PerPerson_1 = require("./PerPerson");
(function (PerEmail) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerEmail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerEmail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerEmail, 'Edm.DateTime');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.EMAIL_ADDRESS = new cloud_sdk_core_1.StringField('emailAddress', PerEmail, 'Edm.String');
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.EMAIL_TYPE = new cloud_sdk_core_1.StringField('emailType', PerEmail, 'Edm.String');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', PerEmail, 'Edm.Boolean');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.IS_PRIMARY = new cloud_sdk_core_1.BooleanField('isPrimary', PerEmail, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerEmail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerEmail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerEmail, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.OPERATION = new cloud_sdk_core_1.StringField('operation', PerEmail, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerEmail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmail.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerEmail, PerPerson_1.PerPerson);
    /**
     * All fields of the PerEmail entity.
     */
    PerEmail._allFields = [
        PerEmail.CREATED_BY,
        PerEmail.CREATED_DATE_TIME,
        PerEmail.CREATED_ON,
        PerEmail.EMAIL_ADDRESS,
        PerEmail.EMAIL_TYPE,
        PerEmail.INCLUDE_ALL_RECORDS,
        PerEmail.IS_PRIMARY,
        PerEmail.LAST_MODIFIED_BY,
        PerEmail.LAST_MODIFIED_DATE_TIME,
        PerEmail.LAST_MODIFIED_ON,
        PerEmail.OPERATION,
        PerEmail.PERSON_ID_EXTERNAL,
        PerEmail.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerEmail.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerEmail);
    /**
     * All key fields of the PerEmail entity.
     */
    PerEmail._keyFields = [PerEmail.EMAIL_TYPE, PerEmail.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PerEmail.
     */
    PerEmail._keys = PerEmail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerEmail = exports.PerEmail || (exports.PerEmail = {}));
exports.PerEmail = PerEmail;
//# sourceMappingURL=PerEmail.js.map