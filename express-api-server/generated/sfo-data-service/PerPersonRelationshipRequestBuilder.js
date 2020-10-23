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
var PerPersonRelationship_1 = require("./PerPersonRelationship");
/**
 * Request builder class for operations supported on the [[PerPersonRelationship]] entity.
 */
var PerPersonRelationshipRequestBuilder = /** @class */ (function (_super) {
    __extends(PerPersonRelationshipRequestBuilder, _super);
    function PerPersonRelationshipRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerPersonRelationship` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPersonRelationship.personIdExternal]].
     * @param relatedPersonIdExternal Key property. See [[PerPersonRelationship.relatedPersonIdExternal]].
     * @param startDate Key property. See [[PerPersonRelationship.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerPersonRelationship` entity based on its keys.
     */
    PerPersonRelationshipRequestBuilder.prototype.getByKey = function (personIdExternal, relatedPersonIdExternal, startDate) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerPersonRelationship_1.PerPersonRelationship, {
            personIdExternal: personIdExternal,
            relatedPersonIdExternal: relatedPersonIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerPersonRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `PerPersonRelationship` entities.
     */
    PerPersonRelationshipRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerPersonRelationship_1.PerPersonRelationship);
    };
    return PerPersonRelationshipRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerPersonRelationshipRequestBuilder = PerPersonRelationshipRequestBuilder;
//# sourceMappingURL=PerPersonRelationshipRequestBuilder.js.map