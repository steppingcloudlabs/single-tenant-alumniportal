/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerPerson } from './PerPerson';
/**
 * Request builder class for operations supported on the [[PerPerson]] entity.
 */
export declare class PerPersonRequestBuilder extends RequestBuilder<PerPerson> {
    /**
     * Returns a request builder for retrieving one `PerPerson` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPerson.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PerPerson` entity based on its keys.
     */
    getByKey(personIdExternal: string): GetByKeyRequestBuilder<PerPerson>;
    /**
     * Returns a request builder for querying all `PerPerson` entities.
     * @returns A request builder for creating requests to retrieve all `PerPerson` entities.
     */
    getAll(): GetAllRequestBuilder<PerPerson>;
}
//# sourceMappingURL=PerPersonRequestBuilder.d.ts.map