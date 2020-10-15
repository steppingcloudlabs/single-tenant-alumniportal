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
var EmpEmployment_1 = require("./EmpEmployment");
/**
 * Request builder class for operations supported on the [[EmpEmployment]] entity.
 */
var EmpEmploymentRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpEmploymentRequestBuilder, _super);
    function EmpEmploymentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpEmployment` entity based on its keys.
     * @param personIdExternal Key property. See [[EmpEmployment.personIdExternal]].
     * @param userId Key property. See [[EmpEmployment.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpEmployment` entity based on its keys.
     */
    EmpEmploymentRequestBuilder.prototype.getByKey = function (personIdExternal, userId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EmpEmployment_1.EmpEmployment, {
            personIdExternal: personIdExternal,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpEmployment` entities.
     * @returns A request builder for creating requests to retrieve all `EmpEmployment` entities.
     */
    EmpEmploymentRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EmpEmployment_1.EmpEmployment);
    };
    return EmpEmploymentRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EmpEmploymentRequestBuilder = EmpEmploymentRequestBuilder;
//# sourceMappingURL=EmpEmploymentRequestBuilder.js.map