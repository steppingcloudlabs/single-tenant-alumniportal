/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap/cloud-sdk-core';

/**
 * GenerateNextPersonIdResponse
 */
export interface GenerateNextPersonIdResponse {
  /**
   * personID.
   * @nullable
   */
  personId?: string;
}

/**
 * @deprecated since v1.6.0. Use [[GenerateNextPersonIdResponse.build]] instead.
 */
export function createGenerateNextPersonIdResponse(json: any): GenerateNextPersonIdResponse {
  return GenerateNextPersonIdResponse.build(json);
}

/**
 * GenerateNextPersonIdResponseField
 * @typeparam EntityT Type of the entity the complex type field belongs to.
 */
export class GenerateNextPersonIdResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GenerateNextPersonIdResponse.personId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  personId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('personID', this._entityConstructor, 'GenerateNextPersonIDResponse', 'Edm.String');
}

export namespace GenerateNextPersonIdResponse {
  export function build(json: { [keys: string]: FieldType }): GenerateNextPersonIdResponse {
    return createComplexType(json, {
      personID: (personId: string) => ({ personId: edmToTs(personId, 'Edm.String') })
    });
  }
}
