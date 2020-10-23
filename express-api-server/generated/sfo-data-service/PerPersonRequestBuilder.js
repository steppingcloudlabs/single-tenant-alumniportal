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
var PerPerson_1 = require("./PerPerson");
/**
 * Request builder class for operations supported on the [[PerPerson]] entity.
 */
var PerPersonRequestBuilder = /** @class */ (function (_super) {
    __extends(PerPersonRequestBuilder, _super);
    function PerPersonRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerPerson` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPerson.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PerPerson` entity based on its keys.
     */
    PerPersonRequestBuilder.prototype.getByKey = function (personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerPerson_1.PerPerson, { personIdExternal: personIdExternal });
    };
    /**
     * Returns a request builder for querying all `PerPerson` entities.
     * @returns A request builder for creating requests to retrieve all `PerPerson` entities.
     */
    PerPersonRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerPerson_1.PerPerson);
    };
    return PerPersonRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerPersonRequestBuilder = PerPersonRequestBuilder;
//# sourceMappingURL=PerPersonRequestBuilder.js.map