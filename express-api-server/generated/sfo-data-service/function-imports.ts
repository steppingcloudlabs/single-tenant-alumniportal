/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForComplexType, FunctionImportRequestBuilder, FunctionImportParameter } from '@sap/cloud-sdk-core';
import { GenerateNextPersonIdResponse } from './GenerateNextPersonIdResponse';

/**
 * Type of the parameters to be passed to [[generateNextPersonId]].
 */
export interface GenerateNextPersonIdParameters {
}

/**
 * Generate Next Person Id.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function generateNextPersonId(parameters: GenerateNextPersonIdParameters): FunctionImportRequestBuilder<GenerateNextPersonIdParameters, GenerateNextPersonIdResponse> {
  const params = {

  }

  return new FunctionImportRequestBuilder('post', '/odata/v2', 'generateNextPersonID', (data) => transformReturnValueForComplexType(data, GenerateNextPersonIdResponse.build), params);
}

export const functionImports = {
  generateNextPersonId
};
