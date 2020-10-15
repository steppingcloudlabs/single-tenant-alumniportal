/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpWorkPermitRequestBuilder } from './EmpWorkPermitRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EmpWorkPermit" of service "SFOData".
 */
export class EmpWorkPermit extends Entity implements EmpWorkPermitType {
  /**
   * Technical entity name for EmpWorkPermit.
   */
  static _entityName = 'EmpWorkPermit';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpWorkPermit.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Attachment Content.
   * @nullable
   */
  attachment?: string;
  /**
   * Attachment File Name.
   * Maximum length: 256.
   * @nullable
   */
  attachmentFileName?: string;
  /**
   * Attachment File Size.
   * @nullable
   */
  attachmentFileSize?: BigNumber;
  /**
   * Attachment File Type.
   * Maximum length: 5.
   * @nullable
   */
  attachmentFileType?: string;
  /**
   * attachmentId.
   * @nullable
   */
  attachmentId?: string;
  /**
   * Attachment Mime Type.
   * Maximum length: 256.
   * @nullable
   */
  attachmentMimeType?: string;
  /**
   * Attachment Status.
   * @nullable
   */
  attachmentStatus?: BigNumber;
  /**
   * Country.
   * Maximum length: 256.
   */
  country!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Document Number.
   * Maximum length: 256.
   */
  documentNumber!: string;
  /**
   * Document Title.
   * Maximum length: 256.
   * @nullable
   */
  documentTitle?: string;
  /**
   * Document Type.
   * Maximum length: 256.
   */
  documentType!: string;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: Moment;
  /**
   * Validated.
   * @nullable
   */
  isValidated?: boolean;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: Moment;
  /**
   * Issue Place.
   * Maximum length: 256.
   * @nullable
   */
  issuePlace?: string;
  /**
   * Issuing Authority.
   * Maximum length: 256.
   * @nullable
   */
  issuingAuthority?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: string;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;

  /**
   * Returns an entity builder to construct instances `EmpWorkPermit`.
   * @returns A builder that constructs instances of entity type `EmpWorkPermit`.
   */
  static builder(): EntityBuilderType<EmpWorkPermit, EmpWorkPermitTypeForceMandatory> {
    return Entity.entityBuilder(EmpWorkPermit);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpWorkPermit` entity type.
   * @returns A `EmpWorkPermit` request builder.
   */
  static requestBuilder(): EmpWorkPermitRequestBuilder {
    return new EmpWorkPermitRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpWorkPermit`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpWorkPermit`.
   */
  static customField(fieldName: string): CustomField<EmpWorkPermit> {
    return Entity.customFieldSelector(fieldName, EmpWorkPermit);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';

export interface EmpWorkPermitType {
  attachment?: string;
  attachmentFileName?: string;
  attachmentFileSize?: BigNumber;
  attachmentFileType?: string;
  attachmentId?: string;
  attachmentMimeType?: string;
  attachmentStatus?: BigNumber;
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  documentNumber: string;
  documentTitle?: string;
  documentType: string;
  expirationDate?: Moment;
  isValidated?: boolean;
  issueDate?: Moment;
  issuePlace?: string;
  issuingAuthority?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  notes?: string;
  userId: string;
  employmentNav: EmpEmploymentType;
}

export interface EmpWorkPermitTypeForceMandatory {
  attachment: string;
  attachmentFileName: string;
  attachmentFileSize: BigNumber;
  attachmentFileType: string;
  attachmentId: string;
  attachmentMimeType: string;
  attachmentStatus: BigNumber;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  documentNumber: string;
  documentTitle: string;
  documentType: string;
  expirationDate: Moment;
  isValidated: boolean;
  issueDate: Moment;
  issuePlace: string;
  issuingAuthority: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  notes: string;
  userId: string;
  employmentNav: EmpEmploymentType;
}

export namespace EmpWorkPermit {
  /**
   * Static representation of the [[attachment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT: BinaryField<EmpWorkPermit> = new BinaryField('attachment', EmpWorkPermit, 'Edm.Binary');
  /**
   * Static representation of the [[attachmentFileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_NAME: StringField<EmpWorkPermit> = new StringField('attachmentFileName', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[attachmentFileSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_SIZE: BigNumberField<EmpWorkPermit> = new BigNumberField('attachmentFileSize', EmpWorkPermit, 'Edm.Decimal');
  /**
   * Static representation of the [[attachmentFileType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_TYPE: StringField<EmpWorkPermit> = new StringField('attachmentFileType', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[attachmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ID: StringField<EmpWorkPermit> = new StringField('attachmentId', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[attachmentMimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_MIME_TYPE: StringField<EmpWorkPermit> = new StringField('attachmentMimeType', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[attachmentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_STATUS: BigNumberField<EmpWorkPermit> = new BigNumberField('attachmentStatus', EmpWorkPermit, 'Edm.Decimal');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<EmpWorkPermit> = new StringField('country', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpWorkPermit> = new StringField('createdBy', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpWorkPermit> = new DateField('createdDateTime', EmpWorkPermit, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpWorkPermit> = new DateField('createdOn', EmpWorkPermit, 'Edm.DateTime');
  /**
   * Static representation of the [[documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NUMBER: StringField<EmpWorkPermit> = new StringField('documentNumber', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[documentTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TITLE: StringField<EmpWorkPermit> = new StringField('documentTitle', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[documentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TYPE: StringField<EmpWorkPermit> = new StringField('documentType', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRATION_DATE: DateField<EmpWorkPermit> = new DateField('expirationDate', EmpWorkPermit, 'Edm.DateTime');
  /**
   * Static representation of the [[isValidated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_VALIDATED: BooleanField<EmpWorkPermit> = new BooleanField('isValidated', EmpWorkPermit, 'Edm.Boolean');
  /**
   * Static representation of the [[issueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUE_DATE: DateField<EmpWorkPermit> = new DateField('issueDate', EmpWorkPermit, 'Edm.DateTime');
  /**
   * Static representation of the [[issuePlace]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUE_PLACE: StringField<EmpWorkPermit> = new StringField('issuePlace', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[issuingAuthority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_AUTHORITY: StringField<EmpWorkPermit> = new StringField('issuingAuthority', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpWorkPermit> = new StringField('lastModifiedBy', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpWorkPermit> = new DateField('lastModifiedDateTime', EmpWorkPermit, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpWorkPermit> = new DateField('lastModifiedOn', EmpWorkPermit, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<EmpWorkPermit> = new StringField('notes', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpWorkPermit> = new StringField('userId', EmpWorkPermit, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpWorkPermit, EmpEmployment> = new OneToOneLink('employmentNav', EmpWorkPermit, EmpEmployment);
  /**
   * All fields of the EmpWorkPermit entity.
   */
  export const _allFields: Array<BinaryField<EmpWorkPermit> | StringField<EmpWorkPermit> | BigNumberField<EmpWorkPermit> | DateField<EmpWorkPermit> | BooleanField<EmpWorkPermit> | OneToOneLink<EmpWorkPermit, EmpEmployment>> = [
    EmpWorkPermit.ATTACHMENT,
    EmpWorkPermit.ATTACHMENT_FILE_NAME,
    EmpWorkPermit.ATTACHMENT_FILE_SIZE,
    EmpWorkPermit.ATTACHMENT_FILE_TYPE,
    EmpWorkPermit.ATTACHMENT_ID,
    EmpWorkPermit.ATTACHMENT_MIME_TYPE,
    EmpWorkPermit.ATTACHMENT_STATUS,
    EmpWorkPermit.COUNTRY,
    EmpWorkPermit.CREATED_BY,
    EmpWorkPermit.CREATED_DATE_TIME,
    EmpWorkPermit.CREATED_ON,
    EmpWorkPermit.DOCUMENT_NUMBER,
    EmpWorkPermit.DOCUMENT_TITLE,
    EmpWorkPermit.DOCUMENT_TYPE,
    EmpWorkPermit.EXPIRATION_DATE,
    EmpWorkPermit.IS_VALIDATED,
    EmpWorkPermit.ISSUE_DATE,
    EmpWorkPermit.ISSUE_PLACE,
    EmpWorkPermit.ISSUING_AUTHORITY,
    EmpWorkPermit.LAST_MODIFIED_BY,
    EmpWorkPermit.LAST_MODIFIED_DATE_TIME,
    EmpWorkPermit.LAST_MODIFIED_ON,
    EmpWorkPermit.NOTES,
    EmpWorkPermit.USER_ID,
    EmpWorkPermit.EMPLOYMENT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpWorkPermit> = new AllFields('*', EmpWorkPermit);
  /**
   * All key fields of the EmpWorkPermit entity.
   */
  export const _keyFields: Array<Selectable<EmpWorkPermit>> = [EmpWorkPermit.COUNTRY, EmpWorkPermit.DOCUMENT_NUMBER, EmpWorkPermit.DOCUMENT_TYPE, EmpWorkPermit.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpWorkPermit.
   */
  export const _keys: { [keys: string]: Selectable<EmpWorkPermit> } = EmpWorkPermit._keyFields.reduce((acc: { [keys: string]: Selectable<EmpWorkPermit> }, field: Selectable<EmpWorkPermit>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
