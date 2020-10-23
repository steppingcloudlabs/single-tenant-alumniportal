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
var PerEmergencyContactsRequestBuilder_1 = require("./PerEmergencyContactsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerEmergencyContacts" of service "SFOData".
 */
var PerEmergencyContacts = /** @class */ (function (_super) {
    __extends(PerEmergencyContacts, _super);
    function PerEmergencyContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerEmergencyContacts`.
     * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
     */
    PerEmergencyContacts.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerEmergencyContacts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerEmergencyContacts` entity type.
     * @returns A `PerEmergencyContacts` request builder.
     */
    PerEmergencyContacts.requestBuilder = function () {
        return new PerEmergencyContactsRequestBuilder_1.PerEmergencyContactsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmergencyContacts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
     */
    PerEmergencyContacts.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerEmergencyContacts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerEmergencyContacts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerEmergencyContacts.
     */
    PerEmergencyContacts._entityName = 'PerEmergencyContacts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerEmergencyContacts.
     */
    PerEmergencyContacts._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerEmergencyContacts._defaultServicePath = '/odata/v2';
    return PerEmergencyContacts;
}(cloud_sdk_core_1.Entity));
exports.PerEmergencyContacts = PerEmergencyContacts;
var HrisEmergencyContactAddressDeflt_1 = require("./HrisEmergencyContactAddressDeflt");
var PerPerson_1 = require("./PerPerson");
(function (PerEmergencyContacts) {
    /**
     * Static representation of the [[addressAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_ADDRESS_1 = new cloud_sdk_core_1.StringField('addressAddress1', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_ADDRESS_2 = new cloud_sdk_core_1.StringField('addressAddress2', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_ADDRESS_3 = new cloud_sdk_core_1.StringField('addressAddress3', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_CITY = new cloud_sdk_core_1.StringField('addressCity', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_COUNTRY = new cloud_sdk_core_1.StringField('addressCountry', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_COUNTY = new cloud_sdk_core_1.StringField('addressCounty', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressProvince]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_PROVINCE = new cloud_sdk_core_1.StringField('addressProvince', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_STATE = new cloud_sdk_core_1.StringField('addressState', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[addressZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_ZIP_CODE = new cloud_sdk_core_1.StringField('addressZipCode', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerEmergencyContacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerEmergencyContacts, 'Edm.DateTime');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.EMAIL = new cloud_sdk_core_1.StringField('email', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[isAddSameAsEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.IS_ADD_SAME_AS_EMPLOYEE = new cloud_sdk_core_1.BooleanField('isAddSameAsEmployee', PerEmergencyContacts, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerEmergencyContacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerEmergencyContacts, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.NAME = new cloud_sdk_core_1.StringField('name', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.OPERATION = new cloud_sdk_core_1.StringField('operation', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.PHONE = new cloud_sdk_core_1.StringField('phone', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[primaryFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.PRIMARY_FLAG = new cloud_sdk_core_1.StringField('primaryFlag', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[relationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.RELATIONSHIP = new cloud_sdk_core_1.StringField('relationship', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the [[secondPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.SECOND_PHONE = new cloud_sdk_core_1.StringField('secondPhone', PerEmergencyContacts, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.ADDRESS_NAV_DEFLT = new cloud_sdk_core_1.OneToOneLink('addressNavDEFLT', PerEmergencyContacts, HrisEmergencyContactAddressDeflt_1.HrisEmergencyContactAddressDeflt);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerEmergencyContacts.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerEmergencyContacts, PerPerson_1.PerPerson);
    /**
     * All fields of the PerEmergencyContacts entity.
     */
    PerEmergencyContacts._allFields = [
        PerEmergencyContacts.ADDRESS_ADDRESS_1,
        PerEmergencyContacts.ADDRESS_ADDRESS_2,
        PerEmergencyContacts.ADDRESS_ADDRESS_3,
        PerEmergencyContacts.ADDRESS_CITY,
        PerEmergencyContacts.ADDRESS_COUNTRY,
        PerEmergencyContacts.ADDRESS_COUNTY,
        PerEmergencyContacts.ADDRESS_PROVINCE,
        PerEmergencyContacts.ADDRESS_STATE,
        PerEmergencyContacts.ADDRESS_ZIP_CODE,
        PerEmergencyContacts.CREATED_BY,
        PerEmergencyContacts.CREATED_DATE_TIME,
        PerEmergencyContacts.CREATED_ON,
        PerEmergencyContacts.EMAIL,
        PerEmergencyContacts.IS_ADD_SAME_AS_EMPLOYEE,
        PerEmergencyContacts.LAST_MODIFIED_BY,
        PerEmergencyContacts.LAST_MODIFIED_DATE_TIME,
        PerEmergencyContacts.LAST_MODIFIED_ON,
        PerEmergencyContacts.NAME,
        PerEmergencyContacts.OPERATION,
        PerEmergencyContacts.PERSON_ID_EXTERNAL,
        PerEmergencyContacts.PHONE,
        PerEmergencyContacts.PRIMARY_FLAG,
        PerEmergencyContacts.RELATIONSHIP,
        PerEmergencyContacts.SECOND_PHONE,
        PerEmergencyContacts.ADDRESS_NAV_DEFLT,
        PerEmergencyContacts.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerEmergencyContacts.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerEmergencyContacts);
    /**
     * All key fields of the PerEmergencyContacts entity.
     */
    PerEmergencyContacts._keyFields = [PerEmergencyContacts.NAME, PerEmergencyContacts.PERSON_ID_EXTERNAL, PerEmergencyContacts.RELATIONSHIP];
    /**
     * Mapping of all key field names to the respective static field property PerEmergencyContacts.
     */
    PerEmergencyContacts._keys = PerEmergencyContacts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerEmergencyContacts = exports.PerEmergencyContacts || (exports.PerEmergencyContacts = {}));
exports.PerEmergencyContacts = PerEmergencyContacts;
//# sourceMappingURL=PerEmergencyContacts.js.map