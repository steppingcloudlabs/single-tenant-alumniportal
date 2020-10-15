/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpWorkPermit } from './EmpWorkPermit';
/**
 * Request builder class for operations supported on the [[EmpWorkPermit]] entity.
 */
export declare class EmpWorkPermitRequestBuilder extends RequestBuilder<EmpWorkPermit> {
    /**
     * Returns a request builder for retrieving one `EmpWorkPermit` entity based on its keys.
     * @param country Key property. See [[EmpWorkPermit.country]].
     * @param documentNumber Key property. See [[EmpWorkPermit.documentNumber]].
     * @param documentType Key property. See [[EmpWorkPermit.documentType]].
     * @param userId Key property. See [[EmpWorkPermit.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpWorkPermit` entity based on its keys.
     */
    getByKey(country: string, documentNumber: string, documentType: string, userId: string): GetByKeyRequestBuilder<EmpWorkPermit>;
    /**
     * Returns a request builder for querying all `EmpWorkPermit` entities.
     * @returns A request builder for creating requests to retrieve all `EmpWorkPermit` entities.
     */
    getAll(): GetAllRequestBuilder<EmpWorkPermit>;
}
//# sourceMappingURL=EmpWorkPermitRequestBuilder.d.ts.map