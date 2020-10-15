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
var PersonEmpTerminationInfo_1 = require("./PersonEmpTerminationInfo");
/**
 * Request builder class for operations supported on the [[PersonEmpTerminationInfo]] entity.
 */
var PersonEmpTerminationInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(PersonEmpTerminationInfoRequestBuilder, _super);
    function PersonEmpTerminationInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PersonEmpTerminationInfo` entity based on its keys.
     * @param personIdExternal Key property. See [[PersonEmpTerminationInfo.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PersonEmpTerminationInfo` entity based on its keys.
     */
    PersonEmpTerminationInfoRequestBuilder.prototype.getByKey = function (personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PersonEmpTerminationInfo_1.PersonEmpTerminationInfo, { personIdExternal: personIdExternal });
    };
    /**
     * Returns a request builder for querying all `PersonEmpTerminationInfo` entities.
     * @returns A request builder for creating requests to retrieve all `PersonEmpTerminationInfo` entities.
     */
    PersonEmpTerminationInfoRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PersonEmpTerminationInfo_1.PersonEmpTerminationInfo);
    };
    return PersonEmpTerminationInfoRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PersonEmpTerminationInfoRequestBuilder = PersonEmpTerminationInfoRequestBuilder;
//# sourceMappingURL=PersonEmpTerminationInfoRequestBuilder.js.map