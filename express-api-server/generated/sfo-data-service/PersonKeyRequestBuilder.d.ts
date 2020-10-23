/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PersonKey } from './PersonKey';
/**
 * Request builder class for operations supported on the [[PersonKey]] entity.
 */
export declare class PersonKeyRequestBuilder extends RequestBuilder<PersonKey> {
    /**
     * Returns a request builder for retrieving one `PersonKey` entity based on its keys.
     * @param personIdExternal Key property. See [[PersonKey.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PersonKey` entity based on its keys.
     */
    getByKey(personIdExternal: string): GetByKeyRequestBuilder<PersonKey>;
    /**
     * Returns a request builder for querying all `PersonKey` entities.
     * @returns A request builder for creating requests to retrieve all `PersonKey` entities.
     */
    getAll(): GetAllRequestBuilder<PersonKey>;
}
//# sourceMappingURL=PersonKeyRequestBuilder.d.ts.map