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
var PersonKeyRequestBuilder_1 = require("./PersonKeyRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "PersonKey" of service "SFOData".
 */
var PersonKey = /** @class */ (function (_super) {
    __extends(PersonKey, _super);
    function PersonKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PersonKey`.
     * @returns A builder that constructs instances of entity type `PersonKey`.
     */
    PersonKey.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(PersonKey);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PersonKey` entity type.
     * @returns A `PersonKey` request builder.
     */
    PersonKey.requestBuilder = function () {
        return new PersonKeyRequestBuilder_1.PersonKeyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonKey`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonKey`.
     */
    PersonKey.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, PersonKey);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PersonKey.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PersonKey.
     */
    PersonKey._entityName = 'PersonKey';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonKey.
     */
    PersonKey._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PersonKey._defaultServicePath = '/odata/v2';
    return PersonKey;
}(cloud_sdk_core_1.Entity));
exports.PersonKey = PersonKey;
(function (PersonKey) {
    /**
     * Static representation of the [[perPersonUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonKey.PER_PERSON_UUID = new cloud_sdk_core_1.StringField('perPersonUuid', PersonKey, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonKey.PERSON_ID = new cloud_sdk_core_1.BigNumberField('personId', PersonKey, 'Edm.Int64');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonKey.PERSON_ID_EXTERNAL = new cloud_sdk_core_1.StringField('personIdExternal', PersonKey, 'Edm.String');
    /**
     * All fields of the PersonKey entity.
     */
    PersonKey._allFields = [
        PersonKey.PER_PERSON_UUID,
        PersonKey.PERSON_ID,
        PersonKey.PERSON_ID_EXTERNAL
    ];
    /**
     * All fields selector.
     */
    PersonKey.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', PersonKey);
    /**
     * All key fields of the PersonKey entity.
     */
    PersonKey._keyFields = [PersonKey.PERSON_ID_EXTERNAL];
    /**
     * Mapping of all key field names to the respective static field property PersonKey.
     */
    PersonKey._keys = PersonKey._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PersonKey = exports.PersonKey || (exports.PersonKey = {}));
exports.PersonKey = PersonKey;
//# sourceMappingURL=PersonKey.js.map