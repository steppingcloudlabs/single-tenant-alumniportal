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
var EmpWorkPermit_1 = require("./EmpWorkPermit");
/**
 * Request builder class for operations supported on the [[EmpWorkPermit]] entity.
 */
var EmpWorkPermitRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpWorkPermitRequestBuilder, _super);
    function EmpWorkPermitRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpWorkPermit` entity based on its keys.
     * @param country Key property. See [[EmpWorkPermit.country]].
     * @param documentNumber Key property. See [[EmpWorkPermit.documentNumber]].
     * @param documentType Key property. See [[EmpWorkPermit.documentType]].
     * @param userId Key property. See [[EmpWorkPermit.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpWorkPermit` entity based on its keys.
     */
    EmpWorkPermitRequestBuilder.prototype.getByKey = function (country, documentNumber, documentType, userId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EmpWorkPermit_1.EmpWorkPermit, {
            country: country,
            documentNumber: documentNumber,
            documentType: documentType,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpWorkPermit` entities.
     * @returns A request builder for creating requests to retrieve all `EmpWorkPermit` entities.
     */
    EmpWorkPermitRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EmpWorkPermit_1.EmpWorkPermit);
    };
    return EmpWorkPermitRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EmpWorkPermitRequestBuilder = EmpWorkPermitRequestBuilder;
//# sourceMappingURL=EmpWorkPermitRequestBuilder.js.map