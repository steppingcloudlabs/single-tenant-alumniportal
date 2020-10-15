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
var EmpEmploymentTermination_1 = require("./EmpEmploymentTermination");
/**
 * Request builder class for operations supported on the [[EmpEmploymentTermination]] entity.
 */
var EmpEmploymentTerminationRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpEmploymentTerminationRequestBuilder, _super);
    function EmpEmploymentTerminationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpEmploymentTermination` entity based on its keys.
     * @param endDate Key property. See [[EmpEmploymentTermination.endDate]].
     * @param personIdExternal Key property. See [[EmpEmploymentTermination.personIdExternal]].
     * @param userId Key property. See [[EmpEmploymentTermination.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpEmploymentTermination` entity based on its keys.
     */
    EmpEmploymentTerminationRequestBuilder.prototype.getByKey = function (endDate, personIdExternal, userId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EmpEmploymentTermination_1.EmpEmploymentTermination, {
            endDate: endDate,
            personIdExternal: personIdExternal,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpEmploymentTermination` entities.
     * @returns A request builder for creating requests to retrieve all `EmpEmploymentTermination` entities.
     */
    EmpEmploymentTerminationRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EmpEmploymentTermination_1.EmpEmploymentTermination);
    };
    return EmpEmploymentTerminationRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EmpEmploymentTerminationRequestBuilder = EmpEmploymentTerminationRequestBuilder;
//# sourceMappingURL=EmpEmploymentTerminationRequestBuilder.js.map