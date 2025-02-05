"use strict";
/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aws-amplify/core");
exports.Amplify = core_1.Amplify;
var auth_1 = require("@aws-amplify/auth");
var cache_1 = __importDefault(require("@aws-amplify/cache"));
/** Always importing Auth when users import Amplify such that
    for unauthenticated access (no sign in and sign up),
    users don't have to import Auth explicitly **/
core_1.Amplify.Auth = auth_1.Auth;
core_1.Amplify.Cache = cache_1.default;
core_1.Amplify.ServiceWorker = core_1.ServiceWorker;
var analytics_1 = require("@aws-amplify/analytics");
exports.Analytics = analytics_1.Analytics;
exports.AWSPinpointProvider = analytics_1.AWSPinpointProvider;
exports.AWSKinesisProvider = analytics_1.AWSKinesisProvider;
exports.AWSKinesisFirehoseProvider = analytics_1.AWSKinesisFirehoseProvider;
exports.AmazonPersonalizeProvider = analytics_1.AmazonPersonalizeProvider;
var auth_2 = require("@aws-amplify/auth");
exports.Auth = auth_2.Auth;
var storage_1 = require("@aws-amplify/storage");
exports.Storage = storage_1.Storage;
exports.StorageClass = storage_1.StorageClass;
var api_1 = require("@aws-amplify/api");
exports.API = api_1.API;
exports.APIClass = api_1.APIClass;
exports.graphqlOperation = api_1.graphqlOperation;
var datastore_1 = require("@aws-amplify/datastore");
exports.AuthModeStrategyType = datastore_1.AuthModeStrategyType;
exports.DataStore = datastore_1.DataStore;
exports.Predicates = datastore_1.Predicates;
exports.SortDirection = datastore_1.SortDirection;
exports.syncExpression = datastore_1.syncExpression;
var pubsub_1 = require("@aws-amplify/pubsub");
exports.PubSub = pubsub_1.PubSub;
var cache_2 = require("@aws-amplify/cache");
exports.Cache = cache_2.default;
var interactions_1 = require("@aws-amplify/interactions");
exports.Interactions = interactions_1.Interactions;
__export(require("@aws-amplify/ui"));
var xr_1 = require("@aws-amplify/xr");
exports.XR = xr_1.XR;
var predictions_1 = require("@aws-amplify/predictions");
exports.Predictions = predictions_1.Predictions;
var core_2 = require("@aws-amplify/core");
exports.Logger = core_2.ConsoleLogger;
exports.Hub = core_2.Hub;
exports.JS = core_2.JS;
exports.ClientDevice = core_2.ClientDevice;
exports.Signer = core_2.Signer;
exports.I18n = core_2.I18n;
exports.ServiceWorker = core_2.ServiceWorker;
var withSSRContext_1 = require("./withSSRContext");
exports.withSSRContext = withSSRContext_1.withSSRContext;
/**
 * @deprecated use named import
 */
exports.default = core_1.Amplify;
//# sourceMappingURL=index.js.map