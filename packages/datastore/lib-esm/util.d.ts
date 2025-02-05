import { ULID } from 'ulid';
import { ModelInstanceMetadata, PersistentModel, PersistentModelConstructor, PredicateObject, PredicatesGroup, RelationshipType, RelationType, SchemaNamespace, SortPredicatesGroup } from './types';
export declare const exhaustiveCheck: (obj: never, throwOnError?: boolean) => void;
export declare const isNullOrUndefined: (val: any) => boolean;
export declare const validatePredicate: <T extends Readonly<{
    id: string;
} & Record<string, any>>>(model: T, groupType: "and" | "or" | "not", predicatesOrGroups: (PredicateObject<T> | PredicatesGroup<T>)[]) => any;
export declare const validatePredicateField: <T>(value: T, operator: "ne" | "eq" | "le" | "lt" | "ge" | "gt" | "between" | "beginsWith" | "contains" | "notContains", operand: T | [T, T]) => boolean;
export declare const isModelConstructor: <T extends Readonly<{
    id: string;
} & Record<string, any>>>(obj: any) => obj is PersistentModelConstructor<T>;
export declare const establishRelation: (namespace: SchemaNamespace) => RelationshipType;
export declare const traverseModel: <T extends Readonly<{
    id: string;
} & Record<string, any>>>(srcModelName: string, instance: T, namespace: SchemaNamespace, modelInstanceCreator: <T_1 extends Readonly<{
    id: string;
} & Record<string, any>> = Readonly<{
    id: string;
} & Record<string, any>>>(modelConstructor: PersistentModelConstructor<T_1>, init: Pick<T_1, Exclude<keyof T_1, "id">> & Partial<ModelInstanceMetadata>) => T_1, getModelConstructorByModelName: (namsespaceName: string, modelName: string) => PersistentModelConstructor<any>) => {
    modelName: string;
    item: T;
    instance: T;
}[];
export declare const getIndex: (rel: RelationType[], src: string) => string;
export declare const getIndexFromAssociation: (indexes: string[], src: string) => string;
export declare enum NAMESPACES {
    DATASTORE = "datastore",
    USER = "user",
    SYNC = "sync",
    STORAGE = "storage"
}
declare const DATASTORE = NAMESPACES.DATASTORE;
declare const USER = NAMESPACES.USER;
declare const SYNC = NAMESPACES.SYNC;
declare const STORAGE = NAMESPACES.STORAGE;
export { USER, SYNC, STORAGE, DATASTORE };
export declare const isPrivateMode: () => Promise<unknown>;
export declare function monotonicUlidFactory(seed?: number): ULID;
/**
 * Uses performance.now() if available, otherwise, uses Date.now() (e.g. react native without a polyfill)
 *
 * The values returned by performance.now() always increase at a constant rate,
 * independent of the system clock (which might be adjusted manually or skewed
 * by software like NTP).
 *
 * Otherwise, performance.timing.navigationStart + performance.now() will be
 * approximately equal to Date.now()
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now#Example
 */
export declare function getNow(): number;
export declare function sortCompareFunction<T extends PersistentModel>(sortPredicates: SortPredicatesGroup<T>): (a: any, b: any) => number;
export declare function valuesEqual(valA: any, valB: any, nullish?: boolean): boolean;
export declare const isAWSDate: (val: string) => boolean;
export declare const isAWSTime: (val: string) => boolean;
export declare const isAWSDateTime: (val: string) => boolean;
export declare const isAWSTimestamp: (val: number) => boolean;
export declare const isAWSEmail: (val: string) => boolean;
export declare const isAWSJSON: (val: string) => boolean;
export declare const isAWSURL: (val: string) => boolean;
export declare const isAWSPhone: (val: string) => boolean;
export declare const isAWSIPAddress: (val: string) => boolean;
