var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { exhaustiveCheck, isAWSDate, isAWSTime, isAWSDateTime, isAWSTimestamp, isAWSEmail, isAWSJSON, isAWSURL, isAWSPhone, isAWSIPAddress, } from './util';
export function isSchemaModel(obj) {
    return obj && obj.pluralName !== undefined;
}
export function isAssociatedWith(obj) {
    return obj && obj.associatedWith;
}
export function isTargetNameAssociation(obj) {
    return obj && obj.targetName;
}
export function isModelAttributePrimaryKey(attr) {
    return (attr.type === 'key' &&
        attr.properties &&
        attr.properties.name === undefined &&
        attr.properties.fields &&
        attr.properties.fields.length > 0);
}
export function isModelAttributeCompositeKey(attr) {
    return (attr.type === 'key' &&
        attr.properties &&
        attr.properties.fields &&
        attr.properties.fields.length > 2);
}
export var ModelAttributeAuthAllow;
(function (ModelAttributeAuthAllow) {
    ModelAttributeAuthAllow["OWNER"] = "owner";
    ModelAttributeAuthAllow["GROUPS"] = "groups";
    ModelAttributeAuthAllow["PRIVATE"] = "private";
    ModelAttributeAuthAllow["PUBLIC"] = "public";
})(ModelAttributeAuthAllow || (ModelAttributeAuthAllow = {}));
export var ModelAttributeAuthProvider;
(function (ModelAttributeAuthProvider) {
    ModelAttributeAuthProvider["USER_POOLS"] = "userPools";
    ModelAttributeAuthProvider["OIDC"] = "oidc";
    ModelAttributeAuthProvider["IAM"] = "iam";
    ModelAttributeAuthProvider["API_KEY"] = "apiKey";
})(ModelAttributeAuthProvider || (ModelAttributeAuthProvider = {}));
export var GraphQLScalarType;
(function (GraphQLScalarType) {
    GraphQLScalarType[GraphQLScalarType["ID"] = 0] = "ID";
    GraphQLScalarType[GraphQLScalarType["String"] = 1] = "String";
    GraphQLScalarType[GraphQLScalarType["Int"] = 2] = "Int";
    GraphQLScalarType[GraphQLScalarType["Float"] = 3] = "Float";
    GraphQLScalarType[GraphQLScalarType["Boolean"] = 4] = "Boolean";
    GraphQLScalarType[GraphQLScalarType["AWSDate"] = 5] = "AWSDate";
    GraphQLScalarType[GraphQLScalarType["AWSTime"] = 6] = "AWSTime";
    GraphQLScalarType[GraphQLScalarType["AWSDateTime"] = 7] = "AWSDateTime";
    GraphQLScalarType[GraphQLScalarType["AWSTimestamp"] = 8] = "AWSTimestamp";
    GraphQLScalarType[GraphQLScalarType["AWSEmail"] = 9] = "AWSEmail";
    GraphQLScalarType[GraphQLScalarType["AWSJSON"] = 10] = "AWSJSON";
    GraphQLScalarType[GraphQLScalarType["AWSURL"] = 11] = "AWSURL";
    GraphQLScalarType[GraphQLScalarType["AWSPhone"] = 12] = "AWSPhone";
    GraphQLScalarType[GraphQLScalarType["AWSIPAddress"] = 13] = "AWSIPAddress";
})(GraphQLScalarType || (GraphQLScalarType = {}));
(function (GraphQLScalarType) {
    function getJSType(scalar) {
        switch (scalar) {
            case 'Boolean':
                return 'boolean';
            case 'ID':
            case 'String':
            case 'AWSDate':
            case 'AWSTime':
            case 'AWSDateTime':
            case 'AWSEmail':
            case 'AWSJSON':
            case 'AWSURL':
            case 'AWSPhone':
            case 'AWSIPAddress':
                return 'string';
            case 'Int':
            case 'Float':
            case 'AWSTimestamp':
                return 'number';
            default:
                exhaustiveCheck(scalar);
        }
    }
    GraphQLScalarType.getJSType = getJSType;
    function getValidationFunction(scalar) {
        switch (scalar) {
            case 'AWSDate':
                return isAWSDate;
            case 'AWSTime':
                return isAWSTime;
            case 'AWSDateTime':
                return isAWSDateTime;
            case 'AWSTimestamp':
                return isAWSTimestamp;
            case 'AWSEmail':
                return isAWSEmail;
            case 'AWSJSON':
                return isAWSJSON;
            case 'AWSURL':
                return isAWSURL;
            case 'AWSPhone':
                return isAWSPhone;
            case 'AWSIPAddress':
                return isAWSIPAddress;
            default:
                return undefined;
        }
    }
    GraphQLScalarType.getValidationFunction = getValidationFunction;
})(GraphQLScalarType || (GraphQLScalarType = {}));
export function isGraphQLScalarType(obj) {
    return obj && GraphQLScalarType[obj] !== undefined;
}
export function isModelFieldType(obj) {
    var modelField = 'model';
    if (obj && obj[modelField])
        return true;
    return false;
}
export function isNonModelFieldType(obj) {
    var typeField = 'nonModel';
    if (obj && obj[typeField])
        return true;
    return false;
}
export function isEnumFieldType(obj) {
    var modelField = 'enum';
    if (obj && obj[modelField])
        return true;
    return false;
}
//#endregion
//#region Subscription messages
export var OpType;
(function (OpType) {
    OpType["INSERT"] = "INSERT";
    OpType["UPDATE"] = "UPDATE";
    OpType["DELETE"] = "DELETE";
})(OpType || (OpType = {}));
export function isPredicateObj(obj) {
    return obj && obj.field !== undefined;
}
export function isPredicateGroup(obj) {
    return obj && obj.type !== undefined;
}
export var QueryOne;
(function (QueryOne) {
    QueryOne[QueryOne["FIRST"] = 0] = "FIRST";
    QueryOne[QueryOne["LAST"] = 1] = "LAST";
})(QueryOne || (QueryOne = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ASCENDING";
    SortDirection["DESCENDING"] = "DESCENDING";
})(SortDirection || (SortDirection = {}));
export var AuthModeStrategyType;
(function (AuthModeStrategyType) {
    AuthModeStrategyType["DEFAULT"] = "DEFAULT";
    AuthModeStrategyType["MULTI_AUTH"] = "MULTI_AUTH";
})(AuthModeStrategyType || (AuthModeStrategyType = {}));
export var ModelOperation;
(function (ModelOperation) {
    ModelOperation["CREATE"] = "CREATE";
    ModelOperation["READ"] = "READ";
    ModelOperation["UPDATE"] = "UPDATE";
    ModelOperation["DELETE"] = "DELETE";
})(ModelOperation || (ModelOperation = {}));
export function syncExpression(modelConstructor, conditionProducer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    modelConstructor: modelConstructor,
                    conditionProducer: conditionProducer,
                }];
        });
    });
}
export var DISCARD = Symbol('DISCARD');
//#endregion
//# sourceMappingURL=types.js.map