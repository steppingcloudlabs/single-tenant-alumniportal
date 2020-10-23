/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PerPhone } from './PerPhone';
/**
 * Request builder class for operations supported on the [[PerPhone]] entity.
 */
export declare class PerPhoneRequestBuilder extends RequestBuilder<PerPhone> {
    /**
     * Returns a request builder for retrieving one `PerPhone` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPhone.personIdExternal]].
     * @param phoneType Key property. See [[PerPhone.phoneType]].
     * @returns A request builder for creating requests to retrieve one `PerPhone` entity based on its keys.
     */
    getByKey(personIdExternal: string, phoneType: string): GetByKeyRequestBuilder<PerPhone>;
    /**
     * Returns a request builder for querying all `PerPhone` entities.
     * @returns A request builder for creating requests to retrieve all `PerPhone` entities.
     */
    getAll(): GetAllRequestBuilder<PerPhone>;
}
//# sourceMappingURL=PerPhoneRequestBuilder.d.ts.map