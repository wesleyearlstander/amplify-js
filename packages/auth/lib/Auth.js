"use strict";
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *	 http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
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
var types_1 = require("./types");
var core_1 = require("@aws-amplify/core");
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var url_1 = require("url");
var OAuth_1 = __importDefault(require("./OAuth/OAuth"));
var urlListener_1 = __importDefault(require("./urlListener"));
var Errors_1 = require("./Errors");
var Auth_1 = require("./types/Auth");
var logger = new core_1.ConsoleLogger('AuthClass');
var USER_ADMIN_SCOPE = 'aws.cognito.signin.user.admin';
// 10 sec, following this guide https://www.nngroup.com/articles/response-times-3-important-limits/
var OAUTH_FLOW_MS_TIMEOUT = 10 * 1000;
var AMPLIFY_SYMBOL = (typeof Symbol !== 'undefined' &&
    typeof Symbol.for === 'function'
    ? Symbol.for('amplify_default')
    : '@@amplify_default');
var dispatchAuthEvent = function (event, data, message) {
    core_1.Hub.dispatch('auth', { event: event, data: data, message: message }, 'Auth', AMPLIFY_SYMBOL);
};
/**
 * Provide authentication steps
 */
var AuthClass = /** @class */ (function () {
    /**
     * Initialize Auth with AWS configurations
     * @param {Object} config - Configuration of the Auth
     */
    function AuthClass(config) {
        var _this = this;
        this.userPool = null;
        this.user = null;
        this.oAuthFlowInProgress = false;
        this.Credentials = core_1.Credentials;
        this.wrapRefreshSessionCallback = function (callback) {
            var wrapped = function (error, data) {
                if (data) {
                    dispatchAuthEvent('tokenRefresh', undefined, "New token retrieved");
                }
                else {
                    dispatchAuthEvent('tokenRefresh_failure', error, "Failed to retrieve new token");
                }
                return callback(error, data);
            };
            return wrapped;
        }; // prettier-ignore
        this.configure(config);
        this.currentCredentials = this.currentCredentials.bind(this);
        this.currentUserCredentials = this.currentUserCredentials.bind(this);
        core_1.Hub.listen('auth', function (_a) {
            var payload = _a.payload;
            var event = payload.event;
            switch (event) {
                case 'signIn':
                    _this._storage.setItem('amplify-signin-with-hostedUI', 'false');
                    break;
                case 'signOut':
                    _this._storage.removeItem('amplify-signin-with-hostedUI');
                    break;
                case 'cognitoHostedUI':
                    _this._storage.setItem('amplify-signin-with-hostedUI', 'true');
                    break;
            }
        });
    }
    AuthClass.prototype.getModuleName = function () {
        return 'Auth';
    };
    AuthClass.prototype.configure = function (config) {
        var _this = this;
        if (!config)
            return this._config || {};
        logger.debug('configure Auth');
        var conf = Object.assign({}, this._config, core_1.Parser.parseMobilehubConfig(config).Auth, config);
        this._config = conf;
        var _a = this._config, userPoolId = _a.userPoolId, userPoolWebClientId = _a.userPoolWebClientId, cookieStorage = _a.cookieStorage, oauth = _a.oauth, region = _a.region, identityPoolId = _a.identityPoolId, mandatorySignIn = _a.mandatorySignIn, refreshHandlers = _a.refreshHandlers, identityPoolRegion = _a.identityPoolRegion, clientMetadata = _a.clientMetadata, endpoint = _a.endpoint;
        if (!this._config.storage) {
            // backward compatability
            if (cookieStorage)
                this._storage = new amazon_cognito_identity_js_1.CookieStorage(cookieStorage);
            else {
                this._storage = config.ssr
                    ? new core_1.UniversalStorage()
                    : new core_1.StorageHelper().getStorage();
            }
        }
        else {
            if (!this._isValidAuthStorage(this._config.storage)) {
                logger.error('The storage in the Auth config is not valid!');
                throw new Error('Empty storage object');
            }
            this._storage = this._config.storage;
        }
        this._storageSync = Promise.resolve();
        if (typeof this._storage['sync'] === 'function') {
            this._storageSync = this._storage['sync']();
        }
        if (userPoolId) {
            var userPoolData = {
                UserPoolId: userPoolId,
                ClientId: userPoolWebClientId,
                endpoint: endpoint,
            };
            userPoolData.Storage = this._storage;
            this.userPool = new amazon_cognito_identity_js_1.CognitoUserPool(userPoolData, this.wrapRefreshSessionCallback);
        }
        this.Credentials.configure({
            mandatorySignIn: mandatorySignIn,
            region: identityPoolRegion || region,
            userPoolId: userPoolId,
            identityPoolId: identityPoolId,
            refreshHandlers: refreshHandlers,
            storage: this._storage,
        });
        // initialize cognitoauth client if hosted ui options provided
        // to keep backward compatibility:
        var cognitoHostedUIConfig = oauth
            ? types_1.isCognitoHostedOpts(this._config.oauth)
                ? oauth
                : oauth.awsCognito
            : undefined;
        if (cognitoHostedUIConfig) {
            var cognitoAuthParams = Object.assign({
                cognitoClientId: userPoolWebClientId,
                UserPoolId: userPoolId,
                domain: cognitoHostedUIConfig['domain'],
                scopes: cognitoHostedUIConfig['scope'],
                redirectSignIn: cognitoHostedUIConfig['redirectSignIn'],
                redirectSignOut: cognitoHostedUIConfig['redirectSignOut'],
                responseType: cognitoHostedUIConfig['responseType'],
                Storage: this._storage,
                urlOpener: cognitoHostedUIConfig['urlOpener'],
                clientMetadata: clientMetadata,
            }, cognitoHostedUIConfig['options']);
            this._oAuthHandler = new OAuth_1.default({
                scopes: cognitoAuthParams.scopes,
                config: cognitoAuthParams,
                cognitoClientId: cognitoAuthParams.cognitoClientId,
            });
            // **NOTE** - Remove this in a future major release as it is a breaking change
            // Prevents _handleAuthResponse from being called multiple times in Expo
            // See https://github.com/aws-amplify/amplify-js/issues/4388
            var usedResponseUrls_1 = {};
            urlListener_1.default(function (_a) {
                var url = _a.url;
                if (usedResponseUrls_1[url]) {
                    return;
                }
                usedResponseUrls_1[url] = true;
                _this._handleAuthResponse(url);
            });
        }
        dispatchAuthEvent('configured', null, "The Auth category has been configured successfully");
        return this._config;
    };
    /**
     * Sign up with username, password and other attributes like phone, email
     * @param {String | object} params - The user attributes used for signin
     * @param {String[]} restOfAttrs - for the backward compatability
     * @return - A promise resolves callback data if success
     */
    AuthClass.prototype.signUp = function (params) {
        var _this = this;
        var restOfAttrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfAttrs[_i - 1] = arguments[_i];
        }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        var username = null;
        var password = null;
        var attributes = [];
        var validationData = null;
        var clientMetadata;
        if (params && typeof params === 'string') {
            username = params;
            password = restOfAttrs ? restOfAttrs[0] : null;
            var email = restOfAttrs ? restOfAttrs[1] : null;
            var phone_number = restOfAttrs ? restOfAttrs[2] : null;
            if (email)
                attributes.push(new amazon_cognito_identity_js_1.CognitoUserAttribute({ Name: 'email', Value: email }));
            if (phone_number)
                attributes.push(new amazon_cognito_identity_js_1.CognitoUserAttribute({
                    Name: 'phone_number',
                    Value: phone_number,
                }));
        }
        else if (params && typeof params === 'object') {
            username = params['username'];
            password = params['password'];
            if (params && params.clientMetadata) {
                clientMetadata = params.clientMetadata;
            }
            else if (this._config.clientMetadata) {
                clientMetadata = this._config.clientMetadata;
            }
            var attrs_1 = params['attributes'];
            if (attrs_1) {
                Object.keys(attrs_1).map(function (key) {
                    attributes.push(new amazon_cognito_identity_js_1.CognitoUserAttribute({ Name: key, Value: attrs_1[key] }));
                });
            }
            var validationDataObject_1 = params['validationData'];
            if (validationDataObject_1) {
                validationData = [];
                Object.keys(validationDataObject_1).map(function (key) {
                    validationData.push(new amazon_cognito_identity_js_1.CognitoUserAttribute({
                        Name: key,
                        Value: validationDataObject_1[key],
                    }));
                });
            }
        }
        else {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.SignUpError);
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        if (!password) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyPassword);
        }
        logger.debug('signUp attrs:', attributes);
        logger.debug('signUp validation data:', validationData);
        return new Promise(function (resolve, reject) {
            _this.userPool.signUp(username, password, attributes, validationData, function (err, data) {
                if (err) {
                    dispatchAuthEvent('signUp_failure', err, username + " failed to signup");
                    reject(err);
                }
                else {
                    dispatchAuthEvent('signUp', data, username + " has signed up successfully");
                    resolve(data);
                }
            }, clientMetadata);
        });
    };
    /**
     * Send the verification code to confirm sign up
     * @param {String} username - The username to be confirmed
     * @param {String} code - The verification code
     * @param {ConfirmSignUpOptions} options - other options for confirm signup
     * @return - A promise resolves callback data if success
     */
    AuthClass.prototype.confirmSignUp = function (username, code, options) {
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        if (!code) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyCode);
        }
        var user = this.createCognitoUser(username);
        var forceAliasCreation = options && typeof options.forceAliasCreation === 'boolean'
            ? options.forceAliasCreation
            : true;
        var clientMetadata;
        if (options && options.clientMetadata) {
            clientMetadata = options.clientMetadata;
        }
        else if (this._config.clientMetadata) {
            clientMetadata = this._config.clientMetadata;
        }
        return new Promise(function (resolve, reject) {
            user.confirmRegistration(code, forceAliasCreation, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            }, clientMetadata);
        });
    };
    /**
     * Resend the verification code
     * @param {String} username - The username to be confirmed
     * @param {ClientMetadata} clientMetadata - Metadata to be passed to Cognito Lambda triggers
     * @return - A promise resolves code delivery details if successful
     */
    AuthClass.prototype.resendSignUp = function (username, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        var user = this.createCognitoUser(username);
        return new Promise(function (resolve, reject) {
            user.resendConfirmationCode(function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            }, clientMetadata);
        });
    };
    /**
     * Sign in
     * @param {String | SignInOpts} usernameOrSignInOpts - The username to be signed in or the sign in options
     * @param {String} password - The password of the username
     * @return - A promise resolves the CognitoUser
     */
    AuthClass.prototype.signIn = function (usernameOrSignInOpts, pw, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        var username = null;
        var password = null;
        var validationData = {};
        // for backward compatibility
        if (typeof usernameOrSignInOpts === 'string') {
            username = usernameOrSignInOpts;
            password = pw;
        }
        else if (types_1.isUsernamePasswordOpts(usernameOrSignInOpts)) {
            if (typeof pw !== 'undefined') {
                logger.warn('The password should be defined under the first parameter object!');
            }
            username = usernameOrSignInOpts.username;
            password = usernameOrSignInOpts.password;
            validationData = usernameOrSignInOpts.validationData;
        }
        else {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.InvalidUsername);
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        var authDetails = new amazon_cognito_identity_js_1.AuthenticationDetails({
            Username: username,
            Password: password,
            ValidationData: validationData,
            ClientMetadata: clientMetadata,
        });
        if (password) {
            return this.signInWithPassword(authDetails);
        }
        else {
            return this.signInWithoutPassword(authDetails);
        }
    };
    /**
     * Return an object with the authentication callbacks
     * @param {CognitoUser} user - the cognito user object
     * @param {} resolve - function called when resolving the current step
     * @param {} reject - function called when rejecting the current step
     * @return - an object with the callback methods for user authentication
     */
    AuthClass.prototype.authCallbacks = function (user, resolve, reject) {
        var _this = this;
        var that = this;
        return {
            onSuccess: function (session) { return __awaiter(_this, void 0, void 0, function () {
                var cred, e_1, currentUser, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            logger.debug(session);
                            delete user['challengeName'];
                            delete user['challengeParam'];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, 5, 9]);
                            return [4 /*yield*/, this.Credentials.clear()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.Credentials.set(session, 'session')];
                        case 3:
                            cred = _a.sent();
                            logger.debug('succeed to get cognito credentials', cred);
                            return [3 /*break*/, 9];
                        case 4:
                            e_1 = _a.sent();
                            logger.debug('cannot get cognito credentials', e_1);
                            return [3 /*break*/, 9];
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.currentUserPoolUser()];
                        case 6:
                            currentUser = _a.sent();
                            that.user = currentUser;
                            dispatchAuthEvent('signIn', currentUser, "A user " + user.getUsername() + " has been signed in");
                            resolve(currentUser);
                            return [3 /*break*/, 8];
                        case 7:
                            e_2 = _a.sent();
                            logger.error('Failed to get the signed in user', e_2);
                            reject(e_2);
                            return [3 /*break*/, 8];
                        case 8: return [7 /*endfinally*/];
                        case 9: return [2 /*return*/];
                    }
                });
            }); },
            onFailure: function (err) {
                logger.debug('signIn failure', err);
                dispatchAuthEvent('signIn_failure', err, user.getUsername() + " failed to signin");
                reject(err);
            },
            customChallenge: function (challengeParam) {
                logger.debug('signIn custom challenge answer required');
                user['challengeName'] = 'CUSTOM_CHALLENGE';
                user['challengeParam'] = challengeParam;
                resolve(user);
            },
            mfaRequired: function (challengeName, challengeParam) {
                logger.debug('signIn MFA required');
                user['challengeName'] = challengeName;
                user['challengeParam'] = challengeParam;
                resolve(user);
            },
            mfaSetup: function (challengeName, challengeParam) {
                logger.debug('signIn mfa setup', challengeName);
                user['challengeName'] = challengeName;
                user['challengeParam'] = challengeParam;
                resolve(user);
            },
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                logger.debug('signIn new password');
                user['challengeName'] = 'NEW_PASSWORD_REQUIRED';
                user['challengeParam'] = {
                    userAttributes: userAttributes,
                    requiredAttributes: requiredAttributes,
                };
                resolve(user);
            },
            totpRequired: function (challengeName, challengeParam) {
                logger.debug('signIn totpRequired');
                user['challengeName'] = challengeName;
                user['challengeParam'] = challengeParam;
                resolve(user);
            },
            selectMFAType: function (challengeName, challengeParam) {
                logger.debug('signIn selectMFAType', challengeName);
                user['challengeName'] = challengeName;
                user['challengeParam'] = challengeParam;
                resolve(user);
            },
        };
    };
    /**
     * Sign in with a password
     * @private
     * @param {AuthenticationDetails} authDetails - the user sign in data
     * @return - A promise resolves the CognitoUser object if success or mfa required
     */
    AuthClass.prototype.signInWithPassword = function (authDetails) {
        var _this = this;
        if (this.pendingSignIn) {
            throw new Error('Pending sign-in attempt already in progress');
        }
        var user = this.createCognitoUser(authDetails.getUsername());
        this.pendingSignIn = new Promise(function (resolve, reject) {
            user.authenticateUser(authDetails, _this.authCallbacks(user, function (value) {
                _this.pendingSignIn = null;
                resolve(value);
            }, function (error) {
                _this.pendingSignIn = null;
                reject(error);
            }));
        });
        return this.pendingSignIn;
    };
    /**
     * Sign in without a password
     * @private
     * @param {AuthenticationDetails} authDetails - the user sign in data
     * @return - A promise resolves the CognitoUser object if success or mfa required
     */
    AuthClass.prototype.signInWithoutPassword = function (authDetails) {
        var _this = this;
        var user = this.createCognitoUser(authDetails.getUsername());
        user.setAuthenticationFlowType('CUSTOM_AUTH');
        return new Promise(function (resolve, reject) {
            user.initiateAuth(authDetails, _this.authCallbacks(user, resolve, reject));
        });
    };
    /**
     * This was previously used by an authenticated user to get MFAOptions,
     * but no longer returns a meaningful response. Refer to the documentation for
     * how to setup and use MFA: https://docs.amplify.aws/lib/auth/mfa/q/platform/js
     * @deprecated
     * @param {CognitoUser} user - the current user
     * @return - A promise resolves the current preferred mfa option if success
     */
    AuthClass.prototype.getMFAOptions = function (user) {
        return new Promise(function (res, rej) {
            user.getMFAOptions(function (err, mfaOptions) {
                if (err) {
                    logger.debug('get MFA Options failed', err);
                    rej(err);
                    return;
                }
                logger.debug('get MFA options success', mfaOptions);
                res(mfaOptions);
                return;
            });
        });
    };
    /**
     * get preferred mfa method
     * @param {CognitoUser} user - the current cognito user
     * @param {GetPreferredMFAOpts} params - options for getting the current user preferred MFA
     */
    AuthClass.prototype.getPreferredMFA = function (user, params) {
        var _this = this;
        var that = this;
        return new Promise(function (res, rej) {
            var clientMetadata = _this._config.clientMetadata; // TODO: verify behavior if this is override during signIn
            var bypassCache = params ? params.bypassCache : false;
            user.getUserData(function (err, data) {
                if (err) {
                    logger.debug('getting preferred mfa failed', err);
                    rej(err);
                    return;
                }
                var mfaType = that._getMfaTypeFromUserData(data);
                if (!mfaType) {
                    rej('invalid MFA Type');
                    return;
                }
                else {
                    res(mfaType);
                    return;
                }
            }, { bypassCache: bypassCache, clientMetadata: clientMetadata });
        });
    };
    AuthClass.prototype._getMfaTypeFromUserData = function (data) {
        var ret = null;
        var preferredMFA = data.PreferredMfaSetting;
        // if the user has used Auth.setPreferredMFA() to setup the mfa type
        // then the "PreferredMfaSetting" would exist in the response
        if (preferredMFA) {
            ret = preferredMFA;
        }
        else {
            // if mfaList exists but empty, then its noMFA
            var mfaList = data.UserMFASettingList;
            if (!mfaList) {
                // if SMS was enabled by using Auth.enableSMS(),
                // the response would contain MFAOptions
                // as for now Cognito only supports for SMS, so we will say it is 'SMS_MFA'
                // if it does not exist, then it should be NOMFA
                var MFAOptions = data.MFAOptions;
                if (MFAOptions) {
                    ret = 'SMS_MFA';
                }
                else {
                    ret = 'NOMFA';
                }
            }
            else if (mfaList.length === 0) {
                ret = 'NOMFA';
            }
            else {
                logger.debug('invalid case for getPreferredMFA', data);
            }
        }
        return ret;
    };
    AuthClass.prototype._getUserData = function (user, params) {
        return new Promise(function (res, rej) {
            user.getUserData(function (err, data) {
                if (err) {
                    logger.debug('getting user data failed', err);
                    rej(err);
                    return;
                }
                else {
                    res(data);
                    return;
                }
            }, params);
        });
    };
    /**
     * set preferred MFA method
     * @param {CognitoUser} user - the current Cognito user
     * @param {string} mfaMethod - preferred mfa method
     * @return - A promise resolve if success
     */
    AuthClass.prototype.setPreferredMFA = function (user, mfaMethod) {
        return __awaiter(this, void 0, void 0, function () {
            var clientMetadata, userData, smsMfaSettings, totpMfaSettings, _a, mfaList, currentMFAType, that;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        clientMetadata = this._config.clientMetadata;
                        return [4 /*yield*/, this._getUserData(user, {
                                bypassCache: true,
                                clientMetadata: clientMetadata,
                            })];
                    case 1:
                        userData = _b.sent();
                        smsMfaSettings = null;
                        totpMfaSettings = null;
                        _a = mfaMethod;
                        switch (_a) {
                            case 'TOTP' || 'SOFTWARE_TOKEN_MFA': return [3 /*break*/, 2];
                            case 'SMS' || 'SMS_MFA': return [3 /*break*/, 3];
                            case 'NOMFA': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        totpMfaSettings = {
                            PreferredMfa: true,
                            Enabled: true,
                        };
                        return [3 /*break*/, 7];
                    case 3:
                        smsMfaSettings = {
                            PreferredMfa: true,
                            Enabled: true,
                        };
                        return [3 /*break*/, 7];
                    case 4:
                        mfaList = userData['UserMFASettingList'];
                        return [4 /*yield*/, this._getMfaTypeFromUserData(userData)];
                    case 5:
                        currentMFAType = _b.sent();
                        if (currentMFAType === 'NOMFA') {
                            return [2 /*return*/, Promise.resolve('No change for mfa type')];
                        }
                        else if (currentMFAType === 'SMS_MFA') {
                            smsMfaSettings = {
                                PreferredMfa: false,
                                Enabled: false,
                            };
                        }
                        else if (currentMFAType === 'SOFTWARE_TOKEN_MFA') {
                            totpMfaSettings = {
                                PreferredMfa: false,
                                Enabled: false,
                            };
                        }
                        else {
                            return [2 /*return*/, this.rejectAuthError(Auth_1.AuthErrorTypes.InvalidMFA)];
                        }
                        // if there is a UserMFASettingList in the response
                        // we need to disable every mfa type in that list
                        if (mfaList && mfaList.length !== 0) {
                            // to disable SMS or TOTP if exists in that list
                            mfaList.forEach(function (mfaType) {
                                if (mfaType === 'SMS_MFA') {
                                    smsMfaSettings = {
                                        PreferredMfa: false,
                                        Enabled: false,
                                    };
                                }
                                else if (mfaType === 'SOFTWARE_TOKEN_MFA') {
                                    totpMfaSettings = {
                                        PreferredMfa: false,
                                        Enabled: false,
                                    };
                                }
                            });
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        logger.debug('no validmfa method provided');
                        return [2 /*return*/, this.rejectAuthError(Auth_1.AuthErrorTypes.NoMFA)];
                    case 7:
                        that = this;
                        return [2 /*return*/, new Promise(function (res, rej) {
                                user.setUserMfaPreference(smsMfaSettings, totpMfaSettings, function (err, result) {
                                    if (err) {
                                        logger.debug('Set user mfa preference error', err);
                                        return rej(err);
                                    }
                                    logger.debug('Set user mfa success', result);
                                    logger.debug('Caching the latest user data into local');
                                    // cache the latest result into user data
                                    user.getUserData(function (err, data) {
                                        if (err) {
                                            logger.debug('getting user data failed', err);
                                            return rej(err);
                                        }
                                        else {
                                            return res(result);
                                        }
                                    }, {
                                        bypassCache: true,
                                        clientMetadata: clientMetadata,
                                    });
                                });
                            })];
                }
            });
        });
    };
    /**
     * diable SMS
     * @deprecated
     * @param {CognitoUser} user - the current user
     * @return - A promise resolves is success
     */
    AuthClass.prototype.disableSMS = function (user) {
        return new Promise(function (res, rej) {
            user.disableMFA(function (err, data) {
                if (err) {
                    logger.debug('disable mfa failed', err);
                    rej(err);
                    return;
                }
                logger.debug('disable mfa succeed', data);
                res(data);
                return;
            });
        });
    };
    /**
     * enable SMS
     * @deprecated
     * @param {CognitoUser} user - the current user
     * @return - A promise resolves is success
     */
    AuthClass.prototype.enableSMS = function (user) {
        return new Promise(function (res, rej) {
            user.enableMFA(function (err, data) {
                if (err) {
                    logger.debug('enable mfa failed', err);
                    rej(err);
                    return;
                }
                logger.debug('enable mfa succeed', data);
                res(data);
                return;
            });
        });
    };
    /**
     * Setup TOTP
     * @param {CognitoUser} user - the current user
     * @return - A promise resolves with the secret code if success
     */
    AuthClass.prototype.setupTOTP = function (user) {
        return new Promise(function (res, rej) {
            user.associateSoftwareToken({
                onFailure: function (err) {
                    logger.debug('associateSoftwareToken failed', err);
                    rej(err);
                    return;
                },
                associateSecretCode: function (secretCode) {
                    logger.debug('associateSoftwareToken sucess', secretCode);
                    res(secretCode);
                    return;
                },
            });
        });
    };
    /**
     * verify TOTP setup
     * @param {CognitoUser} user - the current user
     * @param {string} challengeAnswer - challenge answer
     * @return - A promise resolves is success
     */
    AuthClass.prototype.verifyTotpToken = function (user, challengeAnswer) {
        logger.debug('verification totp token', user, challengeAnswer);
        return new Promise(function (res, rej) {
            user.verifySoftwareToken(challengeAnswer, 'My TOTP device', {
                onFailure: function (err) {
                    logger.debug('verifyTotpToken failed', err);
                    rej(err);
                    return;
                },
                onSuccess: function (data) {
                    dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
                    logger.debug('verifyTotpToken success', data);
                    res(data);
                    return;
                },
            });
        });
    };
    /**
     * Send MFA code to confirm sign in
     * @param {Object} user - The CognitoUser object
     * @param {String} code - The confirmation code
     */
    AuthClass.prototype.confirmSignIn = function (user, code, mfaType, clientMetadata) {
        var _this = this;
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!code) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyCode);
        }
        var that = this;
        return new Promise(function (resolve, reject) {
            user.sendMFACode(code, {
                onSuccess: function (session) { return __awaiter(_this, void 0, void 0, function () {
                    var cred, e_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.debug(session);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, 5, 6]);
                                return [4 /*yield*/, this.Credentials.clear()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.Credentials.set(session, 'session')];
                            case 3:
                                cred = _a.sent();
                                logger.debug('succeed to get cognito credentials', cred);
                                return [3 /*break*/, 6];
                            case 4:
                                e_3 = _a.sent();
                                logger.debug('cannot get cognito credentials', e_3);
                                return [3 /*break*/, 6];
                            case 5:
                                that.user = user;
                                dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
                                resolve(user);
                                return [7 /*endfinally*/];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); },
                onFailure: function (err) {
                    logger.debug('confirm signIn failure', err);
                    reject(err);
                },
            }, mfaType, clientMetadata);
        });
    };
    AuthClass.prototype.completeNewPassword = function (user, password, requiredAttributes, clientMetadata) {
        var _this = this;
        if (requiredAttributes === void 0) { requiredAttributes = {}; }
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!password) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyPassword);
        }
        var that = this;
        return new Promise(function (resolve, reject) {
            user.completeNewPasswordChallenge(password, requiredAttributes, {
                onSuccess: function (session) { return __awaiter(_this, void 0, void 0, function () {
                    var cred, e_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.debug(session);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, 5, 6]);
                                return [4 /*yield*/, this.Credentials.clear()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.Credentials.set(session, 'session')];
                            case 3:
                                cred = _a.sent();
                                logger.debug('succeed to get cognito credentials', cred);
                                return [3 /*break*/, 6];
                            case 4:
                                e_4 = _a.sent();
                                logger.debug('cannot get cognito credentials', e_4);
                                return [3 /*break*/, 6];
                            case 5:
                                that.user = user;
                                dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
                                resolve(user);
                                return [7 /*endfinally*/];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); },
                onFailure: function (err) {
                    logger.debug('completeNewPassword failure', err);
                    dispatchAuthEvent('completeNewPassword_failure', err, _this.user + " failed to complete the new password flow");
                    reject(err);
                },
                mfaRequired: function (challengeName, challengeParam) {
                    logger.debug('signIn MFA required');
                    user['challengeName'] = challengeName;
                    user['challengeParam'] = challengeParam;
                    resolve(user);
                },
                mfaSetup: function (challengeName, challengeParam) {
                    logger.debug('signIn mfa setup', challengeName);
                    user['challengeName'] = challengeName;
                    user['challengeParam'] = challengeParam;
                    resolve(user);
                },
                totpRequired: function (challengeName, challengeParam) {
                    logger.debug('signIn mfa setup', challengeName);
                    user['challengeName'] = challengeName;
                    user['challengeParam'] = challengeParam;
                    resolve(user);
                },
            }, clientMetadata);
        });
    };
    /**
     * Send the answer to a custom challenge
     * @param {CognitoUser} user - The CognitoUser object
     * @param {String} challengeResponses - The confirmation code
     */
    AuthClass.prototype.sendCustomChallengeAnswer = function (user, challengeResponses, clientMetadata) {
        var _this = this;
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        if (!challengeResponses) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyChallengeResponse);
        }
        var that = this;
        return new Promise(function (resolve, reject) {
            user.sendCustomChallengeAnswer(challengeResponses, _this.authCallbacks(user, resolve, reject), clientMetadata);
        });
    };
    /**
     * Update an authenticated users' attributes
     * @param {CognitoUser} - The currently logged in user object
     * @return {Promise}
     **/
    AuthClass.prototype.updateUserAttributes = function (user, attributes, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        var attributeList = [];
        var that = this;
        return new Promise(function (resolve, reject) {
            that.userSession(user).then(function (session) {
                for (var key in attributes) {
                    if (key !== 'sub' && key.indexOf('_verified') < 0) {
                        var attr = {
                            Name: key,
                            Value: attributes[key],
                        };
                        attributeList.push(attr);
                    }
                }
                user.updateAttributes(attributeList, function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        return resolve(result);
                    }
                }, clientMetadata);
            });
        });
    };
    /**
     * Return user attributes
     * @param {Object} user - The CognitoUser object
     * @return - A promise resolves to user attributes if success
     */
    AuthClass.prototype.userAttributes = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userSession(user).then(function (session) {
                user.getUserAttributes(function (err, attributes) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(attributes);
                    }
                });
            });
        });
    };
    AuthClass.prototype.verifiedContact = function (user) {
        var that = this;
        return this.userAttributes(user).then(function (attributes) {
            var attrs = that.attributesToObject(attributes);
            var unverified = {};
            var verified = {};
            if (attrs['email']) {
                if (attrs['email_verified']) {
                    verified['email'] = attrs['email'];
                }
                else {
                    unverified['email'] = attrs['email'];
                }
            }
            if (attrs['phone_number']) {
                if (attrs['phone_number_verified']) {
                    verified['phone_number'] = attrs['phone_number'];
                }
                else {
                    unverified['phone_number'] = attrs['phone_number'];
                }
            }
            return {
                verified: verified,
                unverified: unverified,
            };
        });
    };
    /**
     * Get current authenticated user
     * @return - A promise resolves to current authenticated CognitoUser if success
     */
    AuthClass.prototype.currentUserPoolUser = function (params) {
        var _this = this;
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        return new Promise(function (res, rej) {
            _this._storageSync
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var user, clientMetadata;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.isOAuthInProgress()) return [3 /*break*/, 2];
                            logger.debug('OAuth signIn in progress, waiting for resolution...');
                            return [4 /*yield*/, new Promise(function (res) {
                                    var timeoutId = setTimeout(function () {
                                        logger.debug('OAuth signIn in progress timeout');
                                        core_1.Hub.remove('auth', hostedUISignCallback);
                                        res();
                                    }, OAUTH_FLOW_MS_TIMEOUT);
                                    core_1.Hub.listen('auth', hostedUISignCallback);
                                    function hostedUISignCallback(_a) {
                                        var payload = _a.payload;
                                        var event = payload.event;
                                        if (event === 'cognitoHostedUI' ||
                                            event === 'cognitoHostedUI_failure') {
                                            logger.debug("OAuth signIn resolved: " + event);
                                            clearTimeout(timeoutId);
                                            core_1.Hub.remove('auth', hostedUISignCallback);
                                            res();
                                        }
                                    }
                                })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            user = this.userPool.getCurrentUser();
                            if (!user) {
                                logger.debug('Failed to get user from user pool');
                                rej('No current user');
                                return [2 /*return*/];
                            }
                            clientMetadata = this._config.clientMetadata;
                            // refresh the session if the session expired.
                            user.getSession(function (err, session) { return __awaiter(_this, void 0, void 0, function () {
                                var bypassCache, clientMetadata, _a, scope;
                                var _this = this;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (err) {
                                                logger.debug('Failed to get the user session', err);
                                                rej(err);
                                                return [2 /*return*/];
                                            }
                                            bypassCache = params ? params.bypassCache : false;
                                            if (!bypassCache) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.Credentials.clear()];
                                        case 1:
                                            _b.sent();
                                            _b.label = 2;
                                        case 2:
                                            clientMetadata = this._config.clientMetadata;
                                            _a = session.getAccessToken().decodePayload().scope, scope = _a === void 0 ? '' : _a;
                                            if (scope.split(' ').includes(USER_ADMIN_SCOPE)) {
                                                user.getUserData(function (err, data) {
                                                    if (err) {
                                                        logger.debug('getting user data failed', err);
                                                        // Make sure the user is still valid
                                                        if (err.message === 'User is disabled.' ||
                                                            err.message === 'User does not exist.' ||
                                                            err.message === 'Access Token has been revoked' // Session revoked by another app
                                                        ) {
                                                            rej(err);
                                                        }
                                                        else {
                                                            // the error may also be thrown when lack of permissions to get user info etc
                                                            // in that case we just bypass the error
                                                            res(user);
                                                        }
                                                        return;
                                                    }
                                                    var preferredMFA = data.PreferredMfaSetting || 'NOMFA';
                                                    var attributeList = [];
                                                    for (var i = 0; i < data.UserAttributes.length; i++) {
                                                        var attribute = {
                                                            Name: data.UserAttributes[i].Name,
                                                            Value: data.UserAttributes[i].Value,
                                                        };
                                                        var userAttribute = new amazon_cognito_identity_js_1.CognitoUserAttribute(attribute);
                                                        attributeList.push(userAttribute);
                                                    }
                                                    var attributes = _this.attributesToObject(attributeList);
                                                    Object.assign(user, { attributes: attributes, preferredMFA: preferredMFA });
                                                    return res(user);
                                                }, { bypassCache: bypassCache, clientMetadata: clientMetadata });
                                            }
                                            else {
                                                logger.debug("Unable to get the user data because the " + USER_ADMIN_SCOPE + " " +
                                                    "is not in the scopes of the access token");
                                                return [2 /*return*/, res(user)];
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, { clientMetadata: clientMetadata });
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (e) {
                logger.debug('Failed to sync cache info into memory', e);
                return rej(e);
            });
        });
    };
    AuthClass.prototype.isOAuthInProgress = function () {
        return this.oAuthFlowInProgress;
    };
    /**
     * Get current authenticated user
     * @param {CurrentUserOpts} - options for getting the current user
     * @return - A promise resolves to current authenticated CognitoUser if success
     */
    AuthClass.prototype.currentAuthenticatedUser = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var federatedUser, e_5, federatedInfo, user, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.debug('getting current authenticated user');
                        federatedUser = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._storageSync];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        logger.debug('Failed to sync cache info into memory', e_5);
                        throw e_5;
                    case 4:
                        try {
                            federatedInfo = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'));
                            if (federatedInfo) {
                                federatedUser = __assign(__assign({}, federatedInfo.user), { token: federatedInfo.token });
                            }
                        }
                        catch (e) {
                            logger.debug('cannot load federated user from auth storage');
                        }
                        if (!federatedUser) return [3 /*break*/, 5];
                        this.user = federatedUser;
                        logger.debug('get current authenticated federated user', this.user);
                        return [2 /*return*/, this.user];
                    case 5:
                        logger.debug('get current authenticated userpool user');
                        user = null;
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.currentUserPoolUser(params)];
                    case 7:
                        user = _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_6 = _a.sent();
                        if (e_6 === 'No userPool') {
                            logger.error('Cannot get the current user because the user pool is missing. ' +
                                'Please make sure the Auth module is configured with a valid Cognito User Pool ID');
                        }
                        logger.debug('The user is not authenticated by the error', e_6);
                        return [2 /*return*/, Promise.reject('The user is not authenticated')];
                    case 9:
                        this.user = user;
                        return [2 /*return*/, this.user];
                }
            });
        });
    };
    /**
     * Get current user's session
     * @return - A promise resolves to session object if success
     */
    AuthClass.prototype.currentSession = function () {
        var that = this;
        logger.debug('Getting current session');
        // Purposely not calling the reject method here because we don't need a console error
        if (!this.userPool) {
            return Promise.reject();
        }
        return new Promise(function (res, rej) {
            that
                .currentUserPoolUser()
                .then(function (user) {
                that
                    .userSession(user)
                    .then(function (session) {
                    res(session);
                    return;
                })
                    .catch(function (e) {
                    logger.debug('Failed to get the current session', e);
                    rej(e);
                    return;
                });
            })
                .catch(function (e) {
                logger.debug('Failed to get the current user', e);
                rej(e);
                return;
            });
        });
    };
    /**
     * Get the corresponding user session
     * @param {Object} user - The CognitoUser object
     * @return - A promise resolves to the session
     */
    AuthClass.prototype.userSession = function (user) {
        if (!user) {
            logger.debug('the user is null');
            return this.rejectAuthError(Auth_1.AuthErrorTypes.NoUserSession);
        }
        var clientMetadata = this._config.clientMetadata; // TODO: verify behavior if this is override during signIn
        return new Promise(function (resolve, reject) {
            logger.debug('Getting the session from this user:', user);
            user.getSession(function (err, session) {
                if (err) {
                    logger.debug('Failed to get the session from user', user);
                    reject(err);
                    return;
                }
                else {
                    logger.debug('Succeed to get the user session', session);
                    resolve(session);
                    return;
                }
            }, { clientMetadata: clientMetadata });
        });
    };
    /**
     * Get authenticated credentials of current user.
     * @return - A promise resolves to be current user's credentials
     */
    AuthClass.prototype.currentUserCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_7, federatedInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.debug('Getting current user credentials');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._storageSync];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_7 = _a.sent();
                        logger.debug('Failed to sync cache info into memory', e_7);
                        throw e_7;
                    case 4:
                        federatedInfo = null;
                        try {
                            federatedInfo = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'));
                        }
                        catch (e) {
                            logger.debug('failed to get or parse item aws-amplify-federatedInfo', e);
                        }
                        if (federatedInfo) {
                            // refresh the jwt token here if necessary
                            return [2 /*return*/, this.Credentials.refreshFederatedToken(federatedInfo)];
                        }
                        else {
                            return [2 /*return*/, this.currentSession()
                                    .then(function (session) {
                                    logger.debug('getting session success', session);
                                    return _this.Credentials.set(session, 'session');
                                })
                                    .catch(function (error) {
                                    logger.debug('getting session failed', error);
                                    return _this.Credentials.set(null, 'guest');
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthClass.prototype.currentCredentials = function () {
        logger.debug('getting current credentials');
        return this.Credentials.get();
    };
    /**
     * Initiate an attribute confirmation request
     * @param {Object} user - The CognitoUser
     * @param {Object} attr - The attributes to be verified
     * @return - A promise resolves to callback data if success
     */
    AuthClass.prototype.verifyUserAttribute = function (user, attr, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        return new Promise(function (resolve, reject) {
            user.getAttributeVerificationCode(attr, {
                onSuccess: function () {
                    return resolve();
                },
                onFailure: function (err) {
                    return reject(err);
                },
            }, clientMetadata);
        });
    };
    /**
     * Confirm an attribute using a confirmation code
     * @param {Object} user - The CognitoUser
     * @param {Object} attr - The attribute to be verified
     * @param {String} code - The confirmation code
     * @return - A promise resolves to callback data if success
     */
    AuthClass.prototype.verifyUserAttributeSubmit = function (user, attr, code) {
        if (!code) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyCode);
        }
        return new Promise(function (resolve, reject) {
            user.verifyAttribute(attr, code, {
                onSuccess: function (data) {
                    resolve(data);
                    return;
                },
                onFailure: function (err) {
                    reject(err);
                    return;
                },
            });
        });
    };
    AuthClass.prototype.verifyCurrentUserAttribute = function (attr) {
        var that = this;
        return that
            .currentUserPoolUser()
            .then(function (user) { return that.verifyUserAttribute(user, attr); });
    };
    /**
     * Confirm current user's attribute using a confirmation code
     * @param {Object} attr - The attribute to be verified
     * @param {String} code - The confirmation code
     * @return - A promise resolves to callback data if success
     */
    AuthClass.prototype.verifyCurrentUserAttributeSubmit = function (attr, code) {
        var that = this;
        return that
            .currentUserPoolUser()
            .then(function (user) { return that.verifyUserAttributeSubmit(user, attr, code); });
    };
    AuthClass.prototype.cognitoIdentitySignOut = function (opts, user) {
        return __awaiter(this, void 0, void 0, function () {
            var e_8, isSignedInHostedUI;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._storageSync];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_8 = _a.sent();
                        logger.debug('Failed to sync cache info into memory', e_8);
                        throw e_8;
                    case 3:
                        isSignedInHostedUI = this._oAuthHandler &&
                            this._storage.getItem('amplify-signin-with-hostedUI') === 'true';
                        return [2 /*return*/, new Promise(function (res, rej) {
                                if (opts && opts.global) {
                                    logger.debug('user global sign out', user);
                                    // in order to use global signout
                                    // we must validate the user as an authenticated user by using getSession
                                    var clientMetadata = _this._config.clientMetadata; // TODO: verify behavior if this is override during signIn
                                    user.getSession(function (err, result) {
                                        if (err) {
                                            logger.debug('failed to get the user session', err);
                                            return rej(err);
                                        }
                                        user.globalSignOut({
                                            onSuccess: function (data) {
                                                logger.debug('global sign out success');
                                                if (isSignedInHostedUI) {
                                                    _this.oAuthSignOutRedirect(res, rej);
                                                }
                                                else {
                                                    return res();
                                                }
                                            },
                                            onFailure: function (err) {
                                                logger.debug('global sign out failed', err);
                                                return rej(err);
                                            },
                                        });
                                    }, { clientMetadata: clientMetadata });
                                }
                                else {
                                    logger.debug('user sign out', user);
                                    user.signOut();
                                    if (isSignedInHostedUI) {
                                        _this.oAuthSignOutRedirect(res, rej);
                                    }
                                    else {
                                        return res();
                                    }
                                }
                            })];
                }
            });
        });
    };
    AuthClass.prototype.oAuthSignOutRedirect = function (resolve, reject) {
        var isBrowser = core_1.JS.browserOrNode().isBrowser;
        if (isBrowser) {
            this.oAuthSignOutRedirectOrReject(reject);
        }
        else {
            this.oAuthSignOutAndResolve(resolve);
        }
    };
    AuthClass.prototype.oAuthSignOutAndResolve = function (resolve) {
        this._oAuthHandler.signOut();
        resolve();
    };
    AuthClass.prototype.oAuthSignOutRedirectOrReject = function (reject) {
        this._oAuthHandler.signOut(); // this method redirects url
        // App should be redirected to another url otherwise it will reject
        setTimeout(function () { return reject('Signout timeout fail'); }, 3000);
    };
    /**
     * Sign out method
     * @
     * @return - A promise resolved if success
     */
    AuthClass.prototype.signOut = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var e_9, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cleanCachedItems()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_9 = _a.sent();
                        logger.debug('failed to clear cached items');
                        return [3 /*break*/, 3];
                    case 3:
                        if (!this.userPool) return [3 /*break*/, 7];
                        user = this.userPool.getCurrentUser();
                        if (!user) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.cognitoIdentitySignOut(opts, user)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        logger.debug('no current Cognito user');
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        logger.debug('no Congito User pool');
                        _a.label = 8;
                    case 8:
                        /**
                         * Note for future refactor - no reliable way to get username with
                         * Cognito User Pools vs Identity when federating with Social Providers
                         * This is why we need a well structured session object that can be inspected
                         * and information passed back in the message below for Hub dispatch
                         */
                        dispatchAuthEvent('signOut', this.user, "A user has been signed out");
                        this.user = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthClass.prototype.cleanCachedItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // clear cognito cached item
                    return [4 /*yield*/, this.Credentials.clear()];
                    case 1:
                        // clear cognito cached item
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Change a password for an authenticated user
     * @param {Object} user - The CognitoUser object
     * @param {String} oldPassword - the current password
     * @param {String} newPassword - the requested new password
     * @return - A promise resolves if success
     */
    AuthClass.prototype.changePassword = function (user, oldPassword, newPassword, clientMetadata) {
        var _this = this;
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        return new Promise(function (resolve, reject) {
            _this.userSession(user).then(function (session) {
                user.changePassword(oldPassword, newPassword, function (err, data) {
                    if (err) {
                        logger.debug('change password failure', err);
                        return reject(err);
                    }
                    else {
                        return resolve(data);
                    }
                }, clientMetadata);
            });
        });
    };
    /**
     * Initiate a forgot password request
     * @param {String} username - the username to change password
     * @return - A promise resolves if success
     */
    AuthClass.prototype.forgotPassword = function (username, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        var user = this.createCognitoUser(username);
        return new Promise(function (resolve, reject) {
            user.forgotPassword({
                onSuccess: function () {
                    resolve();
                    return;
                },
                onFailure: function (err) {
                    logger.debug('forgot password failure', err);
                    dispatchAuthEvent('forgotPassword_failure', err, username + " forgotPassword failed");
                    reject(err);
                    return;
                },
                inputVerificationCode: function (data) {
                    dispatchAuthEvent('forgotPassword', user, username + " has initiated forgot password flow");
                    resolve(data);
                    return;
                },
            }, clientMetadata);
        });
    };
    /**
     * Confirm a new password using a confirmation Code
     * @param {String} username - The username
     * @param {String} code - The confirmation code
     * @param {String} password - The new password
     * @return - A promise that resolves if success
     */
    AuthClass.prototype.forgotPasswordSubmit = function (username, code, password, clientMetadata) {
        if (clientMetadata === void 0) { clientMetadata = this._config.clientMetadata; }
        if (!this.userPool) {
            return this.rejectNoUserPool();
        }
        if (!username) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyUsername);
        }
        if (!code) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyCode);
        }
        if (!password) {
            return this.rejectAuthError(Auth_1.AuthErrorTypes.EmptyPassword);
        }
        var user = this.createCognitoUser(username);
        return new Promise(function (resolve, reject) {
            user.confirmPassword(code, password, {
                onSuccess: function () {
                    dispatchAuthEvent('forgotPasswordSubmit', user, username + " forgotPasswordSubmit successful");
                    resolve();
                    return;
                },
                onFailure: function (err) {
                    dispatchAuthEvent('forgotPasswordSubmit_failure', err, username + " forgotPasswordSubmit failed");
                    reject(err);
                    return;
                },
            }, clientMetadata);
        });
    };
    /**
     * Get user information
     * @async
     * @return {Object }- current User's information
     */
    AuthClass.prototype.currentUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var source, user, attributes, userAttrs, credentials, e_10, info, err_1, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = this.Credentials.getCredSource();
                        if (!(!source || source === 'aws' || source === 'userPool')) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.currentUserPoolUser().catch(function (err) {
                                return logger.debug(err);
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        return [4 /*yield*/, this.userAttributes(user)];
                    case 3:
                        attributes = _a.sent();
                        userAttrs = this.attributesToObject(attributes);
                        credentials = null;
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.currentCredentials()];
                    case 5:
                        credentials = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_10 = _a.sent();
                        logger.debug('Failed to retrieve credentials while getting current user info', e_10);
                        return [3 /*break*/, 7];
                    case 7:
                        info = {
                            id: credentials ? credentials.identityId : undefined,
                            username: user.getUsername(),
                            attributes: userAttrs,
                        };
                        return [2 /*return*/, info];
                    case 8:
                        err_1 = _a.sent();
                        logger.debug('currentUserInfo error', err_1);
                        return [2 /*return*/, {}];
                    case 9:
                        if (source === 'federated') {
                            user = this.user;
                            return [2 /*return*/, user ? user : {}];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthClass.prototype.federatedSignIn = function (providerOrOptions, response, user) {
        return __awaiter(this, void 0, void 0, function () {
            var options, provider, customState, client_id, redirect_uri, provider, loggedInUser, token, identity_id, expires_at, credentials, currentUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._config.identityPoolId && !this._config.userPoolId) {
                            throw new Error("Federation requires either a User Pool or Identity Pool in config");
                        }
                        // Ensure backwards compatability
                        if (typeof providerOrOptions === 'undefined') {
                            if (this._config.identityPoolId && !this._config.userPoolId) {
                                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
                            }
                        }
                        if (!(types_1.isFederatedSignInOptions(providerOrOptions) ||
                            types_1.isFederatedSignInOptionsCustom(providerOrOptions) ||
                            types_1.hasCustomState(providerOrOptions) ||
                            typeof providerOrOptions === 'undefined')) return [3 /*break*/, 1];
                        options = providerOrOptions || {
                            provider: Auth_1.CognitoHostedUIIdentityProvider.Cognito,
                        };
                        provider = types_1.isFederatedSignInOptions(options)
                            ? options.provider
                            : options.customProvider;
                        customState = types_1.isFederatedSignInOptions(options)
                            ? options.customState
                            : options.customState;
                        if (this._config.userPoolId) {
                            client_id = types_1.isCognitoHostedOpts(this._config.oauth)
                                ? this._config.userPoolWebClientId
                                : this._config.oauth.clientID;
                            redirect_uri = types_1.isCognitoHostedOpts(this._config.oauth)
                                ? this._config.oauth.redirectSignIn
                                : this._config.oauth.redirectUri;
                            this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, redirect_uri, client_id, provider, customState);
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        provider = providerOrOptions;
                        // To check if the user is already logged in
                        try {
                            loggedInUser = JSON.stringify(JSON.parse(this._storage.getItem('aws-amplify-federatedInfo')).user);
                            if (loggedInUser) {
                                logger.warn("There is already a signed in user: " + loggedInUser + " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.");
                            }
                        }
                        catch (e) { }
                        token = response.token, identity_id = response.identity_id, expires_at = response.expires_at;
                        return [4 /*yield*/, this.Credentials.set({ provider: provider, token: token, identity_id: identity_id, user: user, expires_at: expires_at }, 'federation')];
                    case 2:
                        credentials = _a.sent();
                        return [4 /*yield*/, this.currentAuthenticatedUser()];
                    case 3:
                        currentUser = _a.sent();
                        dispatchAuthEvent('signIn', currentUser, "A user " + currentUser.username + " has been signed in");
                        logger.debug('federated sign in credentials', credentials);
                        return [2 /*return*/, credentials];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to complete the OAuth flow with or without the Cognito Hosted UI
     * @param {String} URL - optional parameter for customers to pass in the response URL
     */
    AuthClass.prototype._handleAuthResponse = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUrl, hasCodeOrError, hasTokenOrError, _a, accessToken, idToken, refreshToken, state, session, credentials, isCustomStateIncluded, currentUser, customState, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.oAuthFlowInProgress) {
                            logger.debug("Skipping URL " + URL + " current flow in progress");
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 8, 9]);
                        this.oAuthFlowInProgress = true;
                        if (!this._config.userPoolId) {
                            throw new Error("OAuth responses require a User Pool defined in config");
                        }
                        dispatchAuthEvent('parsingCallbackUrl', { url: URL }, "The callback url is being parsed");
                        currentUrl = URL || (core_1.JS.browserOrNode().isBrowser ? window.location.href : '');
                        hasCodeOrError = !!(url_1.parse(currentUrl).query || '')
                            .split('&')
                            .map(function (entry) { return entry.split('='); })
                            .find(function (_a) {
                            var _b = __read(_a, 1), k = _b[0];
                            return k === 'code' || k === 'error';
                        });
                        hasTokenOrError = !!(url_1.parse(currentUrl).hash || '#')
                            .substr(1)
                            .split('&')
                            .map(function (entry) { return entry.split('='); })
                            .find(function (_a) {
                            var _b = __read(_a, 1), k = _b[0];
                            return k === 'access_token' || k === 'error';
                        });
                        if (!(hasCodeOrError || hasTokenOrError)) return [3 /*break*/, 7];
                        this._storage.setItem('amplify-redirected-from-hosted-ui', 'true');
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this._oAuthHandler.handleAuthResponse(currentUrl)];
                    case 3:
                        _a = _b.sent(), accessToken = _a.accessToken, idToken = _a.idToken, refreshToken = _a.refreshToken, state = _a.state;
                        session = new amazon_cognito_identity_js_1.CognitoUserSession({
                            IdToken: new amazon_cognito_identity_js_1.CognitoIdToken({ IdToken: idToken }),
                            RefreshToken: new amazon_cognito_identity_js_1.CognitoRefreshToken({
                                RefreshToken: refreshToken,
                            }),
                            AccessToken: new amazon_cognito_identity_js_1.CognitoAccessToken({
                                AccessToken: accessToken,
                            }),
                        });
                        credentials = void 0;
                        if (!this._config.identityPoolId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.Credentials.set(session, 'session')];
                    case 4:
                        credentials = _b.sent();
                        logger.debug('AWS credentials', credentials);
                        _b.label = 5;
                    case 5:
                        isCustomStateIncluded = /-/.test(state);
                        currentUser = this.createCognitoUser(session.getIdToken().decodePayload()['cognito:username']);
                        // This calls cacheTokens() in Cognito SDK
                        currentUser.setSignInUserSession(session);
                        if (window && typeof window.history !== 'undefined') {
                            window.history.replaceState({}, null, this._config.oauth.redirectSignIn);
                        }
                        dispatchAuthEvent('signIn', currentUser, "A user " + currentUser.getUsername() + " has been signed in");
                        dispatchAuthEvent('cognitoHostedUI', currentUser, "A user " + currentUser.getUsername() + " has been signed in via Cognito Hosted UI");
                        if (isCustomStateIncluded) {
                            customState = state
                                .split('-')
                                .splice(1)
                                .join('-');
                            dispatchAuthEvent('customOAuthState', core_1.urlSafeDecode(customState), "State for user " + currentUser.getUsername());
                        }
                        //#endregion
                        return [2 /*return*/, credentials];
                    case 6:
                        err_2 = _b.sent();
                        logger.debug('Error in cognito hosted auth response', err_2);
                        dispatchAuthEvent('signIn_failure', err_2, "The OAuth response flow failed");
                        dispatchAuthEvent('cognitoHostedUI_failure', err_2, "A failure occurred when returning to the Cognito Hosted UI");
                        dispatchAuthEvent('customState_failure', err_2, "A failure occurred when returning state");
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.oAuthFlowInProgress = false;
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Compact version of credentials
     * @param {Object} credentials
     * @return {Object} - Credentials
     */
    AuthClass.prototype.essentialCredentials = function (credentials) {
        return {
            accessKeyId: credentials.accessKeyId,
            sessionToken: credentials.sessionToken,
            secretAccessKey: credentials.secretAccessKey,
            identityId: credentials.identityId,
            authenticated: credentials.authenticated,
        };
    };
    AuthClass.prototype.attributesToObject = function (attributes) {
        var _this = this;
        var obj = {};
        if (attributes) {
            attributes.map(function (attribute) {
                if (attribute.Name === 'email_verified' ||
                    attribute.Name === 'phone_number_verified') {
                    obj[attribute.Name] = _this.isTruthyString(attribute.Value) || attribute.Value === true;
                }
                else {
                    obj[attribute.Name] = attribute.Value;
                }
            });
        }
        return obj;
    };
    AuthClass.prototype.isTruthyString = function (value) {
        return typeof value.toLowerCase === 'function' && value.toLowerCase() === 'true';
    };
    AuthClass.prototype.createCognitoUser = function (username) {
        var userData = {
            Username: username,
            Pool: this.userPool,
        };
        userData.Storage = this._storage;
        var authenticationFlowType = this._config.authenticationFlowType;
        var user = new amazon_cognito_identity_js_1.CognitoUser(userData);
        if (authenticationFlowType) {
            user.setAuthenticationFlowType(authenticationFlowType);
        }
        return user;
    };
    AuthClass.prototype._isValidAuthStorage = function (obj) {
        // We need to check if the obj has the functions of Storage
        return (!!obj &&
            typeof obj.getItem === 'function' &&
            typeof obj.setItem === 'function' &&
            typeof obj.removeItem === 'function' &&
            typeof obj.clear === 'function');
    };
    AuthClass.prototype.noUserPoolErrorHandler = function (config) {
        if (config) {
            if (!config.userPoolId || !config.identityPoolId) {
                return Auth_1.AuthErrorTypes.MissingAuthConfig;
            }
        }
        return Auth_1.AuthErrorTypes.NoConfig;
    };
    AuthClass.prototype.rejectAuthError = function (type) {
        return Promise.reject(new Errors_1.AuthError(type));
    };
    AuthClass.prototype.rejectNoUserPool = function () {
        var type = this.noUserPoolErrorHandler(this._config);
        return Promise.reject(new Errors_1.NoUserPoolError(type));
    };
    return AuthClass;
}());
exports.AuthClass = AuthClass;
exports.Auth = new AuthClass(null);
core_1.Amplify.register(exports.Auth);
//# sourceMappingURL=Auth.js.map