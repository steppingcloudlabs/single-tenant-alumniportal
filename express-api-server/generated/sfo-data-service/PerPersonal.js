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
var PerPersonalRequestBuilder_1 = require("./PerPersonalRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerPersonal" of service "SFOData".
 */
var PerPersonal = /** @class */ (function (_super) {
    __extends(PerPersonal, _super);
    function PerPersonal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerPersonal`.
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    PerPersonal.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerPersonal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerPersonal` entity type.
     * @returns A `PerPersonal` request builder.
     */
    PerPersonal.requestBuilder = function () {
        return new PerPersonalRequestBuilder_1.PerPersonalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    PerPersonal.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerPersonal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerPersonal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerPersonal.
     */
    PerPersonal._entityName = 'PerPersonal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPersonal.
     */
    PerPersonal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerPersonal._defaultServicePath = '/odata/v2';
    return PerPersonal;
}(cloud_sdk_core_1.Entity));
exports.PerPersonal = PerPersonal;
var PerPerson_1 = require("./PerPerson");
(function (PerPersonal) {
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.ATTACHMENT_ID = new cloud_sdk_core_1.StringField('attachmentId', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[businessFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.BUSINESS_FIRST_NAME = new cloud_sdk_core_1.StringField('businessFirstName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[businessLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.BUSINESS_LAST_NAME = new cloud_sdk_core_1.StringField('businessLastName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerPersonal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[displayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.DISPLAY_NAME = new cloud_sdk_core_1.StringField('displayName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.END_DATE = new cloud_sdk_core_1.DateField('endDate', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.FIRST_NAME = new cloud_sdk_core_1.StringField('firstName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.GENDER = new cloud_sdk_core_1.StringField('gender', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', PerPersonal, 'Edm.Boolean');
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.INITIALS = new cloud_sdk_core_1.StringField('initials', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerPersonal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_NAME = new cloud_sdk_core_1.StringField('lastName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[maritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.MARITAL_STATUS = new cloud_sdk_core_1.StringField('maritalStatus', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.MIDDLE_NAME = new cloud_sdk_core_1.StringField('middleName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.NATIONALITY = new cloud_sdk_core_1.StringField('nationality', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[nativePreferredLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.NATIVE_PREFERRED_LANG = new cloud_sdk_core_1.StringField('nativePreferredLang', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.OPERATION = new cloud_sdk_core_1.StringField('operation', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[preferredName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.PREFERRED_NAME = new cloud_sdk_core_1.StringField('preferredName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[salutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SALUTATION = new cloud_sdk_core_1.StringField('salutation', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[script]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SCRIPT = new cloud_sdk_core_1.StringField('script', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.START_DATE = new cloud_sdk_core_1.DateField('startDate', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.TITLE = new cloud_sdk_core_1.StringField('title', PerPersonal, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerPersonal, PerPerson_1.PerPerson);
    /**
     * All fields of the PerPersonal entity.
     */
    PerPersonal._allFields = [
        PerPersonal.ATTACHMENT_ID,
        PerPersonal.BUSINESS_FIRST_NAME,
        PerPersonal.BUSINESS_LAST_NAME,
        PerPersonal.CREATED_BY,
        PerPersonal.CREATED_DATE_TIME,
        PerPersonal.CREATED_ON,
        PerPersonal.DISPLAY_NAME,
        PerPersonal.END_DATE,
        PerPersonal.FIRST_NAME,
        PerPersonal.GENDER,
        PerPersonal.INCLUDE_ALL_RECORDS,
        PerPersonal.INITIALS,
        PerPersonal.LAST_MODIFIED_BY,
        PerPersonal.LAST_MODIFIED_DATE_TIME,
        PerPersonal.LAST_MODIFIED_ON,
        PerPersonal.LAST_NAME,
        PerPersonal.MARITAL_STATUS,
        PerPersonal.MIDDLE_NAME,
        PerPersonal.NATIONALITY,
        PerPersonal.NATIVE_PREFERRED_LANG,
        PerPersonal.OPERATION,
        PerPersonal.PERSON_ID_EXTERNAL,
        PerPersonal.PREFERRED_NAME,
        PerPersonal.SALUTATION,
        PerPersonal.SCRIPT,
        PerPersonal.START_DATE,
        PerPersonal.TITLE,
        PerPersonal.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerPersonal.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerPersonal);
    /**
     * All key fields of the PerPersonal entity.
     */
    PerPersonal._keyFields = [PerPersonal.PERSON_ID_EXTERNAL, PerPersonal.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerPersonal.
     */
    PerPersonal._keys = PerPersonal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerPersonal = exports.PerPersonal || (exports.PerPersonal = {}));
exports.PerPersonal = PerPersonal;
//# sourceMappingURL=PerPersonal.js.map