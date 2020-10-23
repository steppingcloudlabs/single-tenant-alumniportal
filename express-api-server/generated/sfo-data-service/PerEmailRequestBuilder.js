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
var PerEmail_1 = require("./PerEmail");
/**
 * Request builder class for operations supported on the [[PerEmail]] entity.
 */
var PerEmailRequestBuilder = /** @class */ (function (_super) {
    __extends(PerEmailRequestBuilder, _super);
    function PerEmailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerEmail` entity based on its keys.
     * @param emailType Key property. See [[PerEmail.emailType]].
     * @param personIdExternal Key property. See [[PerEmail.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PerEmail` entity based on its keys.
     */
    PerEmailRequestBuilder.prototype.getByKey = function (emailType, personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerEmail_1.PerEmail, {
            emailType: emailType,
            personIdExternal: personIdExternal
        });
    };
    /**
     * Returns a request builder for querying all `PerEmail` entities.
     * @returns A request builder for creating requests to retrieve all `PerEmail` entities.
     */
    PerEmailRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerEmail_1.PerEmail);
    };
    return PerEmailRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerEmailRequestBuilder = PerEmailRequestBuilder;
//# sourceMappingURL=PerEmailRequestBuilder.js.map