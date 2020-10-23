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
var PerPhone_1 = require("./PerPhone");
/**
 * Request builder class for operations supported on the [[PerPhone]] entity.
 */
var PerPhoneRequestBuilder = /** @class */ (function (_super) {
    __extends(PerPhoneRequestBuilder, _super);
    function PerPhoneRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerPhone` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPhone.personIdExternal]].
     * @param phoneType Key property. See [[PerPhone.phoneType]].
     * @returns A request builder for creating requests to retrieve one `PerPhone` entity based on its keys.
     */
    PerPhoneRequestBuilder.prototype.getByKey = function (personIdExternal, phoneType) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerPhone_1.PerPhone, {
            personIdExternal: personIdExternal,
            phoneType: phoneType
        });
    };
    /**
     * Returns a request builder for querying all `PerPhone` entities.
     * @returns A request builder for creating requests to retrieve all `PerPhone` entities.
     */
    PerPhoneRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerPhone_1.PerPhone);
    };
    return PerPhoneRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerPhoneRequestBuilder = PerPhoneRequestBuilder;
//# sourceMappingURL=PerPhoneRequestBuilder.js.map