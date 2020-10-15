/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpEmployment } from './EmpEmployment';
/**
 * Request builder class for operations supported on the [[EmpEmployment]] entity.
 */
export declare class EmpEmploymentRequestBuilder extends RequestBuilder<EmpEmployment> {
    /**
     * Returns a request builder for retrieving one `EmpEmployment` entity based on its keys.
     * @param personIdExternal Key property. See [[EmpEmployment.personIdExternal]].
     * @param userId Key property. See [[EmpEmployment.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpEmployment` entity based on its keys.
     */
    getByKey(personIdExternal: string, userId: string): GetByKeyRequestBuilder<EmpEmployment>;
    /**
     * Returns a request builder for querying all `EmpEmployment` entities.
     * @returns A request builder for creating requests to retrieve all `EmpEmployment` entities.
     */
    getAll(): GetAllRequestBuilder<EmpEmployment>;
}
//# sourceMappingURL=EmpEmploymentRequestBuilder.d.ts.map