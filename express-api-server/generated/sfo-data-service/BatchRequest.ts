/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { EmpEmployment, EmpEmploymentTermination, EmpWorkPermit, EmpJobRelationships, EmpJob, PersonEmpTerminationInfo } from './index';

/**
 * Batch builder for operations supported on the Sfo Data Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadSfoDataServiceRequestBuilder | ODataBatchChangeSet<WriteSfoDataServiceRequestBuilder>>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultSfoDataServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Sfo Data Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteSfoDataServiceRequestBuilder[]): ODataBatchChangeSet<WriteSfoDataServiceRequestBuilder> {
  return new ODataBatchChangeSet(requests);
}

export const defaultSfoDataServicePath = '/sap/opu/odata/sap/SFOData';
const map = { 'EmpEmployment': EmpEmployment, 'EmpEmploymentTermination': EmpEmploymentTermination, 'EmpWorkPermit': EmpWorkPermit, 'EmpJobRelationships': EmpJobRelationships, 'EmpJob': EmpJob, 'PersonEmpTerminationInfo': PersonEmpTerminationInfo };
export type ReadSfoDataServiceRequestBuilder = GetAllRequestBuilder<EmpEmployment> | GetAllRequestBuilder<EmpEmploymentTermination> | GetAllRequestBuilder<EmpWorkPermit> | GetAllRequestBuilder<EmpJobRelationships> | GetAllRequestBuilder<EmpJob> | GetAllRequestBuilder<PersonEmpTerminationInfo> | GetByKeyRequestBuilder<EmpEmployment> | GetByKeyRequestBuilder<EmpEmploymentTermination> | GetByKeyRequestBuilder<EmpWorkPermit> | GetByKeyRequestBuilder<EmpJobRelationships> | GetByKeyRequestBuilder<EmpJob> | GetByKeyRequestBuilder<PersonEmpTerminationInfo>;
export type WriteSfoDataServiceRequestBuilder = CreateRequestBuilder<EmpEmployment> | UpdateRequestBuilder<EmpEmployment> | DeleteRequestBuilder<EmpEmployment> | CreateRequestBuilder<EmpEmploymentTermination> | UpdateRequestBuilder<EmpEmploymentTermination> | DeleteRequestBuilder<EmpEmploymentTermination> | CreateRequestBuilder<EmpWorkPermit> | UpdateRequestBuilder<EmpWorkPermit> | DeleteRequestBuilder<EmpWorkPermit> | CreateRequestBuilder<EmpJobRelationships> | UpdateRequestBuilder<EmpJobRelationships> | DeleteRequestBuilder<EmpJobRelationships> | CreateRequestBuilder<EmpJob> | UpdateRequestBuilder<EmpJob> | DeleteRequestBuilder<EmpJob> | CreateRequestBuilder<PersonEmpTerminationInfo> | UpdateRequestBuilder<PersonEmpTerminationInfo> | DeleteRequestBuilder<PersonEmpTerminationInfo>;
