/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerPersonal } from './PerPersonal';

/**
 * Request builder class for operations supported on the [[PerPersonal]] entity.
 */
export class PerPersonalRequestBuilder extends RequestBuilder<PerPersonal> {
  /**
   * Returns a request builder for retrieving one `PerPersonal` entity based on its keys.
   * @param personIdExternal Key property. See [[PerPersonal.personIdExternal]].
   * @param startDate Key property. See [[PerPersonal.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerPersonal` entity based on its keys.
   */
  getByKey(personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerPersonal> {
    return new GetByKeyRequestBuilder(PerPersonal, {
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerPersonal` entities.
   * @returns A request builder for creating requests to retrieve all `PerPersonal` entities.
   */
  getAll(): GetAllRequestBuilder<PerPersonal> {
    return new GetAllRequestBuilder(PerPersonal);
  }
}
