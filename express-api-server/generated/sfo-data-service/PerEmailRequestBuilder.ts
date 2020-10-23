/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerEmail } from './PerEmail';

/**
 * Request builder class for operations supported on the [[PerEmail]] entity.
 */
export class PerEmailRequestBuilder extends RequestBuilder<PerEmail> {
  /**
   * Returns a request builder for retrieving one `PerEmail` entity based on its keys.
   * @param emailType Key property. See [[PerEmail.emailType]].
   * @param personIdExternal Key property. See [[PerEmail.personIdExternal]].
   * @returns A request builder for creating requests to retrieve one `PerEmail` entity based on its keys.
   */
  getByKey(emailType: string, personIdExternal: string): GetByKeyRequestBuilder<PerEmail> {
    return new GetByKeyRequestBuilder(PerEmail, {
      emailType: emailType,
      personIdExternal: personIdExternal
    });
  }

  /**
   * Returns a request builder for querying all `PerEmail` entities.
   * @returns A request builder for creating requests to retrieve all `PerEmail` entities.
   */
  getAll(): GetAllRequestBuilder<PerEmail> {
    return new GetAllRequestBuilder(PerEmail);
  }
}
