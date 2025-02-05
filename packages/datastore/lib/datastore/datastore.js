"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aws-amplify/core");
var immer_1 = require("immer");
var uuid_1 = require("uuid");
var zen_observable_ts_1 = __importDefault(require("zen-observable-ts"));
var authModeStrategies_1 = require("../authModeStrategies");
var predicates_1 = require("../predicates");
var storage_1 = require("../storage/storage");
var sync_1 = require("../sync");
var types_1 = require("../types");
var util_1 = require("../util");
immer_1.setAutoFreeze(true);
immer_1.enablePatches();
var logger = new core_1.ConsoleLogger('DataStore');
var ulid = util_1.monotonicUlidFactory(Date.now());
var isNode = core_1.JS.browserOrNode().isNode;
var SETTING_SCHEMA_VERSION = 'schemaVersion';
var schema;
var modelNamespaceMap = new WeakMap();
// stores data for crafting the correct update mutation input for a model
// Patch[] - array of changed fields and metadata
// PersistentModel - the source model, used for diffing object-type fields
var modelPatchesMap = new WeakMap();
var getModelDefinition = function (modelConstructor) {
    var namespace = modelNamespaceMap.get(modelConstructor);
    return schema.namespaces[namespace].models[modelConstructor.name];
};
var isValidModelConstructor = function (obj) {
    return util_1.isModelConstructor(obj) && modelNamespaceMap.has(obj);
};
var namespaceResolver = function (modelConstructor) {
    return modelNamespaceMap.get(modelConstructor);
};
var userClasses;
var dataStoreClasses;
var storageClasses;
var initSchema = function (userSchema) {
    var _a;
    if (schema !== undefined) {
        console.warn('The schema has already been initialized');
        return userClasses;
    }
    logger.log('validating schema', { schema: userSchema });
    var internalUserNamespace = __assign({ name: util_1.USER }, userSchema);
    logger.log('DataStore', 'Init models');
    userClasses = createTypeClasses(internalUserNamespace);
    logger.log('DataStore', 'Models initialized');
    var dataStoreNamespace = getNamespace();
    var storageNamespace = storage_1.ExclusiveStorage.getNamespace();
    var syncNamespace = sync_1.SyncEngine.getNamespace();
    dataStoreClasses = createTypeClasses(dataStoreNamespace);
    storageClasses = createTypeClasses(storageNamespace);
    exports.syncClasses = createTypeClasses(syncNamespace);
    schema = {
        namespaces: (_a = {},
            _a[dataStoreNamespace.name] = dataStoreNamespace,
            _a[internalUserNamespace.name] = internalUserNamespace,
            _a[storageNamespace.name] = storageNamespace,
            _a[syncNamespace.name] = syncNamespace,
            _a),
        version: userSchema.version,
    };
    Object.keys(schema.namespaces).forEach(function (namespace) {
        var e_1, _a;
        schema.namespaces[namespace].relationships = util_1.establishRelation(schema.namespaces[namespace]);
        var modelAssociations = new Map();
        Object.values(schema.namespaces[namespace].models).forEach(function (model) {
            var connectedModels = [];
            Object.values(model.fields)
                .filter(function (field) {
                return field.association &&
                    field.association.connectionType === 'BELONGS_TO' &&
                    field.type.model !== model.name;
            })
                .forEach(function (field) {
                return connectedModels.push(field.type.model);
            });
            modelAssociations.set(model.name, connectedModels);
        });
        var result = new Map();
        var count = 1000;
        while (true && count > 0) {
            if (modelAssociations.size === 0) {
                break;
            }
            count--;
            if (count === 0) {
                throw new Error('Models are not topologically sortable. Please verify your schema.');
            }
            try {
                for (var _b = (e_1 = void 0, __values(Array.from(modelAssociations.keys()))), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var modelName = _c.value;
                    var parents = modelAssociations.get(modelName);
                    if (parents.every(function (x) { return result.has(x); })) {
                        result.set(modelName, parents);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            Array.from(result.keys()).forEach(function (x) { return modelAssociations.delete(x); });
        }
        schema.namespaces[namespace].modelTopologicalOrdering = result;
    });
    return userClasses;
};
exports.initSchema = initSchema;
var createTypeClasses = function (namespace) {
    var classes = {};
    Object.entries(namespace.models).forEach(function (_a) {
        var _b = __read(_a, 2), modelName = _b[0], modelDefinition = _b[1];
        var clazz = createModelClass(modelDefinition);
        classes[modelName] = clazz;
        modelNamespaceMap.set(clazz, namespace.name);
    });
    Object.entries(namespace.nonModels || {}).forEach(function (_a) {
        var _b = __read(_a, 2), typeName = _b[0], typeDefinition = _b[1];
        var clazz = createNonModelClass(typeDefinition);
        classes[typeName] = clazz;
    });
    return classes;
};
var instancesMetadata = new WeakSet();
function modelInstanceCreator(modelConstructor, init) {
    instancesMetadata.add(init);
    return new modelConstructor(init);
}
var validateModelFields = function (modelDefinition) { return function (k, v) {
    var fieldDefinition = modelDefinition.fields[k];
    if (fieldDefinition !== undefined) {
        var type = fieldDefinition.type, isRequired_1 = fieldDefinition.isRequired, isArrayNullable = fieldDefinition.isArrayNullable, name_1 = fieldDefinition.name, isArray = fieldDefinition.isArray;
        if (((!isArray && isRequired_1) || (isArray && !isArrayNullable)) &&
            (v === null || v === undefined)) {
            throw new Error("Field " + name_1 + " is required");
        }
        if (types_1.isGraphQLScalarType(type)) {
            var jsType_1 = types_1.GraphQLScalarType.getJSType(type);
            var validateScalar_1 = types_1.GraphQLScalarType.getValidationFunction(type);
            if (isArray) {
                var errorTypeText = jsType_1;
                if (!isRequired_1) {
                    errorTypeText = jsType_1 + " | null | undefined";
                }
                if (!Array.isArray(v) && !isArrayNullable) {
                    throw new Error("Field " + name_1 + " should be of type [" + errorTypeText + "], " + typeof v + " received. " + v);
                }
                if (!util_1.isNullOrUndefined(v) &&
                    v.some(function (e) {
                        return util_1.isNullOrUndefined(e) ? isRequired_1 : typeof e !== jsType_1;
                    })) {
                    var elemTypes = v
                        .map(function (e) { return (e === null ? 'null' : typeof e); })
                        .join(',');
                    throw new Error("All elements in the " + name_1 + " array should be of type " + errorTypeText + ", [" + elemTypes + "] received. " + v);
                }
                if (validateScalar_1 && !util_1.isNullOrUndefined(v)) {
                    var validationStatus = v.map(function (e) {
                        if (!util_1.isNullOrUndefined(e)) {
                            return validateScalar_1(e);
                        }
                        else if (util_1.isNullOrUndefined(e) && !isRequired_1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    if (!validationStatus.every(function (s) { return s; })) {
                        throw new Error("All elements in the " + name_1 + " array should be of type " + type + ", validation failed for one or more elements. " + v);
                    }
                }
            }
            else if (!isRequired_1 && v === undefined) {
                return;
            }
            else if (typeof v !== jsType_1 && v !== null) {
                throw new Error("Field " + name_1 + " should be of type " + jsType_1 + ", " + typeof v + " received. " + v);
            }
            else if (!util_1.isNullOrUndefined(v) &&
                validateScalar_1 &&
                !validateScalar_1(v)) {
                throw new Error("Field " + name_1 + " should be of type " + type + ", validation failed. " + v);
            }
        }
    }
}; };
var initializeInstance = function (init, modelDefinition, draft) {
    var modelValidator = validateModelFields(modelDefinition);
    Object.entries(init).forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        modelValidator(k, v);
        draft[k] = v;
    });
};
var createModelClass = function (modelDefinition) {
    var clazz = /** @class */ (function () {
        function Model(init) {
            var instance = immer_1.produce(this, function (draft) {
                initializeInstance(init, modelDefinition, draft);
                var modelInstanceMetadata = instancesMetadata.has(init)
                    ? init
                    : {};
                var _id = modelInstanceMetadata.id, _version = modelInstanceMetadata._version, _lastChangedAt = modelInstanceMetadata._lastChangedAt, _deleted = modelInstanceMetadata._deleted;
                var id = 
                // instancesIds is set by modelInstanceCreator, it is accessible only internally
                _id !== null && _id !== undefined
                    ? _id
                    : modelDefinition.syncable
                        ? uuid_1.v4()
                        : ulid();
                draft.id = id;
                if (modelDefinition.syncable) {
                    draft._version = _version;
                    draft._lastChangedAt = _lastChangedAt;
                    draft._deleted = _deleted;
                }
            });
            return instance;
        }
        Model.copyOf = function (source, fn) {
            var modelConstructor = Object.getPrototypeOf(source || {}).constructor;
            if (!isValidModelConstructor(modelConstructor)) {
                var msg = 'The source object is not a valid model';
                logger.error(msg, { source: source });
                throw new Error(msg);
            }
            var patches;
            var model = immer_1.produce(source, function (draft) {
                fn(draft);
                draft.id = source.id;
                var modelValidator = validateModelFields(modelDefinition);
                Object.entries(draft).forEach(function (_a) {
                    var _b = __read(_a, 2), k = _b[0], v = _b[1];
                    modelValidator(k, v);
                });
            }, function (p) { return (patches = p); });
            if (patches.length) {
                modelPatchesMap.set(model, [patches, source]);
            }
            return model;
        };
        // "private" method (that's hidden via `Setting`) for `withSSRContext` to use
        // to gain access to `modelInstanceCreator` and `clazz` for persisting IDs from server to client.
        Model.fromJSON = function (json) {
            var _this = this;
            if (Array.isArray(json)) {
                return json.map(function (init) { return _this.fromJSON(init); });
            }
            var instance = modelInstanceCreator(clazz, json);
            var modelValidator = validateModelFields(modelDefinition);
            Object.entries(instance).forEach(function (_a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                modelValidator(k, v);
            });
            return instance;
        };
        return Model;
    }());
    clazz[immer_1.immerable] = true;
    Object.defineProperty(clazz, 'name', { value: modelDefinition.name });
    return clazz;
};
var createNonModelClass = function (typeDefinition) {
    var clazz = /** @class */ (function () {
        function Model(init) {
            var instance = immer_1.produce(this, function (draft) {
                initializeInstance(init, typeDefinition, draft);
            });
            return instance;
        }
        return Model;
    }());
    clazz[immer_1.immerable] = true;
    Object.defineProperty(clazz, 'name', { value: typeDefinition.name });
    return clazz;
};
function isQueryOne(obj) {
    return typeof obj === 'string';
}
function defaultConflictHandler(conflictData) {
    var localModel = conflictData.localModel, modelConstructor = conflictData.modelConstructor, remoteModel = conflictData.remoteModel;
    var _version = remoteModel._version;
    return modelInstanceCreator(modelConstructor, __assign(__assign({}, localModel), { _version: _version }));
}
function defaultErrorHandler(error) {
    logger.warn(error);
}
function getModelConstructorByModelName(namespaceName, modelName) {
    var result;
    switch (namespaceName) {
        case util_1.DATASTORE:
            result = dataStoreClasses[modelName];
            break;
        case util_1.USER:
            result = userClasses[modelName];
            break;
        case util_1.SYNC:
            result = exports.syncClasses[modelName];
            break;
        case util_1.STORAGE:
            result = storageClasses[modelName];
            break;
        default:
            util_1.exhaustiveCheck(namespaceName);
            break;
    }
    if (isValidModelConstructor(result)) {
        return result;
    }
    else {
        var msg = "Model name is not valid for namespace. modelName: " + modelName + ", namespace: " + namespaceName;
        logger.error(msg);
        throw new Error(msg);
    }
}
function checkSchemaVersion(storage, version) {
    return __awaiter(this, void 0, void 0, function () {
        var Setting, modelDefinition;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Setting = dataStoreClasses.Setting;
                    modelDefinition = schema.namespaces[util_1.DATASTORE].models.Setting;
                    return [4 /*yield*/, storage.runExclusive(function (s) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, schemaVersionSetting, storedValue;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, s.query(Setting, predicates_1.ModelPredicateCreator.createFromExisting(modelDefinition, function (c) {
                                            // @ts-ignore Argument of type '"eq"' is not assignable to parameter of type 'never'.
                                            return c.key('eq', SETTING_SCHEMA_VERSION);
                                        }), { page: 0, limit: 1 })];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 1]), schemaVersionSetting = _a[0];
                                        if (!(schemaVersionSetting !== undefined &&
                                            schemaVersionSetting.value !== undefined)) return [3 /*break*/, 4];
                                        storedValue = JSON.parse(schemaVersionSetting.value);
                                        if (!(storedValue !== version)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, s.clear(false)];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3: return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, s.save(modelInstanceCreator(Setting, {
                                            key: SETTING_SCHEMA_VERSION,
                                            value: JSON.stringify(version),
                                        }))];
                                    case 5:
                                        _b.sent();
                                        _b.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var syncSubscription;
function getNamespace() {
    var namespace = {
        name: util_1.DATASTORE,
        relationships: {},
        enums: {},
        nonModels: {},
        models: {
            Setting: {
                name: 'Setting',
                pluralName: 'Settings',
                syncable: false,
                fields: {
                    id: {
                        name: 'id',
                        type: 'ID',
                        isRequired: true,
                        isArray: false,
                    },
                    key: {
                        name: 'key',
                        type: 'String',
                        isRequired: true,
                        isArray: false,
                    },
                    value: {
                        name: 'value',
                        type: 'String',
                        isRequired: true,
                        isArray: false,
                    },
                },
            },
        },
    };
    return namespace;
}
var DataStore = /** @class */ (function () {
    function DataStore() {
        var _this = this;
        this.amplifyConfig = {};
        this.syncPredicates = new WeakMap();
        this.start = function () { return __awaiter(_this, void 0, void 0, function () {
            var aws_appsync_graphqlEndpoint, _a, fullSyncIntervalInMilliseconds;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.initialized === undefined)) return [3 /*break*/, 1];
                        logger.debug('Starting DataStore');
                        this.initialized = new Promise(function (res, rej) {
                            _this.initResolve = res;
                            _this.initReject = rej;
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.initialized];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                    case 3:
                        this.storage = new storage_1.ExclusiveStorage(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, undefined, this.sessionId);
                        return [4 /*yield*/, this.storage.init()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, checkSchemaVersion(this.storage, schema.version)];
                    case 5:
                        _b.sent();
                        aws_appsync_graphqlEndpoint = this.amplifyConfig.aws_appsync_graphqlEndpoint;
                        if (!aws_appsync_graphqlEndpoint) return [3 /*break*/, 7];
                        logger.debug('GraphQL endpoint available', aws_appsync_graphqlEndpoint);
                        _a = this;
                        return [4 /*yield*/, this.processSyncExpressions()];
                    case 6:
                        _a.syncPredicates = _b.sent();
                        this.sync = new sync_1.SyncEngine(schema, namespaceResolver, exports.syncClasses, userClasses, this.storage, modelInstanceCreator, this.maxRecordsToSync, this.syncPageSize, this.conflictHandler, this.errorHandler, this.syncPredicates, this.amplifyConfig, this.authModeStrategy);
                        fullSyncIntervalInMilliseconds = this.fullSyncInterval * 1000 * 60;
                        syncSubscription = this.sync
                            .start({ fullSyncInterval: fullSyncIntervalInMilliseconds })
                            .subscribe({
                            next: function (_a) {
                                var type = _a.type, data = _a.data;
                                // In Node, we need to wait for queries to be synced to prevent returning empty arrays.
                                // In the Browser, we can begin returning data once subscriptions are in place.
                                var readyType = isNode
                                    ? sync_1.ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY
                                    : sync_1.ControlMessage.SYNC_ENGINE_STORAGE_SUBSCRIBED;
                                if (type === readyType) {
                                    _this.initResolve();
                                }
                                core_1.Hub.dispatch('datastore', {
                                    event: type,
                                    data: data,
                                });
                            },
                            error: function (err) {
                                logger.warn('Sync error', err);
                                _this.initReject();
                            },
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        logger.warn("Data won't be synchronized. No GraphQL endpoint configured. Did you forget `Amplify.configure(awsconfig)`?", {
                            config: this.amplifyConfig,
                        });
                        this.initResolve();
                        _b.label = 8;
                    case 8: return [4 /*yield*/, this.initialized];
                    case 9:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.query = function (modelConstructor, idOrCriteria, paginationProducer) { return __awaiter(_this, void 0, void 0, function () {
            var msg, modelDefinition, predicate, pagination, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.start()];
                    case 1:
                        _a.sent();
                        //#region Input validation
                        if (!isValidModelConstructor(modelConstructor)) {
                            msg = 'Constructor is not for a valid model';
                            logger.error(msg, { modelConstructor: modelConstructor });
                            throw new Error(msg);
                        }
                        if (typeof idOrCriteria === 'string') {
                            if (paginationProducer !== undefined) {
                                logger.warn('Pagination is ignored when querying by id');
                            }
                        }
                        modelDefinition = getModelDefinition(modelConstructor);
                        if (isQueryOne(idOrCriteria)) {
                            predicate = predicates_1.ModelPredicateCreator.createForId(modelDefinition, idOrCriteria);
                        }
                        else {
                            if (predicates_1.isPredicatesAll(idOrCriteria)) {
                                // Predicates.ALL means "all records", so no predicate (undefined)
                                predicate = undefined;
                            }
                            else {
                                predicate = predicates_1.ModelPredicateCreator.createFromExisting(modelDefinition, idOrCriteria);
                            }
                        }
                        pagination = this.processPagination(modelDefinition, paginationProducer);
                        //#endregion
                        logger.debug('params ready', {
                            modelConstructor: modelConstructor,
                            predicate: predicates_1.ModelPredicateCreator.getPredicates(predicate, false),
                            pagination: __assign(__assign({}, pagination), { sort: predicates_1.ModelSortPredicateCreator.getPredicates(pagination && pagination.sort, false) }),
                        });
                        return [4 /*yield*/, this.storage.query(modelConstructor, predicate, pagination)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, isQueryOne(idOrCriteria) ? result[0] : result];
                }
            });
        }); };
        this.save = function (model, condition) { return __awaiter(_this, void 0, void 0, function () {
            var patchesTuple, modelConstructor, msg, modelDefinition, producedCondition, _a, savedModel;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.start()];
                    case 1:
                        _b.sent();
                        patchesTuple = modelPatchesMap.get(model);
                        modelConstructor = model
                            ? model.constructor
                            : undefined;
                        if (!isValidModelConstructor(modelConstructor)) {
                            msg = 'Object is not an instance of a valid model';
                            logger.error(msg, { model: model });
                            throw new Error(msg);
                        }
                        modelDefinition = getModelDefinition(modelConstructor);
                        producedCondition = predicates_1.ModelPredicateCreator.createFromExisting(modelDefinition, condition);
                        return [4 /*yield*/, this.storage.runExclusive(function (s) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, s.save(model, producedCondition, undefined, patchesTuple)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, s.query(modelConstructor, predicates_1.ModelPredicateCreator.createForId(modelDefinition, model.id))];
                                    }
                                });
                            }); })];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 1]), savedModel = _a[0];
                        return [2 /*return*/, savedModel];
                }
            });
        }); };
        this.setConflictHandler = function (config) {
            var configDataStore = config.DataStore;
            var conflictHandlerIsDefault = function () {
                return _this.conflictHandler === defaultConflictHandler;
            };
            if (configDataStore) {
                return configDataStore.conflictHandler;
            }
            if (conflictHandlerIsDefault() && config.conflictHandler) {
                return config.conflictHandler;
            }
            return _this.conflictHandler || defaultConflictHandler;
        };
        this.setErrorHandler = function (config) {
            var configDataStore = config.DataStore;
            var errorHandlerIsDefault = function () {
                return _this.errorHandler === defaultErrorHandler;
            };
            if (configDataStore) {
                return configDataStore.errorHandler;
            }
            if (errorHandlerIsDefault() && config.errorHandler) {
                return config.errorHandler;
            }
            return _this.errorHandler || defaultErrorHandler;
        };
        this.delete = function (modelOrConstructor, idOrCriteria) { return __awaiter(_this, void 0, void 0, function () {
            var condition, msg, modelConstructor, msg, msg, _a, deleted, model, modelConstructor, msg, modelDefinition, idPredicate, msg, _b, _c, deleted;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.start()];
                    case 1:
                        _d.sent();
                        if (!modelOrConstructor) {
                            msg = 'Model or Model Constructor required';
                            logger.error(msg, { modelOrConstructor: modelOrConstructor });
                            throw new Error(msg);
                        }
                        if (!isValidModelConstructor(modelOrConstructor)) return [3 /*break*/, 3];
                        modelConstructor = modelOrConstructor;
                        if (!idOrCriteria) {
                            msg = 'Id to delete or criteria required. Do you want to delete all? Pass Predicates.ALL';
                            logger.error(msg, { idOrCriteria: idOrCriteria });
                            throw new Error(msg);
                        }
                        if (typeof idOrCriteria === 'string') {
                            condition = predicates_1.ModelPredicateCreator.createForId(getModelDefinition(modelConstructor), idOrCriteria);
                        }
                        else {
                            condition = predicates_1.ModelPredicateCreator.createFromExisting(getModelDefinition(modelConstructor), 
                            /**
                             * idOrCriteria is always a ProducerModelPredicate<T>, never a symbol.
                             * The symbol is used only for typing purposes. e.g. see Predicates.ALL
                             */
                            idOrCriteria);
                            if (!condition || !predicates_1.ModelPredicateCreator.isValidPredicate(condition)) {
                                msg = 'Criteria required. Do you want to delete all? Pass Predicates.ALL';
                                logger.error(msg, { condition: condition });
                                throw new Error(msg);
                            }
                        }
                        return [4 /*yield*/, this.storage.delete(modelConstructor, condition)];
                    case 2:
                        _a = __read.apply(void 0, [_d.sent(), 1]), deleted = _a[0];
                        return [2 /*return*/, deleted];
                    case 3:
                        model = modelOrConstructor;
                        modelConstructor = Object.getPrototypeOf(model || {})
                            .constructor;
                        if (!isValidModelConstructor(modelConstructor)) {
                            msg = 'Object is not an instance of a valid model';
                            logger.error(msg, { model: model });
                            throw new Error(msg);
                        }
                        modelDefinition = getModelDefinition(modelConstructor);
                        idPredicate = predicates_1.ModelPredicateCreator.createForId(modelDefinition, model.id);
                        if (idOrCriteria) {
                            if (typeof idOrCriteria !== 'function') {
                                msg = 'Invalid criteria';
                                logger.error(msg, { idOrCriteria: idOrCriteria });
                                throw new Error(msg);
                            }
                            condition = idOrCriteria(idPredicate);
                        }
                        else {
                            condition = idPredicate;
                        }
                        return [4 /*yield*/, this.storage.delete(model, condition)];
                    case 4:
                        _b = __read.apply(void 0, [_d.sent(), 1]), _c = __read(_b[0], 1), deleted = _c[0];
                        return [2 /*return*/, deleted];
                }
            });
        }); };
        this.observe = function (modelOrConstructor, idOrCriteria) {
            var predicate;
            var modelConstructor = modelOrConstructor && isValidModelConstructor(modelOrConstructor)
                ? modelOrConstructor
                : undefined;
            if (modelOrConstructor && modelConstructor === undefined) {
                var model = modelOrConstructor;
                var modelConstructor_1 = model && Object.getPrototypeOf(model).constructor;
                if (isValidModelConstructor(modelConstructor_1)) {
                    if (idOrCriteria) {
                        logger.warn('idOrCriteria is ignored when using a model instance', {
                            model: model,
                            idOrCriteria: idOrCriteria,
                        });
                    }
                    return _this.observe(modelConstructor_1, model.id);
                }
                else {
                    var msg = 'The model is not an instance of a PersistentModelConstructor';
                    logger.error(msg, { model: model });
                    throw new Error(msg);
                }
            }
            if (idOrCriteria !== undefined && modelConstructor === undefined) {
                var msg = 'Cannot provide criteria without a modelConstructor';
                logger.error(msg, idOrCriteria);
                throw new Error(msg);
            }
            if (modelConstructor && !isValidModelConstructor(modelConstructor)) {
                var msg = 'Constructor is not for a valid model';
                logger.error(msg, { modelConstructor: modelConstructor });
                throw new Error(msg);
            }
            if (typeof idOrCriteria === 'string') {
                predicate = predicates_1.ModelPredicateCreator.createForId(getModelDefinition(modelConstructor), idOrCriteria);
            }
            else {
                predicate =
                    modelConstructor &&
                        predicates_1.ModelPredicateCreator.createFromExisting(getModelDefinition(modelConstructor), idOrCriteria);
            }
            return new zen_observable_ts_1.default(function (observer) {
                var handle;
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.start()];
                            case 1:
                                _a.sent();
                                handle = this.storage
                                    .observe(modelConstructor, predicate)
                                    .filter(function (_a) {
                                    var model = _a.model;
                                    return namespaceResolver(model) === util_1.USER;
                                })
                                    .subscribe(observer);
                                return [2 /*return*/];
                        }
                    });
                }); })();
                return function () {
                    if (handle) {
                        handle.unsubscribe();
                    }
                };
            });
        };
        this.configure = function (config) {
            if (config === void 0) { config = {}; }
            var configDataStore = config.DataStore, configAuthModeStrategyType = config.authModeStrategyType, configConflictHandler = config.conflictHandler, configErrorHandler = config.errorHandler, configMaxRecordsToSync = config.maxRecordsToSync, configSyncPageSize = config.syncPageSize, configFullSyncInterval = config.fullSyncInterval, configSyncExpressions = config.syncExpressions, configFromAmplify = __rest(config, ["DataStore", "authModeStrategyType", "conflictHandler", "errorHandler", "maxRecordsToSync", "syncPageSize", "fullSyncInterval", "syncExpressions"]);
            _this.amplifyConfig = __assign(__assign({}, configFromAmplify), _this.amplifyConfig);
            _this.conflictHandler = _this.setConflictHandler(config);
            _this.errorHandler = _this.setErrorHandler(config);
            var authModeStrategyType = (configDataStore && configDataStore.authModeStrategyType) ||
                configAuthModeStrategyType ||
                types_1.AuthModeStrategyType.DEFAULT;
            switch (authModeStrategyType) {
                case types_1.AuthModeStrategyType.MULTI_AUTH:
                    _this.authModeStrategy = authModeStrategies_1.multiAuthStrategy;
                    break;
                case types_1.AuthModeStrategyType.DEFAULT:
                    _this.authModeStrategy = authModeStrategies_1.defaultAuthStrategy;
                    break;
                default:
                    _this.authModeStrategy = authModeStrategies_1.defaultAuthStrategy;
                    break;
            }
            _this.syncExpressions =
                (configDataStore && configDataStore.syncExpressions) ||
                    _this.syncExpressions ||
                    configSyncExpressions;
            _this.maxRecordsToSync =
                (configDataStore && configDataStore.maxRecordsToSync) ||
                    _this.maxRecordsToSync ||
                    configMaxRecordsToSync;
            _this.syncPageSize =
                (configDataStore && configDataStore.syncPageSize) ||
                    _this.syncPageSize ||
                    configSyncPageSize;
            _this.fullSyncInterval =
                (configDataStore && configDataStore.fullSyncInterval) ||
                    _this.fullSyncInterval ||
                    configFullSyncInterval ||
                    24 * 60; // 1 day
            _this.sessionId = _this.retrieveSessionId();
        };
        this.clear = function clear() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.storage === undefined) {
                                return [2 /*return*/];
                            }
                            if (syncSubscription && !syncSubscription.closed) {
                                syncSubscription.unsubscribe();
                            }
                            return [4 /*yield*/, this.storage.clear()];
                        case 1:
                            _a.sent();
                            if (this.sync) {
                                this.sync.unsubscribeConnectivity();
                            }
                            this.initialized = undefined; // Should re-initialize when start() is called.
                            this.storage = undefined;
                            this.sync = undefined;
                            this.syncPredicates = new WeakMap();
                            return [2 /*return*/];
                    }
                });
            });
        };
        this.stop = function stop() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.initialized !== undefined)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.start()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (syncSubscription && !syncSubscription.closed) {
                                syncSubscription.unsubscribe();
                            }
                            if (this.sync) {
                                this.sync.unsubscribeConnectivity();
                            }
                            this.initialized = undefined; // Should re-initialize when start() is called.
                            this.sync = undefined;
                            return [2 /*return*/];
                    }
                });
            });
        };
    }
    DataStore.prototype.getModuleName = function () {
        return 'DataStore';
    };
    DataStore.prototype.processPagination = function (modelDefinition, paginationProducer) {
        var sortPredicate;
        var _a = paginationProducer || {}, limit = _a.limit, page = _a.page, sort = _a.sort;
        if (limit === undefined && page === undefined && sort === undefined) {
            return undefined;
        }
        if (page !== undefined && limit === undefined) {
            throw new Error('Limit is required when requesting a page');
        }
        if (page !== undefined) {
            if (typeof page !== 'number') {
                throw new Error('Page should be a number');
            }
            if (page < 0) {
                throw new Error("Page can't be negative");
            }
        }
        if (limit !== undefined) {
            if (typeof limit !== 'number') {
                throw new Error('Limit should be a number');
            }
            if (limit < 0) {
                throw new Error("Limit can't be negative");
            }
        }
        if (sort) {
            sortPredicate = predicates_1.ModelSortPredicateCreator.createFromExisting(modelDefinition, paginationProducer.sort);
        }
        return {
            limit: limit,
            page: page,
            sort: sortPredicate,
        };
    };
    DataStore.prototype.processSyncExpressions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var syncPredicates;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.syncExpressions || !this.syncExpressions.length) {
                            return [2 /*return*/, new WeakMap()];
                        }
                        return [4 /*yield*/, Promise.all(this.syncExpressions.map(function (syncExpression) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, modelConstructor, conditionProducer, modelDefinition, condition, predicate;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, syncExpression];
                                        case 1:
                                            _a = _b.sent(), modelConstructor = _a.modelConstructor, conditionProducer = _a.conditionProducer;
                                            modelDefinition = getModelDefinition(modelConstructor);
                                            return [4 /*yield*/, this.unwrapPromise(conditionProducer)];
                                        case 2:
                                            condition = _b.sent();
                                            if (predicates_1.isPredicatesAll(condition)) {
                                                return [2 /*return*/, [modelDefinition, null]];
                                            }
                                            predicate = this.createFromCondition(modelDefinition, condition);
                                            return [2 /*return*/, [modelDefinition, predicate]];
                                    }
                                });
                            }); }))];
                    case 1:
                        syncPredicates = _a.sent();
                        return [2 /*return*/, this.weakMapFromEntries(syncPredicates)];
                }
            });
        });
    };
    DataStore.prototype.createFromCondition = function (modelDefinition, condition) {
        try {
            return predicates_1.ModelPredicateCreator.createFromExisting(modelDefinition, condition);
        }
        catch (error) {
            logger.error('Error creating Sync Predicate');
            throw error;
        }
    };
    DataStore.prototype.unwrapPromise = function (conditionProducer) {
        return __awaiter(this, void 0, void 0, function () {
            var condition, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, conditionProducer()];
                    case 1:
                        condition = _a.sent();
                        return [2 /*return*/, condition];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof TypeError) {
                            return [2 /*return*/, conditionProducer];
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataStore.prototype.weakMapFromEntries = function (entries) {
        return entries.reduce(function (map, _a) {
            var _b = __read(_a, 2), modelDefinition = _b[0], predicate = _b[1];
            if (map.has(modelDefinition)) {
                var name_2 = modelDefinition.name;
                logger.warn("You can only utilize one Sync Expression per model.\n          Subsequent sync expressions for the " + name_2 + " model will be ignored.");
                return map;
            }
            if (predicate) {
                map.set(modelDefinition, predicate);
            }
            return map;
        }, new WeakMap());
    };
    // database separation for Amplify Console. Not a public API
    DataStore.prototype.retrieveSessionId = function () {
        try {
            var sessionId = sessionStorage.getItem('datastoreSessionId');
            if (sessionId) {
                var aws_appsync_graphqlEndpoint = this.amplifyConfig.aws_appsync_graphqlEndpoint;
                var appSyncUrl = aws_appsync_graphqlEndpoint.split('/')[2];
                var _a = __read(appSyncUrl.split('.'), 1), appSyncId = _a[0];
                return sessionId + "-" + appSyncId;
            }
        }
        catch (_b) {
            return undefined;
        }
    };
    return DataStore;
}());
exports.DataStoreClass = DataStore;
var instance = new DataStore();
exports.DataStore = instance;
core_1.Amplify.register(instance);
//# sourceMappingURL=datastore.js.map