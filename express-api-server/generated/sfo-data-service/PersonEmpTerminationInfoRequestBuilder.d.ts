/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { PersonEmpTerminationInfo } from './PersonEmpTerminationInfo';
/**
 * Request builder class for operations supported on the [[PersonEmpTerminationInfo]] entity.
 */
export declare class PersonEmpTerminationInfoRequestBuilder extends RequestBuilder<PersonEmpTerminationInfo> {
    /**
     * Returns a request builder for retrieving one `PersonEmpTerminationInfo` entity based on its keys.
     * @param personIdExternal Key property. See [[PersonEmpTerminationInfo.personIdExternal]].
     * @returns A request builder for creating requests to retrieve one `PersonEmpTerminationInfo` entity based on its keys.
     */
    getByKey(personIdExternal: string): GetByKeyRequestBuilder<PersonEmpTerminationInfo>;
    /**
     * Returns a request builder for querying all `PersonEmpTerminationInfo` entities.
     * @returns A request builder for creating requests to retrieve all `PersonEmpTerminationInfo` entities.
     */
    getAll(): GetAllRequestBuilder<PersonEmpTerminationInfo>;
}
//# sourceMappingURL=PersonEmpTerminationInfoRequestBuilder.d.ts.map