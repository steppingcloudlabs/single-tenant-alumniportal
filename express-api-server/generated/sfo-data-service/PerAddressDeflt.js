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
var PerAddressDefltRequestBuilder_1 = require("./PerAddressDefltRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerAddressDEFLT" of service "SFOData".
 */
var PerAddressDeflt = /** @class */ (function (_super) {
    __extends(PerAddressDeflt, _super);
    function PerAddressDeflt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerAddressDeflt`.
     * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
     */
    PerAddressDeflt.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerAddressDeflt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerAddressDeflt` entity type.
     * @returns A `PerAddressDeflt` request builder.
     */
    PerAddressDeflt.requestBuilder = function () {
        return new PerAddressDefltRequestBuilder_1.PerAddressDefltRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerAddressDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
     */
    PerAddressDeflt.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerAddressDeflt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerAddressDeflt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerAddressDeflt.
     */
    PerAddressDeflt._entityName = 'PerAddressDEFLT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerAddressDeflt.
     */
    PerAddressDeflt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerAddressDeflt._defaultServicePath = '/odata/v2';
    return PerAddressDeflt;
}(cloud_sdk_core_1.Entity));
exports.PerAddressDeflt = PerAddressDeflt;
var PerPerson_1 = require("./PerPerson");
(function (PerAddressDeflt) {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_1 = new cloud_sdk_core_1.StringField('address1', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_2 = new cloud_sdk_core_1.StringField('address2', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_3 = new cloud_sdk_core_1.StringField('address3', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_4 = new cloud_sdk_core_1.StringField('address4', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[address5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_5 = new cloud_sdk_core_1.StringField('address5', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ADDRESS_TYPE = new cloud_sdk_core_1.StringField('addressType', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.CITY = new cloud_sdk_core_1.StringField('city', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.COUNTRY = new cloud_sdk_core_1.StringField('country', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.COUNTY = new cloud_sdk_core_1.StringField('county', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[empUsersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.EMP_USERS_SYS_ID = new cloud_sdk_core_1.StringField('empUsersSysId', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.END_DATE = new cloud_sdk_core_1.DateField('endDate', PerAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', PerAddressDeflt, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerAddressDeflt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.NOTES = new cloud_sdk_core_1.StringField('notes', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.OPERATION = new cloud_sdk_core_1.StringField('operation', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.PROVINCE = new cloud_sdk_core_1.StringField('province', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.START_DATE = new cloud_sdk_core_1.DateField('startDate', PerAddressDeflt, 'Edm.DateTime');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.STATE = new cloud_sdk_core_1.StringField('state', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.ZIP_CODE = new cloud_sdk_core_1.StringField('zipCode', PerAddressDeflt, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerAddressDeflt.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerAddressDeflt, PerPerson_1.PerPerson);
    /**
     * All fields of the PerAddressDeflt entity.
     */
    PerAddressDeflt._allFields = [
        PerAddressDeflt.ADDRESS_1,
        PerAddressDeflt.ADDRESS_2,
        PerAddressDeflt.ADDRESS_3,
        PerAddressDeflt.ADDRESS_4,
        PerAddressDeflt.ADDRESS_5,
        PerAddressDeflt.ADDRESS_TYPE,
        PerAddressDeflt.CITY,
        PerAddressDeflt.COUNTRY,
        PerAddressDeflt.COUNTY,
        PerAddressDeflt.CREATED_BY,
        PerAddressDeflt.CREATED_DATE_TIME,
        PerAddressDeflt.CREATED_ON,
        PerAddressDeflt.EMP_USERS_SYS_ID,
        PerAddressDeflt.END_DATE,
        PerAddressDeflt.INCLUDE_ALL_RECORDS,
        PerAddressDeflt.LAST_MODIFIED_BY,
        PerAddressDeflt.LAST_MODIFIED_DATE_TIME,
        PerAddressDeflt.LAST_MODIFIED_ON,
        PerAddressDeflt.NOTES,
        PerAddressDeflt.OPERATION,
        PerAddressDeflt.PERSON_ID_EXTERNAL,
        PerAddressDeflt.PROVINCE,
        PerAddressDeflt.START_DATE,
        PerAddressDeflt.STATE,
        PerAddressDeflt.ZIP_CODE,
        PerAddressDeflt.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerAddressDeflt.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerAddressDeflt);
    /**
     * All key fields of the PerAddressDeflt entity.
     */
    PerAddressDeflt._keyFields = [PerAddressDeflt.ADDRESS_TYPE, PerAddressDeflt.PERSON_ID_EXTERNAL, PerAddressDeflt.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerAddressDeflt.
     */
    PerAddressDeflt._keys = PerAddressDeflt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerAddressDeflt = exports.PerAddressDeflt || (exports.PerAddressDeflt = {}));
exports.PerAddressDeflt = PerAddressDeflt;
//# sourceMappingURL=PerAddressDeflt.js.map