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
var PersonEmpTerminationInfoRequestBuilder_1 = require("./PersonEmpTerminationInfoRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PersonEmpTerminationInfo" of service "SFOData".
 */
var PersonEmpTerminationInfo = /** @class */ (function (_super) {
    __extends(PersonEmpTerminationInfo, _super);
    function PersonEmpTerminationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PersonEmpTerminationInfo`.
     * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
     */
    PersonEmpTerminationInfo.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PersonEmpTerminationInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PersonEmpTerminationInfo` entity type.
     * @returns A `PersonEmpTerminationInfo` request builder.
     */
    PersonEmpTerminationInfo.requestBuilder = function () {
        return new PersonEmpTerminationInfoRequestBuilder_1.PersonEmpTerminationInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonEmpTerminationInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonEmpTerminationInfo`.
     */
    PersonEmpTerminationInfo.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PersonEmpTerminationInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PersonEmpTerminationInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PersonEmpTerminationInfo.
     */
    PersonEmpTerminationInfo._entityName = 'PersonEmpTerminationInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonEmpTerminationInfo.
     */
    PersonEmpTerminationInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PersonEmpTerminationInfo._defaultServicePath = '/odata/v2';
    return PersonEmpTerminationInfo;
}(cloud_sdk_core_1.Entity));
exports.PersonEmpTerminationInfo = PersonEmpTerminationInfo;
(function (PersonEmpTerminationInfo) {
    /**
     * Static representation of the [[activeEmploymentsCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonEmpTerminationInfo.ACTIVE_EMPLOYMENTS_COUNT = new cloud_sdk_core_1.NumberField('activeEmploymentsCount', PersonEmpTerminationInfo, 'Edm.Int32');
    /**
     * Static representation of the [[latestTerminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonEmpTerminationInfo.LATEST_TERMINATION_DATE = new cloud_sdk_core_1.DateField('latestTerminationDate', PersonEmpTerminationInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonEmpTerminationInfo.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PersonEmpTerminationInfo, 'Edm.String');
    /**
     * All fields of the PersonEmpTerminationInfo entity.
     */
    PersonEmpTerminationInfo._allFields = [
        PersonEmpTerminationInfo.ACTIVE_EMPLOYMENTS_COUNT,
        PersonEmpTerminationInfo.LATEST_TERMINATION_DATE,
        PersonEmpTerminationInfo.PERSON_ID_EXTERNAL
    ];
    /**
     * All fields selector.
     */
    PersonEmpTerminationInfo.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PersonEmpTerminationInfo);
    /**
     * All key fields of the PersonEmpTerminationInfo entity.
     */
    PersonEmpTerminationInfo._keyFields = [PersonEmpTerminationInfo.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PersonEmpTerminationInfo.
     */
    PersonEmpTerminationInfo._keys = PersonEmpTerminationInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PersonEmpTerminationInfo = exports.PersonEmpTerminationInfo || (exports.PersonEmpTerminationInfo = {}));
exports.PersonEmpTerminationInfo = PersonEmpTerminationInfo;
//# sourceMappingURL=PersonEmpTerminationInfo.js.map