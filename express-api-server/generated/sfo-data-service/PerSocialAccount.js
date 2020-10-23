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
var PerSocialAccountRequestBuilder_1 = require("./PerSocialAccountRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PerSocialAccount" of service "SFOData".
 */
var PerSocialAccount = /** @class */ (function (_super) {
    __extends(PerSocialAccount, _super);
    function PerSocialAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerSocialAccount`.
     * @returns A builder that constructs instances of entity type `PerSocialAccount`.
     */
    PerSocialAccount.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PerSocialAccount);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerSocialAccount` entity type.
     * @returns A `PerSocialAccount` request builder.
     */
    PerSocialAccount.requestBuilder = function () {
        return new PerSocialAccountRequestBuilder_1.PerSocialAccountRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerSocialAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerSocialAccount`.
     */
    PerSocialAccount.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PerSocialAccount);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerSocialAccount.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerSocialAccount.
     */
    PerSocialAccount._entityName = 'PerSocialAccount';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerSocialAccount.
     */
    PerSocialAccount._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerSocialAccount._defaultServicePath = '/odata/v2';
    return PerSocialAccount;
}(cloud_sdk_core_1.Entity));
exports.PerSocialAccount = PerSocialAccount;
var PerPerson_1 = require("./PerPerson");
(function (PerSocialAccount) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', PerSocialAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', PerSocialAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[domain]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.DOMAIN = new cloud_sdk_core_1.StringField('domain', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[imId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.IM_ID = new cloud_sdk_core_1.StringField('imId', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', PerSocialAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', PerSocialAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.OPERATION = new cloud_sdk_core_1.StringField('operation', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.URL = new cloud_sdk_core_1.StringField('url', PerSocialAccount, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerSocialAccount.PERSON_NAV = new cloud_sdk_core_1.OneToOneLink('personNav', PerSocialAccount, PerPerson_1.PerPerson);
    /**
     * All fields of the PerSocialAccount entity.
     */
    PerSocialAccount._allFields = [
        PerSocialAccount.CREATED_BY,
        PerSocialAccount.CREATED_DATE_TIME,
        PerSocialAccount.CREATED_ON,
        PerSocialAccount.DOMAIN,
        PerSocialAccount.IM_ID,
        PerSocialAccount.LAST_MODIFIED_BY,
        PerSocialAccount.LAST_MODIFIED_DATE_TIME,
        PerSocialAccount.LAST_MODIFIED_ON,
        PerSocialAccount.OPERATION,
        PerSocialAccount.PERSON_ID_EXTERNAL,
        PerSocialAccount.URL,
        PerSocialAccount.PERSON_NAV
    ];
    /**
     * All fields selector.
     */
    PerSocialAccount.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PerSocialAccount);
    /**
     * All key fields of the PerSocialAccount entity.
     */
    PerSocialAccount._keyFields = [PerSocialAccount.DOMAIN, PerSocialAccount.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PerSocialAccount.
     */
    PerSocialAccount._keys = PerSocialAccount._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerSocialAccount = exports.PerSocialAccount || (exports.PerSocialAccount = {}));
exports.PerSocialAccount = PerSocialAccount;
//# sourceMappingURL=PerSocialAccount.js.map