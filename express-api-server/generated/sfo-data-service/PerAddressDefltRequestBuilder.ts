/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerAddressDeflt } from './PerAddressDeflt';

/**
 * Request builder class for operations supported on the [[PerAddressDeflt]] entity.
 */
export class PerAddressDefltRequestBuilder extends RequestBuilder<PerAddressDeflt> {
  /**
   * Returns a request builder for retrieving one `PerAddressDeflt` entity based on its keys.
   * @param addressType Key property. See [[PerAddressDeflt.addressType]].
   * @param personIdExternal Key property. See [[PerAddressDeflt.personIdExternal]].
   * @param startDate Key property. See [[PerAddressDeflt.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerAddressDeflt` entity based on its keys.
   */
  getByKey(addressType: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerAddressDeflt> {
    return new GetByKeyRequestBuilder(PerAddressDeflt, {
      addressType: addressType,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerAddressDeflt` entities.
   * @returns A request builder for creating requests to retrieve all `PerAddressDeflt` entities.
   */
  getAll(): GetAllRequestBuilder<PerAddressDeflt> {
    return new GetAllRequestBuilder(PerAddressDeflt);
  }
}
