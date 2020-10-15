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
var EmpJobRelationshipsRequestBuilder_1 = require("./EmpJobRelationshipsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EmpJobRelationships" of service "SFOData".
 */
var EmpJobRelationships = /** @class */ (function (_super) {
    __extends(EmpJobRelationships, _super);
    function EmpJobRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpJobRelationships`.
     * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
     */
    EmpJobRelationships.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EmpJobRelationships);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpJobRelationships` entity type.
     * @returns A `EmpJobRelationships` request builder.
     */
    EmpJobRelationships.requestBuilder = function () {
        return new EmpJobRelationshipsRequestBuilder_1.EmpJobRelationshipsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJobRelationships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpJobRelationships`.
     */
    EmpJobRelationships.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EmpJobRelationships);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpJobRelationships.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpJobRelationships.
     */
    EmpJobRelationships._entityName = 'EmpJobRelationships';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpJobRelationships.
     */
    EmpJobRelationships._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpJobRelationships._defaultServicePath = '/odata/v2';
    return EmpJobRelationships;
}(cloud_sdk_core_1.Entity));
exports.EmpJobRelationships = EmpJobRelationships;
var EmpEmployment_1 = require("./EmpEmployment");
(function (EmpJobRelationships) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', EmpJobRelationships, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.CREATED_ON = new cloud_sdk_core_1.DateField('createdOn', EmpJobRelationships, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.END_DATE = new cloud_sdk_core_1.DateField('endDate', EmpJobRelationships, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', EmpJobRelationships, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.LAST_MODIFIED_ON = new cloud_sdk_core_1.DateField('lastModifiedOn', EmpJobRelationships, 'Edm.DateTime');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.OPERATION = new cloud_sdk_core_1.StringField('operation', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the [[relUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.REL_USER_ID = new cloud_sdk_core_1.StringField('relUserId', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the [[relationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.RELATIONSHIP_TYPE = new cloud_sdk_core_1.StringField('relationshipType', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.START_DATE = new cloud_sdk_core_1.DateField('startDate', EmpJobRelationships, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.USER_ID = new cloud_sdk_core_1.StringField('userId', EmpJobRelationships, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('employmentNav', EmpJobRelationships, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[relEmploymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpJobRelationships.REL_EMPLOYMENT_NAV = new cloud_sdk_core_1.OneToOneLink('relEmploymentNav', EmpJobRelationships, EmpEmployment_1.EmpEmployment);
    /**
     * All fields of the EmpJobRelationships entity.
     */
    EmpJobRelationships._allFields = [
        EmpJobRelationships.CREATED_BY,
        EmpJobRelationships.CREATED_DATE_TIME,
        EmpJobRelationships.CREATED_ON,
        EmpJobRelationships.END_DATE,
        EmpJobRelationships.LAST_MODIFIED_BY,
        EmpJobRelationships.LAST_MODIFIED_DATE_TIME,
        EmpJobRelationships.LAST_MODIFIED_ON,
        EmpJobRelationships.OPERATION,
        EmpJobRelationships.REL_USER_ID,
        EmpJobRelationships.RELATIONSHIP_TYPE,
        EmpJobRelationships.START_DATE,
        EmpJobRelationships.USER_ID,
        EmpJobRelationships.EMPLOYMENT_NAV,
        EmpJobRelationships.REL_EMPLOYMENT_NAV
    ];
    /**
     * All fields selector.
     */
    EmpJobRelationships.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EmpJobRelationships);
    /**
     * All key fields of the EmpJobRelationships entity.
     */
    EmpJobRelationships._keyFields = [EmpJobRelationships.RELATIONSHIP_TYPE, EmpJobRelationships.START_DATE, EmpJobRelationships.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpJobRelationships.
     */
    EmpJobRelationships._keys = EmpJobRelationships._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpJobRelationships = exports.EmpJobRelationships || (exports.EmpJobRelationships = {}));
exports.EmpJobRelationships = EmpJobRelationships;
//# sourceMappingURL=EmpJobRelationships.js.map