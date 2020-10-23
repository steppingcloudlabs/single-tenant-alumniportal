"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var GenerateNextPersonIdResponse_1 = require("./GenerateNextPersonIdResponse");
/**
 * Generate Next Person Id.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function generateNextPersonId(parameters) {
    var params = {};
    return new cloud_sdk_core_1.FunctionImportRequestBuilder('post', '/odata/v2', 'generateNextPersonID', function (data) { return cloud_sdk_core_1.transformReturnValueForComplexType(data, GenerateNextPersonIdResponse_1.GenerateNextPersonIdResponse.build); }, params);
}
exports.generateNextPersonId = generateNextPersonId;
exports.functionImports = {
    generateNextPersonId: generateNextPersonId
};
//# sourceMappingURL=function-imports.js.map