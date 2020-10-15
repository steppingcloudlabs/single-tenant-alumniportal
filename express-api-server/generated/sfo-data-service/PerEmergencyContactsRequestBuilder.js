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
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var PerEmergencyContacts_1 = require("./PerEmergencyContacts");
/**
 * Request builder class for operations supported on the [[PerEmergencyContacts]] entity.
 */
var PerEmergencyContactsRequestBuilder = /** @class */ (function (_super) {
    __extends(PerEmergencyContactsRequestBuilder, _super);
    function PerEmergencyContactsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerEmergencyContacts` entity based on its keys.
     * @param name Key property. See [[PerEmergencyContacts.name]].
     * @param personIdExternal Key property. See [[PerEmergencyContacts.personIdExternal]].
     * @param relationship Key property. See [[PerEmergencyContacts.relationship]].
     * @returns A request builder for creating requests to retrieve one `PerEmergencyContacts` entity based on its keys.
     */
    PerEmergencyContactsRequestBuilder.prototype.getByKey = function (name, personIdExternal, relationship) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerEmergencyContacts_1.PerEmergencyContacts, {
            name: name,
            personIdExternal: personIdExternal,
            relationship: relationship
        });
    };
    /**
     * Returns a request builder for querying all `PerEmergencyContacts` entities.
     * @returns A request builder for creating requests to retrieve all `PerEmergencyContacts` entities.
     */
    PerEmergencyContactsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerEmergencyContacts_1.PerEmergencyContacts);
    };
    return PerEmergencyContactsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerEmergencyContactsRequestBuilder = PerEmergencyContactsRequestBuilder;
//# sourceMappingURL=PerEmergencyContactsRequestBuilder.js.map