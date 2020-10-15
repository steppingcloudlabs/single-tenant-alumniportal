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
var PerNationalId_1 = require("./PerNationalId");
/**
 * Request builder class for operations supported on the [[PerNationalId]] entity.
 */
var PerNationalIdRequestBuilder = /** @class */ (function (_super) {
    __extends(PerNationalIdRequestBuilder, _super);
    function PerNationalIdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerNationalId` entity based on its keys.
     * @param cardType Key property. See [[PerNationalId.cardType]].
     * @param country Key property. See [[PerNationalId.country]].
     * @param personIdExternal Key property. See [[PerNationalId.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PerNationalId` entity based on its keys.
     */
    PerNationalIdRequestBuilder.prototype.getByKey = function (cardType, country, personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerNationalId_1.PerNationalId, {
            cardType: cardType,
            country: country,
            personIdExternal: personIdExternal
        });
    };
    /**
     * Returns a request builder for querying all `PerNationalId` entities.
     * @returns A request builder for creating requests to retrieve all `PerNationalId` entities.
     */
    PerNationalIdRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerNationalId_1.PerNationalId);
    };
    return PerNationalIdRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerNationalIdRequestBuilder = PerNationalIdRequestBuilder;
//# sourceMappingURL=PerNationalIdRequestBuilder.js.map