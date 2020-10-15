/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpJobRelationships } from './EmpJobRelationships';
/**
 * Request builder class for operations supported on the [[EmpJobRelationships]] entity.
 */
export declare class EmpJobRelationshipsRequestBuilder extends RequestBuilder<EmpJobRelationships> {
    /**
     * Returns a request builder for retrieving one `EmpJobRelationships` entity based on its keys.
     * @param relationshipType Key property. See [[EmpJobRelationships.relationshipType]].
     * @param startDate Key property. See [[EmpJobRelationships.startDate]].
     * @param userId Key property. See [[EmpJobRelationships.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpJobRelationships` entity based on its keys.
     */
    getByKey(relationshipType: string, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpJobRelationships>;
    /**
     * Returns a request builder for querying all `EmpJobRelationships` entities.
     * @returns A request builder for creating requests to retrieve all `EmpJobRelationships` entities.
     */
    getAll(): GetAllRequestBuilder<EmpJobRelationships>;
}
//# sourceMappingURL=EmpJobRelationshipsRequestBuilder.d.ts.map