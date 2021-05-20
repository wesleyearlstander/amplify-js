/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';
/** @type {?} */
export var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            }
        });
    }));
});
/** @type {?} */
export var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
export var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
})
// tslint:disable-next-line: only-arrow-functions
;
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
export function ProxyCmp(opts) {
    /** @type {?} */
    var decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}
var AmplifyAmazonButton = /** @class */ (function () {
    function AmplifyAmazonButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyAmazonButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-amazon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clientId', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifyAmazonButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyAmazonButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAmazonButton);
    return AmplifyAmazonButton;
}());
export { AmplifyAmazonButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyAmazonButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyAmazonButton.prototype.z;
}
var AmplifyAuthContainer = /** @class */ (function () {
    function AmplifyAuthContainer(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyAuthContainer.decorators = [
        { type: Component, args: [{ selector: 'amplify-auth-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyAuthContainer.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyAuthContainer;
}());
export { AmplifyAuthContainer };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthContainer.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthContainer.prototype.z;
}
var AmplifyAuthFields = /** @class */ (function () {
    function AmplifyAuthFields(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyAuthFields.decorators = [
        { type: Component, args: [{ selector: 'amplify-auth-fields', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields'] },] },
    ];
    /** @nocollapse */
    AmplifyAuthFields.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyAuthFields = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuthFields);
    return AmplifyAuthFields;
}());
export { AmplifyAuthFields };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthFields.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthFields.prototype.z;
}
var AmplifyAuth0Button = /** @class */ (function () {
    function AmplifyAuth0Button(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyAuth0Button.decorators = [
        { type: Component, args: [{ selector: 'amplify-auth0-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['config', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifyAuth0Button.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyAuth0Button = tslib_1.__decorate([
        ProxyCmp({ inputs: ['config', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuth0Button);
    return AmplifyAuth0Button;
}());
export { AmplifyAuth0Button };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuth0Button.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuth0Button.prototype.z;
}
var AmplifyAuthenticator = /** @class */ (function () {
    function AmplifyAuthenticator(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyAuthenticator.decorators = [
        { type: Component, args: [{ selector: 'amplify-authenticator', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['federated', 'handleAuthStateChange', 'hideToast', 'initialAuthState', 'usernameAlias'] },] },
    ];
    /** @nocollapse */
    AmplifyAuthenticator.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyAuthenticator = tslib_1.__decorate([
        ProxyCmp({ inputs: ['federated', 'handleAuthStateChange', 'hideToast', 'initialAuthState', 'usernameAlias'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuthenticator);
    return AmplifyAuthenticator;
}());
export { AmplifyAuthenticator };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthenticator.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyAuthenticator.prototype.z;
}
var AmplifyButton = /** @class */ (function () {
    function AmplifyButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'handleButtonClick', 'icon', 'type', 'variant'] },] },
    ];
    /** @nocollapse */
    AmplifyButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['disabled', 'handleButtonClick', 'icon', 'type', 'variant'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyButton);
    return AmplifyButton;
}());
export { AmplifyButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyButton.prototype.z;
}
var AmplifyChatbot = /** @class */ (function () {
    function AmplifyChatbot(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['chatCompleted']);
    }
    AmplifyChatbot.decorators = [
        { type: Component, args: [{ selector: 'amplify-chatbot', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['botName', 'botTitle', 'clearOnComplete', 'conversationModeOn', 'silenceThreshold', 'silenceTime', 'textEnabled', 'voiceEnabled', 'welcomeMessage'] },] },
    ];
    /** @nocollapse */
    AmplifyChatbot.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyChatbot = tslib_1.__decorate([
        ProxyCmp({ inputs: ['botName', 'botTitle', 'clearOnComplete', 'conversationModeOn', 'silenceThreshold', 'silenceTime', 'textEnabled', 'voiceEnabled', 'welcomeMessage'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyChatbot);
    return AmplifyChatbot;
}());
export { AmplifyChatbot };
if (false) {
    /** @type {?} */
    AmplifyChatbot.prototype.chatCompleted;
    /**
     * @type {?}
     * @protected
     */
    AmplifyChatbot.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyChatbot.prototype.z;
}
var AmplifyCheckbox = /** @class */ (function () {
    function AmplifyCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyCheckbox.decorators = [
        { type: Component, args: [{ selector: 'amplify-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'fieldId', 'label', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyCheckbox = tslib_1.__decorate([
        ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'label', 'name', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCheckbox);
    return AmplifyCheckbox;
}());
export { AmplifyCheckbox };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyCheckbox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyCheckbox.prototype.z;
}
var AmplifyCodeField = /** @class */ (function () {
    function AmplifyCodeField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyCodeField.decorators = [
        { type: Component, args: [{ selector: 'amplify-code-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyCodeField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyCodeField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCodeField);
    return AmplifyCodeField;
}());
export { AmplifyCodeField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyCodeField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyCodeField.prototype.z;
}
var AmplifyConfirmSignIn = /** @class */ (function () {
    function AmplifyConfirmSignIn(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyConfirmSignIn.decorators = [
        { type: Component, args: [{ selector: 'amplify-confirm-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] },] },
    ];
    /** @nocollapse */
    AmplifyConfirmSignIn.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyConfirmSignIn = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyConfirmSignIn);
    return AmplifyConfirmSignIn;
}());
export { AmplifyConfirmSignIn };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyConfirmSignIn.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyConfirmSignIn.prototype.z;
}
var AmplifyConfirmSignUp = /** @class */ (function () {
    function AmplifyConfirmSignUp(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyConfirmSignUp.decorators = [
        { type: Component, args: [{ selector: 'amplify-confirm-sign-up', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user', 'usernameAlias'] },] },
    ];
    /** @nocollapse */
    AmplifyConfirmSignUp.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyConfirmSignUp = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user', 'usernameAlias'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyConfirmSignUp);
    return AmplifyConfirmSignUp;
}());
export { AmplifyConfirmSignUp };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyConfirmSignUp.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyConfirmSignUp.prototype.z;
}
var AmplifyContainer = /** @class */ (function () {
    function AmplifyContainer(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyContainer.decorators = [
        { type: Component, args: [{ selector: 'amplify-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyContainer.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyContainer;
}());
export { AmplifyContainer };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyContainer.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyContainer.prototype.z;
}
var AmplifyCountryDialCode = /** @class */ (function () {
    function AmplifyCountryDialCode(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyCountryDialCode.decorators = [
        { type: Component, args: [{ selector: 'amplify-country-dial-code', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dialCode', 'fieldId', 'handleInputChange', 'options'] },] },
    ];
    /** @nocollapse */
    AmplifyCountryDialCode.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyCountryDialCode = tslib_1.__decorate([
        ProxyCmp({ inputs: ['dialCode', 'fieldId', 'handleInputChange', 'options'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCountryDialCode);
    return AmplifyCountryDialCode;
}());
export { AmplifyCountryDialCode };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyCountryDialCode.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyCountryDialCode.prototype.z;
}
var AmplifyEmailField = /** @class */ (function () {
    function AmplifyEmailField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyEmailField.decorators = [
        { type: Component, args: [{ selector: 'amplify-email-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyEmailField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyEmailField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyEmailField);
    return AmplifyEmailField;
}());
export { AmplifyEmailField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyEmailField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyEmailField.prototype.z;
}
var AmplifyFacebookButton = /** @class */ (function () {
    function AmplifyFacebookButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyFacebookButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-facebook-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appId', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifyFacebookButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyFacebookButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['appId', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFacebookButton);
    return AmplifyFacebookButton;
}());
export { AmplifyFacebookButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyFacebookButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyFacebookButton.prototype.z;
}
var AmplifyFederatedButtons = /** @class */ (function () {
    function AmplifyFederatedButtons(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyFederatedButtons.decorators = [
        { type: Component, args: [{ selector: 'amplify-federated-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['authState', 'federated', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifyFederatedButtons.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyFederatedButtons = tslib_1.__decorate([
        ProxyCmp({ inputs: ['authState', 'federated', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFederatedButtons);
    return AmplifyFederatedButtons;
}());
export { AmplifyFederatedButtons };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyFederatedButtons.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyFederatedButtons.prototype.z;
}
var AmplifyFederatedSignIn = /** @class */ (function () {
    function AmplifyFederatedSignIn(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyFederatedSignIn.decorators = [
        { type: Component, args: [{ selector: 'amplify-federated-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['authState', 'federated'] },] },
    ];
    /** @nocollapse */
    AmplifyFederatedSignIn.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyFederatedSignIn = tslib_1.__decorate([
        ProxyCmp({ inputs: ['authState', 'federated'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFederatedSignIn);
    return AmplifyFederatedSignIn;
}());
export { AmplifyFederatedSignIn };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyFederatedSignIn.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyFederatedSignIn.prototype.z;
}
var AmplifyForgotPassword = /** @class */ (function () {
    function AmplifyForgotPassword(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyForgotPassword.decorators = [
        { type: Component, args: [{ selector: 'amplify-forgot-password', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSend', 'handleSubmit', 'headerText', 'sendButtonText', 'submitButtonText', 'usernameAlias'] },] },
    ];
    /** @nocollapse */
    AmplifyForgotPassword.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyForgotPassword = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSend', 'handleSubmit', 'headerText', 'sendButtonText', 'submitButtonText', 'usernameAlias'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyForgotPassword);
    return AmplifyForgotPassword;
}());
export { AmplifyForgotPassword };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyForgotPassword.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyForgotPassword.prototype.z;
}
var AmplifyFormField = /** @class */ (function () {
    function AmplifyFormField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyFormField.decorators = [
        { type: Component, args: [{ selector: 'amplify-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'name', 'placeholder', 'required', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyFormField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyFormField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'name', 'placeholder', 'required', 'type', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFormField);
    return AmplifyFormField;
}());
export { AmplifyFormField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyFormField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyFormField.prototype.z;
}
var AmplifyFormSection = /** @class */ (function () {
    function AmplifyFormSection(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyFormSection.decorators = [
        { type: Component, args: [{ selector: 'amplify-form-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleSubmit', 'headerText', 'loading', 'secondaryFooterContent', 'submitButtonText', 'testDataPrefix'] },] },
    ];
    /** @nocollapse */
    AmplifyFormSection.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyFormSection = tslib_1.__decorate([
        ProxyCmp({ inputs: ['handleSubmit', 'headerText', 'loading', 'secondaryFooterContent', 'submitButtonText', 'testDataPrefix'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFormSection);
    return AmplifyFormSection;
}());
export { AmplifyFormSection };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyFormSection.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyFormSection.prototype.z;
}
var AmplifyGoogleButton = /** @class */ (function () {
    function AmplifyGoogleButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyGoogleButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-google-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clientId', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifyGoogleButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyGoogleButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyGoogleButton);
    return AmplifyGoogleButton;
}());
export { AmplifyGoogleButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyGoogleButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyGoogleButton.prototype.z;
}
var AmplifyGreetings = /** @class */ (function () {
    function AmplifyGreetings(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyGreetings.decorators = [
        { type: Component, args: [{ selector: 'amplify-greetings', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'logo', 'username'] },] },
    ];
    /** @nocollapse */
    AmplifyGreetings.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyGreetings = tslib_1.__decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'logo', 'username'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyGreetings);
    return AmplifyGreetings;
}());
export { AmplifyGreetings };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyGreetings.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyGreetings.prototype.z;
}
var AmplifyHint = /** @class */ (function () {
    function AmplifyHint(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyHint.decorators = [
        { type: Component, args: [{ selector: 'amplify-hint', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyHint.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyHint;
}());
export { AmplifyHint };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyHint.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyHint.prototype.z;
}
var AmplifyIcon = /** @class */ (function () {
    function AmplifyIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyIcon.decorators = [
        { type: Component, args: [{ selector: 'amplify-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['name'] },] },
    ];
    /** @nocollapse */
    AmplifyIcon.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyIcon = tslib_1.__decorate([
        ProxyCmp({ inputs: ['name'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyIcon);
    return AmplifyIcon;
}());
export { AmplifyIcon };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyIcon.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyIcon.prototype.z;
}
var AmplifyIconButton = /** @class */ (function () {
    function AmplifyIconButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyIconButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-icon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoShowTooltip', 'name', 'tooltip'] },] },
    ];
    /** @nocollapse */
    AmplifyIconButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyIconButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['autoShowTooltip', 'name', 'tooltip'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyIconButton);
    return AmplifyIconButton;
}());
export { AmplifyIconButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyIconButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyIconButton.prototype.z;
}
var AmplifyInput = /** @class */ (function () {
    function AmplifyInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyInput.decorators = [
        { type: Component, args: [{ selector: 'amplify-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'name', 'placeholder', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyInput = tslib_1.__decorate([
        ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'name', 'placeholder', 'type', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyInput);
    return AmplifyInput;
}());
export { AmplifyInput };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyInput.prototype.z;
}
var AmplifyLabel = /** @class */ (function () {
    function AmplifyLabel(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyLabel.decorators = [
        { type: Component, args: [{ selector: 'amplify-label', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['htmlFor'] },] },
    ];
    /** @nocollapse */
    AmplifyLabel.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyLabel = tslib_1.__decorate([
        ProxyCmp({ inputs: ['htmlFor'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyLabel);
    return AmplifyLabel;
}());
export { AmplifyLabel };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyLabel.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyLabel.prototype.z;
}
var AmplifyLink = /** @class */ (function () {
    function AmplifyLink(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyLink.decorators = [
        { type: Component, args: [{ selector: 'amplify-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['role'] },] },
    ];
    /** @nocollapse */
    AmplifyLink.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyLink = tslib_1.__decorate([
        ProxyCmp({ inputs: ['role'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyLink);
    return AmplifyLink;
}());
export { AmplifyLink };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyLink.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyLink.prototype.z;
}
var AmplifyLoadingSpinner = /** @class */ (function () {
    function AmplifyLoadingSpinner(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyLoadingSpinner.decorators = [
        { type: Component, args: [{ selector: 'amplify-loading-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyLoadingSpinner.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyLoadingSpinner;
}());
export { AmplifyLoadingSpinner };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyLoadingSpinner.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyLoadingSpinner.prototype.z;
}
var AmplifyNav = /** @class */ (function () {
    function AmplifyNav(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyNav.decorators = [
        { type: Component, args: [{ selector: 'amplify-nav', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyNav.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyNav;
}());
export { AmplifyNav };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyNav.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyNav.prototype.z;
}
var AmplifyOauthButton = /** @class */ (function () {
    function AmplifyOauthButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyOauthButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-oauth-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['config'] },] },
    ];
    /** @nocollapse */
    AmplifyOauthButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyOauthButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['config'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyOauthButton);
    return AmplifyOauthButton;
}());
export { AmplifyOauthButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyOauthButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyOauthButton.prototype.z;
}
var AmplifyPasswordField = /** @class */ (function () {
    function AmplifyPasswordField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyPasswordField.decorators = [
        { type: Component, args: [{ selector: 'amplify-password-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyPasswordField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyPasswordField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPasswordField);
    return AmplifyPasswordField;
}());
export { AmplifyPasswordField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyPasswordField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyPasswordField.prototype.z;
}
var AmplifyPhoneField = /** @class */ (function () {
    function AmplifyPhoneField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyPhoneField.decorators = [
        { type: Component, args: [{ selector: 'amplify-phone-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dialCode', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyPhoneField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyPhoneField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['dialCode', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPhoneField);
    return AmplifyPhoneField;
}());
export { AmplifyPhoneField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyPhoneField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyPhoneField.prototype.z;
}
var AmplifyPhotoPicker = /** @class */ (function () {
    function AmplifyPhotoPicker(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyPhotoPicker.decorators = [
        { type: Component, args: [{ selector: 'amplify-photo-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'handleClick', 'headerHint', 'headerTitle', 'placeholderHint', 'previewSrc'] },] },
    ];
    /** @nocollapse */
    AmplifyPhotoPicker.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyPhotoPicker = tslib_1.__decorate([
        ProxyCmp({ inputs: ['buttonText', 'handleClick', 'headerHint', 'headerTitle', 'placeholderHint', 'previewSrc'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPhotoPicker);
    return AmplifyPhotoPicker;
}());
export { AmplifyPhotoPicker };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyPhotoPicker.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyPhotoPicker.prototype.z;
}
var AmplifyPicker = /** @class */ (function () {
    function AmplifyPicker(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyPicker.decorators = [
        { type: Component, args: [{ selector: 'amplify-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['acceptValue', 'inputHandler', 'pickerText'] },] },
    ];
    /** @nocollapse */
    AmplifyPicker.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyPicker = tslib_1.__decorate([
        ProxyCmp({ inputs: ['acceptValue', 'inputHandler', 'pickerText'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPicker);
    return AmplifyPicker;
}());
export { AmplifyPicker };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyPicker.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyPicker.prototype.z;
}
var AmplifyRadioButton = /** @class */ (function () {
    function AmplifyRadioButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyRadioButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'name', 'placeholder', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyRadioButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyRadioButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'name', 'placeholder', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyRadioButton);
    return AmplifyRadioButton;
}());
export { AmplifyRadioButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyRadioButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyRadioButton.prototype.z;
}
var AmplifyRequireNewPassword = /** @class */ (function () {
    function AmplifyRequireNewPassword(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyRequireNewPassword.decorators = [
        { type: Component, args: [{ selector: 'amplify-require-new-password', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] },] },
    ];
    /** @nocollapse */
    AmplifyRequireNewPassword.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyRequireNewPassword = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyRequireNewPassword);
    return AmplifyRequireNewPassword;
}());
export { AmplifyRequireNewPassword };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyRequireNewPassword.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyRequireNewPassword.prototype.z;
}
var AmplifyS3Album = /** @class */ (function () {
    function AmplifyS3Album(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyS3Album.decorators = [
        { type: Component, args: [{ selector: 'amplify-s3-album', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentType', 'fileToKey', 'filter', 'handleOnError', 'handleOnLoad', 'identityId', 'level', 'path', 'picker', 'pickerText', 'sort', 'track'] },] },
    ];
    /** @nocollapse */
    AmplifyS3Album.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyS3Album = tslib_1.__decorate([
        ProxyCmp({ inputs: ['contentType', 'fileToKey', 'filter', 'handleOnError', 'handleOnLoad', 'identityId', 'level', 'path', 'picker', 'pickerText', 'sort', 'track'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Album);
    return AmplifyS3Album;
}());
export { AmplifyS3Album };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Album.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Album.prototype.z;
}
var AmplifyS3Image = /** @class */ (function () {
    function AmplifyS3Image(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyS3Image.decorators = [
        { type: Component, args: [{ selector: 'amplify-s3-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['body', 'contentType', 'handleOnError', 'handleOnLoad', 'identityId', 'imgKey', 'level', 'path', 'track'] },] },
    ];
    /** @nocollapse */
    AmplifyS3Image.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyS3Image = tslib_1.__decorate([
        ProxyCmp({ inputs: ['body', 'contentType', 'handleOnError', 'handleOnLoad', 'identityId', 'imgKey', 'level', 'path', 'track'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Image);
    return AmplifyS3Image;
}());
export { AmplifyS3Image };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Image.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Image.prototype.z;
}
var AmplifyS3ImagePicker = /** @class */ (function () {
    function AmplifyS3ImagePicker(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyS3ImagePicker.decorators = [
        { type: Component, args: [{ selector: 'amplify-s3-image-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'contentType', 'fileToKey', 'headerHint', 'headerTitle', 'identityId', 'level', 'path', 'placeholderHint', 'track'] },] },
    ];
    /** @nocollapse */
    AmplifyS3ImagePicker.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyS3ImagePicker = tslib_1.__decorate([
        ProxyCmp({ inputs: ['buttonText', 'contentType', 'fileToKey', 'headerHint', 'headerTitle', 'identityId', 'level', 'path', 'placeholderHint', 'track'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3ImagePicker);
    return AmplifyS3ImagePicker;
}());
export { AmplifyS3ImagePicker };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3ImagePicker.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3ImagePicker.prototype.z;
}
var AmplifyS3Text = /** @class */ (function () {
    function AmplifyS3Text(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyS3Text.decorators = [
        { type: Component, args: [{ selector: 'amplify-s3-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['body', 'contentType', 'fallbackText', 'identityId', 'level', 'path', 'textKey', 'track'] },] },
    ];
    /** @nocollapse */
    AmplifyS3Text.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyS3Text = tslib_1.__decorate([
        ProxyCmp({ inputs: ['body', 'contentType', 'fallbackText', 'identityId', 'level', 'path', 'textKey', 'track'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Text);
    return AmplifyS3Text;
}());
export { AmplifyS3Text };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Text.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3Text.prototype.z;
}
var AmplifyS3TextPicker = /** @class */ (function () {
    function AmplifyS3TextPicker(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyS3TextPicker.decorators = [
        { type: Component, args: [{ selector: 'amplify-s3-text-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentType', 'fallbackText', 'fileToKey', 'identityId', 'level', 'path', 'track'] },] },
    ];
    /** @nocollapse */
    AmplifyS3TextPicker.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyS3TextPicker = tslib_1.__decorate([
        ProxyCmp({ inputs: ['contentType', 'fallbackText', 'fileToKey', 'identityId', 'level', 'path', 'track'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3TextPicker);
    return AmplifyS3TextPicker;
}());
export { AmplifyS3TextPicker };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3TextPicker.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyS3TextPicker.prototype.z;
}
var AmplifySection = /** @class */ (function () {
    function AmplifySection(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySection.decorators = [
        { type: Component, args: [{ selector: 'amplify-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['role'] },] },
    ];
    /** @nocollapse */
    AmplifySection.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySection = tslib_1.__decorate([
        ProxyCmp({ inputs: ['role'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySection);
    return AmplifySection;
}());
export { AmplifySection };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySection.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySection.prototype.z;
}
var AmplifySelect = /** @class */ (function () {
    function AmplifySelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySelect.decorators = [
        { type: Component, args: [{ selector: 'amplify-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['fieldId', 'handleInputChange', 'options', 'selected'] },] },
    ];
    /** @nocollapse */
    AmplifySelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySelect = tslib_1.__decorate([
        ProxyCmp({ inputs: ['fieldId', 'handleInputChange', 'options', 'selected'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySelect);
    return AmplifySelect;
}());
export { AmplifySelect };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySelect.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySelect.prototype.z;
}
var AmplifySelectMfaType = /** @class */ (function () {
    function AmplifySelectMfaType(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySelectMfaType.decorators = [
        { type: Component, args: [{ selector: 'amplify-select-mfa-type', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['MFATypes', 'authData', 'handleSubmit'] },] },
    ];
    /** @nocollapse */
    AmplifySelectMfaType.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySelectMfaType = tslib_1.__decorate([
        ProxyCmp({ inputs: ['MFATypes', 'authData', 'handleSubmit'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySelectMfaType);
    return AmplifySelectMfaType;
}());
export { AmplifySelectMfaType };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySelectMfaType.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySelectMfaType.prototype.z;
}
var AmplifySignIn = /** @class */ (function () {
    function AmplifySignIn(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySignIn.decorators = [
        { type: Component, args: [{ selector: 'amplify-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['federated', 'formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'hideSignUp', 'submitButtonText', 'usernameAlias'] },] },
    ];
    /** @nocollapse */
    AmplifySignIn.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySignIn = tslib_1.__decorate([
        ProxyCmp({ inputs: ['federated', 'formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'hideSignUp', 'submitButtonText', 'usernameAlias'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignIn);
    return AmplifySignIn;
}());
export { AmplifySignIn };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySignIn.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySignIn.prototype.z;
}
var AmplifySignInButton = /** @class */ (function () {
    function AmplifySignInButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySignInButton.decorators = [
        { type: Component, args: [{ selector: 'amplify-sign-in-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['provider'] },] },
    ];
    /** @nocollapse */
    AmplifySignInButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySignInButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['provider'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignInButton);
    return AmplifySignInButton;
}());
export { AmplifySignInButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySignInButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySignInButton.prototype.z;
}
var AmplifySignOut = /** @class */ (function () {
    function AmplifySignOut(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySignOut.decorators = [
        { type: Component, args: [{ selector: 'amplify-sign-out', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'handleAuthStateChange'] },] },
    ];
    /** @nocollapse */
    AmplifySignOut.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySignOut = tslib_1.__decorate([
        ProxyCmp({ inputs: ['buttonText', 'handleAuthStateChange'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignOut);
    return AmplifySignOut;
}());
export { AmplifySignOut };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySignOut.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySignOut.prototype.z;
}
var AmplifySignUp = /** @class */ (function () {
    function AmplifySignUp(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifySignUp.decorators = [
        { type: Component, args: [{ selector: 'amplify-sign-up', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'haveAccountText', 'headerText', 'signInText', 'submitButtonText', 'usernameAlias', 'validationErrors'] },] },
    ];
    /** @nocollapse */
    AmplifySignUp.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifySignUp = tslib_1.__decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'haveAccountText', 'headerText', 'signInText', 'submitButtonText', 'usernameAlias', 'validationErrors'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignUp);
    return AmplifySignUp;
}());
export { AmplifySignUp };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifySignUp.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifySignUp.prototype.z;
}
var AmplifyStrike = /** @class */ (function () {
    function AmplifyStrike(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyStrike.decorators = [
        { type: Component, args: [{ selector: 'amplify-strike', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AmplifyStrike.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AmplifyStrike;
}());
export { AmplifyStrike };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyStrike.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyStrike.prototype.z;
}
var AmplifyToast = /** @class */ (function () {
    function AmplifyToast(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyToast.decorators = [
        { type: Component, args: [{ selector: 'amplify-toast', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleClose', 'message'] },] },
    ];
    /** @nocollapse */
    AmplifyToast.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyToast = tslib_1.__decorate([
        ProxyCmp({ inputs: ['handleClose', 'message'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyToast);
    return AmplifyToast;
}());
export { AmplifyToast };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyToast.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyToast.prototype.z;
}
var AmplifyTooltip = /** @class */ (function () {
    function AmplifyTooltip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyTooltip.decorators = [
        { type: Component, args: [{ selector: 'amplify-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['shouldAutoShow', 'text'] },] },
    ];
    /** @nocollapse */
    AmplifyTooltip.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyTooltip = tslib_1.__decorate([
        ProxyCmp({ inputs: ['shouldAutoShow', 'text'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyTooltip);
    return AmplifyTooltip;
}());
export { AmplifyTooltip };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyTooltip.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyTooltip.prototype.z;
}
var AmplifyTotpSetup = /** @class */ (function () {
    function AmplifyTotpSetup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyTotpSetup.decorators = [
        { type: Component, args: [{ selector: 'amplify-totp-setup', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'headerText', 'issuer', 'user'] },] },
    ];
    /** @nocollapse */
    AmplifyTotpSetup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyTotpSetup = tslib_1.__decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'headerText', 'issuer', 'user'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyTotpSetup);
    return AmplifyTotpSetup;
}());
export { AmplifyTotpSetup };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyTotpSetup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyTotpSetup.prototype.z;
}
var AmplifyUsernameField = /** @class */ (function () {
    function AmplifyUsernameField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyUsernameField.decorators = [
        { type: Component, args: [{ selector: 'amplify-username-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
    ];
    /** @nocollapse */
    AmplifyUsernameField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyUsernameField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyUsernameField);
    return AmplifyUsernameField;
}());
export { AmplifyUsernameField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyUsernameField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyUsernameField.prototype.z;
}
var AmplifyVerifyContact = /** @class */ (function () {
    function AmplifyVerifyContact(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AmplifyVerifyContact.decorators = [
        { type: Component, args: [{ selector: 'amplify-verify-contact', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'user'] },] },
    ];
    /** @nocollapse */
    AmplifyVerifyContact.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AmplifyVerifyContact = tslib_1.__decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'user'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyVerifyContact);
    return AmplifyVerifyContact;
}());
export { AmplifyVerifyContact };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AmplifyVerifyContact.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AmplifyVerifyContact.prototype.z;
}
