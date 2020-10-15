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
var PerPhoneRequestBuilder_1 = require("./PerPhoneRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerPhone" of service "SFOData".
 */
var PerPhone = /** @class */ (function (_super) {
    __extends(PerPhone, _super);
    function PerPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerPhone`.
     * @returns A builder that constructs instances of entity type `PerPhone`.
     */
    PerPhone.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerPhone);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerPhone` entity type.
     * @returns A `PerPhone` request builder.
     */
    PerPhone.requestBuilder = function () {
        return new PerPhoneRequestBuilder_1.PerPhoneRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPhone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPhone`.
     */
    PerPhone.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerPhone);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerPhone.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerPhone.
     */
    PerPhone._entityName = 'PerPhone';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPhone.
     */
    PerPhone._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerPhone._defaultServicePath = '/odata/v2';
    return PerPhone;
}(cloud_sdk_core_1.Entity));
exports.PerPhone = PerPhone;
var PerPerson_1 = require("./PerPerson");
(function (PerPhone) {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.AREA_CODE = new cloud_sdk_core_1.StringField('areaCode', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.COUNTRY_CODE = new cloud_sdk_core_1.StringField('countryCode', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerPhone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerPhone, 'Edm.DateTime');
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.EXTENSION = new cloud_sdk_core_1.StringField('extension', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', PerPhone, 'Edm.Boolean');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.IS_PRIMARY = new cloud_sdk_core_1.BooleanField('isPrimary', PerPhone, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerPhone, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerPhone, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.OPERATION = new cloud_sdk_core_1.StringField('operation', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.PHONE_NUMBER = new cloud_sdk_core_1.StringField('phoneNumber', PerPhone, 'Edm.String');
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.PHONE_TYPE = new cloud_sdk_core_1.StringField('phoneType', PerPhone, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPhone.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerPhone, PerPerson_1.PerPerson);
    /**
     * All fields of the PerPhone entity.
     */
    PerPhone._allFields = [
        PerPhone.AREA_CODE,
        PerPhone.COUNTRY_CODE,
        PerPhone.CREATED_BY,
        PerPhone.CREATED_DATE_TIME,
        PerPhone.CREATED_ON,
        PerPhone.EXTENSION,
        PerPhone.INCLUDE_ALL_RECORDS,
        PerPhone.IS_PRIMARY,
        PerPhone.LAST_MODIFIED_BY,
        PerPhone.LAST_MODIFIED_DATE_TIME,
        PerPhone.LAST_MODIFIED_ON,
        PerPhone.OPERATION,
        PerPhone.PERSON_ID_EXTERNAL,
        PerPhone.PHONE_NUMBER,
        PerPhone.PHONE_TYPE,
        PerPhone.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerPhone.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerPhone);
    /**
     * All key fields of the PerPhone entity.
     */
    PerPhone._keyFields = [PerPhone.PERSON_ID_EXTERNAL, PerPhone.PHONE_TYPE];
    /**
     * Mapping of all key field names to the respective static field property PerPhone.
     */
    PerPhone._keys = PerPhone._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerPhone = exports.PerPhone || (exports.PerPhone = {}));
exports.PerPhone = PerPhone;
//# sourceMappingURL=PerPhone.js.map