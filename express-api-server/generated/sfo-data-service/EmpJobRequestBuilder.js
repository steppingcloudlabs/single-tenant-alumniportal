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
var EmpJob_1 = require("./EmpJob");
/**
 * Request builder class for operations supported on the [[EmpJob]] entity.
 */
var EmpJobRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpJobRequestBuilder, _super);
    function EmpJobRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpJob` entity based on its keys.
     * @param seqNumber Key property. See [[EmpJob.seqNumber]].
     * @param startDate Key property. See [[EmpJob.startDate]].
     * @param userId Key property. See [[EmpJob.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpJob` entity based on its keys.
     */
    EmpJobRequestBuilder.prototype.getByKey = function (seqNumber, startDate, userId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EmpJob_1.EmpJob, {
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpJob` entities.
     * @returns A request builder for creating requests to retrieve all `EmpJob` entities.
     */
    EmpJobRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EmpJob_1.EmpJob);
    };
    return EmpJobRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EmpJobRequestBuilder = EmpJobRequestBuilder;
//# sourceMappingURL=EmpJobRequestBuilder.js.map