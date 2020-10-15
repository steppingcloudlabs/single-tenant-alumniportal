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
/**
 * @deprecated since v1.6.0. Use [[GenerateNextPersonIdResponse.build]] instead.
 */
function createGenerateNextPersonIdResponse(json) {
    return GenerateNextPersonIdResponse.build(json);
}
exports.createGenerateNextPersonIdResponse = createGenerateNextPersonIdResponse;
/**
 * GenerateNextPersonIdResponseField
 * @typeparam EntityT Type of the entity the complex type field belongs to.
 */
var GenerateNextPersonIdResponseField = /** @class */ (function (_super) {
    __extends(GenerateNextPersonIdResponseField, _super);
    function GenerateNextPersonIdResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GenerateNextPersonIdResponse.personId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.personId = new cloud_sdk_core_1.ComplexTypeStringPropertyField('personID', _this._entityConstructor, 'GenerateNextPersonIDResponse', 'Edm.String');
        return _this;
    }
    return GenerateNextPersonIdResponseField;
}(cloud_sdk_core_1.ComplexTypeField));
exports.GenerateNextPersonIdResponseField = GenerateNextPersonIdResponseField;
var GenerateNextPersonIdResponse;
(function (GenerateNextPersonIdResponse) {
    function build(json) {
        return cloud_sdk_core_1.createComplexType(json, {
            personID: function (personId) { return ({ personId: cloud_sdk_core_1.edmToTs(personId, 'Edm.String') }); }
        });
    }
    GenerateNextPersonIdResponse.build = build;
})(GenerateNextPersonIdResponse = exports.GenerateNextPersonIdResponse || (exports.GenerateNextPersonIdResponse = {}));
//# sourceMappingURL=GenerateNextPersonIdResponse.js.map