"use strict";
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@aws-amplify/core");
var auth_1 = require("@aws-amplify/auth");
var Amplify_UI_Theme_1 = __importDefault(require("../Amplify-UI/Amplify-UI-Theme"));
var Amplify_UI_Components_React_1 = require("../Amplify-UI/Amplify-UI-Components-React");
var TOTPSetupComp_1 = require("./TOTPSetupComp");
var logger = new core_1.ConsoleLogger('SelectMFAType');
var SelectMFAType = /** @class */ (function (_super) {
    __extends(SelectMFAType, _super);
    function SelectMFAType(props) {
        var _this = _super.call(this, props) || this;
        _this.verify = _this.verify.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.state = {
            TOTPSetup: false,
            selectMessage: null,
        };
        return _this;
    }
    SelectMFAType.prototype.handleInputChange = function (evt) {
        // clear current state
        this.setState({
            TOTPSetup: false,
            selectMessage: null,
        });
        this.inputs = {};
        var _a = evt.target, name = _a.name, value = _a.value, type = _a.type, checked = _a.checked;
        // @ts-ignore
        var check_type = ['radio', 'checkbox'].includes(type);
        this.inputs[value] = check_type ? checked : value;
    };
    SelectMFAType.prototype.verify = function () {
        var _this = this;
        logger.debug('mfatypes inputs', this.inputs);
        if (!this.inputs) {
            logger.debug('No mfa type selected');
            return;
        }
        var _a = this.inputs, TOTP = _a.TOTP, SMS = _a.SMS, NOMFA = _a.NOMFA;
        var mfaMethod = null;
        if (TOTP) {
            mfaMethod = 'TOTP';
        }
        else if (SMS) {
            mfaMethod = 'SMS';
        }
        else if (NOMFA) {
            mfaMethod = 'NOMFA';
        }
        var user = this.props.authData;
        if (!auth_1.Auth || typeof auth_1.Auth.setPreferredMFA !== 'function') {
            throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');
        }
        auth_1.Auth.setPreferredMFA(user, mfaMethod)
            .then(function (data) {
            logger.debug('set preferred mfa success', data);
            _this.setState({
                selectMessage: 'Success! Your MFA Type is now: ' + mfaMethod,
                showToast: true,
            });
        })
            .catch(function (err) {
            var message = err.message;
            if (message === 'User has not set up software token mfa' ||
                message === 'User has not verified software token mfa') {
                _this.setState({
                    TOTPSetup: true,
                    selectMessage: 'You need to setup TOTP',
                    showToast: true,
                });
            }
            else {
                logger.debug('set preferred mfa failed', err);
                _this.setState({
                    selectMessage: 'Failed! You cannot select MFA Type for now!',
                    showToast: true,
                });
            }
        });
    };
    SelectMFAType.prototype.selectView = function (theme) {
        var _this = this;
        var MFATypes = this.props.MFATypes;
        if (!MFATypes || Object.keys(MFATypes).length < 2) {
            logger.debug('less than 2 mfa types available');
            return (React.createElement("div", null,
                React.createElement("a", null, "less than 2 mfa types available")));
        }
        var SMS = MFATypes.SMS, TOTP = MFATypes.TOTP, Optional = MFATypes.Optional;
        return (React.createElement(Amplify_UI_Components_React_1.FormSection, { theme: theme },
            this.state.showToast && this.state.selectMessage && (React.createElement(Amplify_UI_Components_React_1.Toast, { theme: theme, onClose: function () { return _this.setState({ showToast: false }); } }, core_1.I18n.get(this.state.selectMessage))),
            React.createElement(Amplify_UI_Components_React_1.SectionHeader, { theme: theme }, core_1.I18n.get('Select MFA Type')),
            React.createElement(Amplify_UI_Components_React_1.SectionBody, { theme: theme },
                React.createElement("div", null,
                    SMS ? (React.createElement(Amplify_UI_Components_React_1.RadioRow, { placeholder: core_1.I18n.get('SMS'), theme: theme, key: "sms", name: "MFAType", value: "SMS", onChange: this.handleInputChange })) : null,
                    TOTP ? (React.createElement(Amplify_UI_Components_React_1.RadioRow, { placeholder: core_1.I18n.get('TOTP'), theme: theme, key: "totp", name: "MFAType", value: "TOTP", onChange: this.handleInputChange })) : null,
                    Optional ? (React.createElement(Amplify_UI_Components_React_1.RadioRow, { placeholder: core_1.I18n.get('No MFA'), theme: theme, key: "noMFA", name: "MFAType", value: "NOMFA", onChange: this.handleInputChange })) : null)),
            React.createElement(Amplify_UI_Components_React_1.SectionFooter, { theme: theme },
                React.createElement(Amplify_UI_Components_React_1.Button, { theme: theme, onClick: this.verify }, core_1.I18n.get('Verify')))));
    };
    SelectMFAType.prototype.render = function () {
        var theme = this.props.theme || Amplify_UI_Theme_1.default;
        return (React.createElement("div", null,
            this.selectView(theme),
            this.state.TOTPSetup ? React.createElement(TOTPSetupComp_1.TOTPSetupComp, __assign({}, this.props)) : null));
    };
    return SelectMFAType;
}(React.Component));
exports.SelectMFAType = SelectMFAType;
/**
 * @deprecated use named import
 */
exports.default = SelectMFAType;
//# sourceMappingURL=SelectMFAType.js.map