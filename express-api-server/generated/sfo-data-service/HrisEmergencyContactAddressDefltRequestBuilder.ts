/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { HrisEmergencyContactAddressDeflt } from './HrisEmergencyContactAddressDeflt';

/**
 * Request builder class for operations supported on the [[HrisEmergencyContactAddressDeflt]] entity.
 */
export class HrisEmergencyContactAddressDefltRequestBuilder extends RequestBuilder<HrisEmergencyContactAddressDeflt> {
  /**
   * Returns a request builder for retrieving one `HrisEmergencyContactAddressDeflt` entity based on its keys.
   * @param addressId Key property. See [[HrisEmergencyContactAddressDeflt.addressId]].
   * @returns A request builder for creating requests to retrieve one `HrisEmergencyContactAddressDeflt` entity based on its keys.
   */
  getByKey(addressId: BigNumber): GetByKeyRequestBuilder<HrisEmergencyContactAddressDeflt> {
    return new GetByKeyRequestBuilder(HrisEmergencyContactAddressDeflt, { addressId: addressId });
  }

  /**
   * Returns a request builder for querying all `HrisEmergencyContactAddressDeflt` entities.
   * @returns A request builder for creating requests to retrieve all `HrisEmergencyContactAddressDeflt` entities.
   */
  getAll(): GetAllRequestBuilder<HrisEmergencyContactAddressDeflt> {
    return new GetAllRequestBuilder(HrisEmergencyContactAddressDeflt);
  }
}
