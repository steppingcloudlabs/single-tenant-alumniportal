/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerPersonRelationship } from './PerPersonRelationship';

/**
 * Request builder class for operations supported on the [[PerPersonRelationship]] entity.
 */
export class PerPersonRelationshipRequestBuilder extends RequestBuilder<PerPersonRelationship> {
  /**
   * Returns a request builder for retrieving one `PerPersonRelationship` entity based on its keys.
   * @param personIdExternal Key property. See [[PerPersonRelationship.personIdExternal]].
   * @param relatedPersonIdExternal Key property. See [[PerPersonRelationship.relatedPersonIdExternal]].
   * @param startDate Key property. See [[PerPersonRelationship.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerPersonRelationship` entity based on its keys.
   */
  getByKey(personIdExternal: string, relatedPersonIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerPersonRelationship> {
    return new GetByKeyRequestBuilder(PerPersonRelationship, {
      personIdExternal: personIdExternal,
      relatedPersonIdExternal: relatedPersonIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerPersonRelationship` entities.
   * @returns A request builder for creating requests to retrieve all `PerPersonRelationship` entities.
   */
  getAll(): GetAllRequestBuilder<PerPersonRelationship> {
    return new GetAllRequestBuilder(PerPersonRelationship);
  }
}
