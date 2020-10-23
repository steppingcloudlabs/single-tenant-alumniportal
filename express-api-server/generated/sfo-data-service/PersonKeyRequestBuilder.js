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
var PersonKey_1 = require("./PersonKey");
/**
 * Request builder class for operations supported on the [[PersonKey]] entity.
 */
var PersonKeyRequestBuilder = /** @class */ (function (_super) {
    __extends(PersonKeyRequestBuilder, _super);
    function PersonKeyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PersonKey` entity based on its keys.
     * @param personIdExternal Key property. See [[PersonKey.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PersonKey` entity based on its keys.
     */
    PersonKeyRequestBuilder.prototype.getByKey = function (personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PersonKey_1.PersonKey, { personIdExternal: personIdExternal });
    };
    /**
     * Returns a request builder for querying all `PersonKey` entities.
     * @returns A request builder for creating requests to retrieve all `PersonKey` entities.
     */
    PersonKeyRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PersonKey_1.PersonKey);
    };
    return PersonKeyRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PersonKeyRequestBuilder = PersonKeyRequestBuilder;
//# sourceMappingURL=PersonKeyRequestBuilder.js.map