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
var PerPersonRequestBuilder_1 = require("./PerPersonRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerPerson" of service "SFOData".
 */
var PerPerson = /** @class */ (function (_super) {
    __extends(PerPerson, _super);
    function PerPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerPerson`.
     * @returns A builder that constructs instances of entity type `PerPerson`.
     */
    PerPerson.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerPerson);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerPerson` entity type.
     * @returns A `PerPerson` request builder.
     */
    PerPerson.requestBuilder = function () {
        return new PerPersonRequestBuilder_1.PerPersonRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPerson`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPerson`.
     */
    PerPerson.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerPerson);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerPerson.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerPerson.
     */
    PerPerson._entityName = 'PerPerson';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPerson.
     */
    PerPerson._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerPerson._defaultServicePath = '/odata/v2';
    return PerPerson;
}(cloud_sdk_core_1.Entity));
exports.PerPerson = PerPerson;
var PerEmail_1 = require("./PerEmail");
var PerEmergencyContacts_1 = require("./PerEmergencyContacts");
var PerAddressDeflt_1 = require("./PerAddressDeflt");
var PerNationalId_1 = require("./PerNationalId");
var PerPersonRelationship_1 = require("./PerPersonRelationship");
var PerPersonal_1 = require("./PerPersonal");
var PerPhone_1 = require("./PerPhone");
var PerSocialAccount_1 = require("./PerSocialAccount");
(function (PerPerson) {
    /**
     * Static representation of the [[birthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.BIRTH_NAME = new cloud_sdk_core_1.StringField('birthName', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[countryOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.COUNTRY_OF_BIRTH = new cloud_sdk_core_1.StringField('countryOfBirth', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerPerson, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerPerson, 'Edm.DateTime');
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.DATE_OF_BIRTH = new cloud_sdk_core_1.DateField('dateOfBirth', PerPerson, 'Edm.DateTime');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.INCLUDE_ALL_RECORDS = new cloud_sdk_core_1.BooleanField('includeAllRecords', PerPerson, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerPerson, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerPerson, 'Edm.DateTime');
    /**
     * Static representation of the [[perPersonUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PER_PERSON_UUID = new cloud_sdk_core_1.StringField('perPersonUuid', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PERSON_ID = new cloud_sdk_core_1.BigNumberField('personId', PerPerson, 'Edm.Int64');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[regionOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.REGION_OF_BIRTH = new cloud_sdk_core_1.StringField('regionOfBirth', PerPerson, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.USER_ID = new cloud_sdk_core_1.StringField('userId', PerPerson, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[emailNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.EMAIL_NAV = new cloud_sdk_core_1.Link('emailNav', PerPerson, PerEmail_1.PerEmail);
    /**
     * Static representation of the one-to-many navigation property [[emergencyContactNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.EMERGENCY_CONTACT_NAV = new cloud_sdk_core_1.Link('emergencyContactNav', PerPerson, PerEmergencyContacts_1.PerEmergencyContacts);
    /**
     * Static representation of the one-to-many navigation property [[homeAddressNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.HOME_ADDRESS_NAV_DEFLT = new cloud_sdk_core_1.Link('homeAddressNavDEFLT', PerPerson, PerAddressDeflt_1.PerAddressDeflt);
    /**
     * Static representation of the one-to-many navigation property [[nationalIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.NATIONAL_ID_NAV = new cloud_sdk_core_1.Link('nationalIdNav', PerPerson, PerNationalId_1.PerNationalId);
    /**
     * Static representation of the one-to-many navigation property [[personRerlationshipNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PERSON_RERLATIONSHIP_NAV = new cloud_sdk_core_1.Link('personRerlationshipNav', PerPerson, PerPersonRelationship_1.PerPersonRelationship);
    /**
     * Static representation of the one-to-many navigation property [[personalInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PERSONAL_INFO_NAV = new cloud_sdk_core_1.Link('personalInfoNav', PerPerson, PerPersonal_1.PerPersonal);
    /**
     * Static representation of the one-to-many navigation property [[phoneNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.PHONE_NAV = new cloud_sdk_core_1.Link('phoneNav', PerPerson, PerPhone_1.PerPhone);
    /**
     * Static representation of the one-to-many navigation property [[socialAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPerson.SOCIAL_ACCOUNT_NAV = new cloud_sdk_core_1.Link('socialAccountNav', PerPerson, PerSocialAccount_1.PerSocialAccount);
    /**
     * All fields of the PerPerson entity.
     */
    PerPerson._allFields = [
        PerPerson.BIRTH_NAME,
        PerPerson.COUNTRY_OF_BIRTH,
        PerPerson.CREATED_BY,
        PerPerson.CREATED_DATE_TIME,
        PerPerson.CREATED_ON,
        PerPerson.DATE_OF_BIRTH,
        PerPerson.INCLUDE_ALL_RECORDS,
        PerPerson.LAST_MODIFIED_BY,
        PerPerson.LAST_MODIFIED_DATE_TIME,
        PerPerson.LAST_MODIFIED_ON,
        PerPerson.PER_PERSON_UUID,
        PerPerson.PERSON_ID,
        PerPerson.PERSON_ID_EXTERNAL,
        PerPerson.REGION_OF_BIRTH,
        PerPerson.USER_ID,
        PerPerson.EMAIL_NAV,
        PerPerson.EMERGENCY_CONTACT_NAV,
        PerPerson.HOME_ADDRESS_NAV_DEFLT,
        PerPerson.NATIONAL_ID_NAV,
        PerPerson.PERSON_RERLATIONSHIP_NAV,
        PerPerson.PERSONAL_INFO_NAV,
        PerPerson.PHONE_NAV,
        PerPerson.SOCIAL_ACCOUNT_NAV
    ];
    /**
     * All fields selector.
     */
    PerPerson.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerPerson);
    /**
     * All key fields of the PerPerson entity.
     */
    PerPerson._keyFields = [PerPerson.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PerPerson.
     */
    PerPerson._keys = PerPerson._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerPerson = exports.PerPerson || (exports.PerPerson = {}));
exports.PerPerson = PerPerson;
//# sourceMappingURL=PerPerson.js.map