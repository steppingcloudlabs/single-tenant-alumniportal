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
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var PerAddressDeflt_1 = require("./PerAddressDeflt");
/**
 * Request builder class for operations supported on the [[PerAddressDeflt]] entity.
 */
var PerAddressDefltRequestBuilder = /** @class */ (function (_super) {
    __extends(PerAddressDefltRequestBuilder, _super);
    function PerAddressDefltRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerAddressDeflt` entity based on its keys.
     * @param addressType Key property. See [[PerAddressDeflt.addressType]].
     * @param personIdExternal Key property. See [[PerAddressDeflt.personIdExternal]].
     * @param startDate Key property. See [[PerAddressDeflt.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerAddressDeflt` entity based on its keys.
     */
    PerAddressDefltRequestBuilder.prototype.getByKey = function (addressType, personIdExternal, startDate) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerAddressDeflt_1.PerAddressDeflt, {
            addressType: addressType,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerAddressDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `PerAddressDeflt` entities.
     */
    PerAddressDefltRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerAddressDeflt_1.PerAddressDeflt);
    };
    return PerAddressDefltRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerAddressDefltRequestBuilder = PerAddressDefltRequestBuilder;
//# sourceMappingURL=PerAddressDefltRequestBuilder.js.map