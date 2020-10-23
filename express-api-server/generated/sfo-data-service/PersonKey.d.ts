/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonKeyRequestBuilder } from './PersonKeyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "PersonKey" of service "SFOData".
 */
export declare class PersonKey extends Entity implements PersonKeyType {
    /**
     * Technical entity name for PersonKey.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonKey.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Person UUID.
     * Maximum length: 32.
     * @nullable
     */
    perPersonUuid?: string;
    /**
     * Person ID Internal.
     * @nullable
     */
    personId?: BigNumber;
    /**
     * Person Id.
     * Maximum length: 32.
     */
    personIdExternal: string;
    /**
     * Returns an entity builder to construct instances `PersonKey`.
     * @returns A builder that constructs instances of entity type `PersonKey`.
     */
    static builder(): EntityBuilderType<PersonKey, PersonKeyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PersonKey` entity type.
     * @returns A `PersonKey` request builder.
     */
    static requestBuilder(): PersonKeyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonKey`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonKey`.
     */
    static customField(fieldName: string): CustomField<PersonKey>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PersonKeyType {
    perPersonUuid?: string;
    personId?: BigNumber;
    personIdExternal: string;
}
export interface PersonKeyTypeForceMandatory {
    perPersonUuid: string;
    personId: BigNumber;
    personIdExternal: string;
}
export declare namespace PersonKey {
    /**
     * Static representation of the [[perPersonUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PER_PERSON_UUID: StringField<PersonKey>;
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID: BigNumberField<PersonKey>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PersonKey>;
    /**
     * All fields of the PersonKey entity.
     */
    const _allFields: Array<StringField<PersonKey> | BigNumberField<PersonKey>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PersonKey>;
    /**
     * All key fields of the PersonKey entity.
     */
    const _keyFields: Array<Selectable<PersonKey>>;
    /**
     * Mapping of all key field names to the respective static field property PersonKey.
     */
    const _keys: {
        [keys: string]: Selectable<PersonKey>;
    };
}
//# sourceMappingURL=PersonKey.d.ts.map