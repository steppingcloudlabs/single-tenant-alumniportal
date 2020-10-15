/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpJob } from './EmpJob';
/**
 * Request builder class for operations supported on the [[EmpJob]] entity.
 */
export declare class EmpJobRequestBuilder extends RequestBuilder<EmpJob> {
    /**
     * Returns a request builder for retrieving one `EmpJob` entity based on its keys.
     * @param seqNumber Key property. See [[EmpJob.seqNumber]].
     * @param startDate Key property. See [[EmpJob.startDate]].
     * @param userId Key property. See [[EmpJob.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpJob` entity based on its keys.
     */
    getByKey(seqNumber: BigNumber, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpJob>;
    /**
     * Returns a request builder for querying all `EmpJob` entities.
     * @returns A request builder for creating requests to retrieve all `EmpJob` entities.
     */
    getAll(): GetAllRequestBuilder<EmpJob>;
}
//# sourceMappingURL=EmpJobRequestBuilder.d.ts.map