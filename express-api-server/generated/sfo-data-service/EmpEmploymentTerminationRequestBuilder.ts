/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpEmploymentTermination } from './EmpEmploymentTermination';

/**
 * Request builder class for operations supported on the [[EmpEmploymentTermination]] entity.
 */
export class EmpEmploymentTerminationRequestBuilder extends RequestBuilder<EmpEmploymentTermination> {
  /**
   * Returns a request builder for retrieving one `EmpEmploymentTermination` entity based on its keys.
   * @param endDate Key property. See [[EmpEmploymentTermination.endDate]].
   * @param personIdExternal Key property. See [[EmpEmploymentTermination.personIdExternal]].
   * @param userId Key property. See [[EmpEmploymentTermination.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpEmploymentTermination` entity based on its keys.
   */
  getByKey(endDate: Moment, personIdExternal: string, userId: string): GetByKeyRequestBuilder<EmpEmploymentTermination> {
    return new GetByKeyRequestBuilder(EmpEmploymentTermination, {
      endDate: endDate,
      personIdExternal: personIdExternal,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpEmploymentTermination` entities.
   * @returns A request builder for creating requests to retrieve all `EmpEmploymentTermination` entities.
   */
  getAll(): GetAllRequestBuilder<EmpEmploymentTermination> {
    return new GetAllRequestBuilder(EmpEmploymentTermination);
  }
}
