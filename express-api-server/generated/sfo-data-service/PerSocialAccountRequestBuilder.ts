/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerSocialAccount } from './PerSocialAccount';

/**
 * Request builder class for operations supported on the [[PerSocialAccount]] entity.
 */
export class PerSocialAccountRequestBuilder extends RequestBuilder<PerSocialAccount> {
  /**
   * Returns a request builder for retrieving one `PerSocialAccount` entity based on its keys.
   * @param domain Key property. See [[PerSocialAccount.domain]].
   * @param personIdExternal Key property. See [[PerSocialAccount.personIdExternal]].
   * @returns A request builder for creating requests to retrieve one `PerSocialAccount` entity based on its keys.
   */
  getByKey(domain: string, personIdExternal: string): GetByKeyRequestBuilder<PerSocialAccount> {
    return new GetByKeyRequestBuilder(PerSocialAccount, {
      domain: domain,
      personIdExternal: personIdExternal
    });
  }

  /**
   * Returns a request builder for querying all `PerSocialAccount` entities.
   * @returns A request builder for creating requests to retrieve all `PerSocialAccount` entities.
   */
  getAll(): GetAllRequestBuilder<PerSocialAccount> {
    return new GetAllRequestBuilder(PerSocialAccount);
  }
}
