/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerNationalId } from './PerNationalId';

/**
 * Request builder class for operations supported on the [[PerNationalId]] entity.
 */
export class PerNationalIdRequestBuilder extends RequestBuilder<PerNationalId> {
  /**
   * Returns a request builder for retrieving one `PerNationalId` entity based on its keys.
   * @param cardType Key property. See [[PerNationalId.cardType]].
   * @param country Key property. See [[PerNationalId.country]].
   * @param personIdExternal Key property. See [[PerNationalId.personIdExternal]].
   * @returns A request builder for creating requests to retrieve one `PerNationalId` entity based on its keys.
   */
  getByKey(cardType: string, country: string, personIdExternal: string): GetByKeyRequestBuilder<PerNationalId> {
    return new GetByKeyRequestBuilder(PerNationalId, {
      cardType: cardType,
      country: country,
      personIdExternal: personIdExternal
    });
  }

  /**
   * Returns a request builder for querying all `PerNationalId` entities.
   * @returns A request builder for creating requests to retrieve all `PerNationalId` entities.
   */
  getAll(): GetAllRequestBuilder<PerNationalId> {
    return new GetAllRequestBuilder(PerNationalId);
  }
}
