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
var PerSocialAccount_1 = require("./PerSocialAccount");
/**
 * Request builder class for operations supported on the [[PerSocialAccount]] entity.
 */
var PerSocialAccountRequestBuilder = /** @class */ (function (_super) {
    __extends(PerSocialAccountRequestBuilder, _super);
    function PerSocialAccountRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerSocialAccount` entity based on its keys.
     * @param domain Key property. See [[PerSocialAccount.domain]].
     * @param personIdExternal Key property. See [[PerSocialAccount.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PerSocialAccount` entity based on its keys.
     */
    PerSocialAccountRequestBuilder.prototype.getByKey = function (domain, personIdExternal) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerSocialAccount_1.PerSocialAccount, {
            domain: domain,
            personIdExternal: personIdExternal
        });
    };
    /**
     * Returns a request builder for querying all `PerSocialAccount` entities.
     * @returns A request builder for creating requests to retrieve all `PerSocialAccount` entities.
     */
    PerSocialAccountRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerSocialAccount_1.PerSocialAccount);
    };
    return PerSocialAccountRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerSocialAccountRequestBuilder = PerSocialAccountRequestBuilder;
//# sourceMappingURL=PerSocialAccountRequestBuilder.js.map