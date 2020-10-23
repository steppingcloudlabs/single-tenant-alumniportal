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
var PerPersonal_1 = require("./PerPersonal");
/**
 * Request builder class for operations supported on the [[PerPersonal]] entity.
 */
var PerPersonalRequestBuilder = /** @class */ (function (_super) {
    __extends(PerPersonalRequestBuilder, _super);
    function PerPersonalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerPersonal` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPersonal.personIdExternal]].
     * @param startDate Key property. See [[PerPersonal.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerPersonal` entity based on its keys.
     */
    PerPersonalRequestBuilder.prototype.getByKey = function (personIdExternal, startDate) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(PerPersonal_1.PerPersonal, {
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerPersonal` entities.
     * @returns A request builder for creating requests to retrieve all `PerPersonal` entities.
     */
    PerPersonalRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(PerPersonal_1.PerPersonal);
    };
    return PerPersonalRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.PerPersonalRequestBuilder = PerPersonalRequestBuilder;
//# sourceMappingURL=PerPersonalRequestBuilder.js.map