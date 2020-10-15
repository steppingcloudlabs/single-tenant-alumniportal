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
var EmpJobRelationships_1 = require("./EmpJobRelationships");
/**
 * Request builder class for operations supported on the [[EmpJobRelationships]] entity.
 */
var EmpJobRelationshipsRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpJobRelationshipsRequestBuilder, _super);
    function EmpJobRelationshipsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpJobRelationships` entity based on its keys.
     * @param relationshipType Key property. See [[EmpJobRelationships.relationshipType]].
     * @param startDate Key property. See [[EmpJobRelationships.startDate]].
     * @param userId Key property. See [[EmpJobRelationships.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpJobRelationships` entity based on its keys.
     */
    EmpJobRelationshipsRequestBuilder.prototype.getByKey = function (relationshipType, startDate, userId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EmpJobRelationships_1.EmpJobRelationships, {
            relationshipType: relationshipType,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpJobRelationships` entities.
     * @returns A request builder for creating requests to retrieve all `EmpJobRelationships` entities.
     */
    EmpJobRelationshipsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EmpJobRelationships_1.EmpJobRelationships);
    };
    return EmpJobRelationshipsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EmpJobRelationshipsRequestBuilder = EmpJobRelationshipsRequestBuilder;
//# sourceMappingURL=EmpJobRelationshipsRequestBuilder.js.map