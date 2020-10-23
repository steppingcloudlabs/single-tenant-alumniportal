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
var HrisEmergencyContactAddressDeflt_1 = require("./HrisEmergencyContactAddressDeflt");
/**
 * Request builder class for operations supported on the [[HrisEmergencyContactAddressDeflt]] entity.
 */
var HrisEmergencyContactAddressDefltRequestBuilder = /** @class */ (function (_super) {
    __extends(HrisEmergencyContactAddressDefltRequestBuilder, _super);
    function HrisEmergencyContactAddressDefltRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HrisEmergencyContactAddressDeflt` entity based on its keys.
     * @param addressId Key property. See [[HrisEmergencyContactAddressDeflt.addressId]].
     * @returns A request builder for creating requests to retrieve one `HrisEmergencyContactAddressDeflt` entity based on its keys.
     */
    HrisEmergencyContactAddressDefltRequestBuilder.prototype.getByKey = function (addressId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(HrisEmergencyContactAddressDeflt_1.HrisEmergencyContactAddressDeflt, { addressId: addressId });
    };
    /**
     * Returns a request builder for querying all `HrisEmergencyContactAddressDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `HrisEmergencyContactAddressDeflt` entities.
     */
    HrisEmergencyContactAddressDefltRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(HrisEmergencyContactAddressDeflt_1.HrisEmergencyContactAddressDeflt);
    };
    return HrisEmergencyContactAddressDefltRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.HrisEmergencyContactAddressDefltRequestBuilder = HrisEmergencyContactAddressDefltRequestBuilder;
//# sourceMappingURL=HrisEmergencyContactAddressDefltRequestBuilder.js.map