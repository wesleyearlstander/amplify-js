import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@aws-amplify/ui-components/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var proxyInputs = (/**
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
var proxyMethods = (/**
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
var proxyOutputs = (/**
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
function ProxyCmp(opts) {
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
    AmplifyAmazonButton = __decorate([
        ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAmazonButton);
    return AmplifyAmazonButton;
}());
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
    AmplifyAuthFields = __decorate([
        ProxyCmp({ inputs: ['formFields'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuthFields);
    return AmplifyAuthFields;
}());
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
    AmplifyAuth0Button = __decorate([
        ProxyCmp({ inputs: ['config', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuth0Button);
    return AmplifyAuth0Button;
}());
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
    AmplifyAuthenticator = __decorate([
        ProxyCmp({ inputs: ['federated', 'handleAuthStateChange', 'hideToast', 'initialAuthState', 'usernameAlias'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyAuthenticator);
    return AmplifyAuthenticator;
}());
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
    AmplifyButton = __decorate([
        ProxyCmp({ inputs: ['disabled', 'handleButtonClick', 'icon', 'type', 'variant'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyButton);
    return AmplifyButton;
}());
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
    AmplifyChatbot = __decorate([
        ProxyCmp({ inputs: ['botName', 'botTitle', 'clearOnComplete', 'conversationModeOn', 'silenceThreshold', 'silenceTime', 'textEnabled', 'voiceEnabled', 'welcomeMessage'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyChatbot);
    return AmplifyChatbot;
}());
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
    AmplifyCheckbox = __decorate([
        ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'label', 'name', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCheckbox);
    return AmplifyCheckbox;
}());
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
    AmplifyCodeField = __decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCodeField);
    return AmplifyCodeField;
}());
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
    AmplifyConfirmSignIn = __decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyConfirmSignIn);
    return AmplifyConfirmSignIn;
}());
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
    AmplifyConfirmSignUp = __decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user', 'usernameAlias'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyConfirmSignUp);
    return AmplifyConfirmSignUp;
}());
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
    AmplifyCountryDialCode = __decorate([
        ProxyCmp({ inputs: ['dialCode', 'fieldId', 'handleInputChange', 'options'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyCountryDialCode);
    return AmplifyCountryDialCode;
}());
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
    AmplifyEmailField = __decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyEmailField);
    return AmplifyEmailField;
}());
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
    AmplifyFacebookButton = __decorate([
        ProxyCmp({ inputs: ['appId', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFacebookButton);
    return AmplifyFacebookButton;
}());
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
    AmplifyFederatedButtons = __decorate([
        ProxyCmp({ inputs: ['authState', 'federated', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFederatedButtons);
    return AmplifyFederatedButtons;
}());
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
    AmplifyFederatedSignIn = __decorate([
        ProxyCmp({ inputs: ['authState', 'federated'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFederatedSignIn);
    return AmplifyFederatedSignIn;
}());
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
    AmplifyForgotPassword = __decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSend', 'handleSubmit', 'headerText', 'sendButtonText', 'submitButtonText', 'usernameAlias'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyForgotPassword);
    return AmplifyForgotPassword;
}());
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
    AmplifyFormField = __decorate([
        ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'name', 'placeholder', 'required', 'type', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFormField);
    return AmplifyFormField;
}());
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
    AmplifyFormSection = __decorate([
        ProxyCmp({ inputs: ['handleSubmit', 'headerText', 'loading', 'secondaryFooterContent', 'submitButtonText', 'testDataPrefix'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyFormSection);
    return AmplifyFormSection;
}());
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
    AmplifyGoogleButton = __decorate([
        ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyGoogleButton);
    return AmplifyGoogleButton;
}());
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
    AmplifyGreetings = __decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'logo', 'username'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyGreetings);
    return AmplifyGreetings;
}());
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
    AmplifyIcon = __decorate([
        ProxyCmp({ inputs: ['name'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyIcon);
    return AmplifyIcon;
}());
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
    AmplifyIconButton = __decorate([
        ProxyCmp({ inputs: ['autoShowTooltip', 'name', 'tooltip'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyIconButton);
    return AmplifyIconButton;
}());
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
    AmplifyInput = __decorate([
        ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'name', 'placeholder', 'type', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyInput);
    return AmplifyInput;
}());
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
    AmplifyLabel = __decorate([
        ProxyCmp({ inputs: ['htmlFor'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyLabel);
    return AmplifyLabel;
}());
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
    AmplifyLink = __decorate([
        ProxyCmp({ inputs: ['role'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyLink);
    return AmplifyLink;
}());
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
    AmplifyOauthButton = __decorate([
        ProxyCmp({ inputs: ['config'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyOauthButton);
    return AmplifyOauthButton;
}());
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
    AmplifyPasswordField = __decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPasswordField);
    return AmplifyPasswordField;
}());
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
    AmplifyPhoneField = __decorate([
        ProxyCmp({ inputs: ['dialCode', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPhoneField);
    return AmplifyPhoneField;
}());
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
    AmplifyPhotoPicker = __decorate([
        ProxyCmp({ inputs: ['buttonText', 'handleClick', 'headerHint', 'headerTitle', 'placeholderHint', 'previewSrc'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPhotoPicker);
    return AmplifyPhotoPicker;
}());
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
    AmplifyPicker = __decorate([
        ProxyCmp({ inputs: ['acceptValue', 'inputHandler', 'pickerText'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyPicker);
    return AmplifyPicker;
}());
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
    AmplifyRadioButton = __decorate([
        ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'name', 'placeholder', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyRadioButton);
    return AmplifyRadioButton;
}());
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
    AmplifyRequireNewPassword = __decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyRequireNewPassword);
    return AmplifyRequireNewPassword;
}());
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
    AmplifyS3Album = __decorate([
        ProxyCmp({ inputs: ['contentType', 'fileToKey', 'filter', 'handleOnError', 'handleOnLoad', 'identityId', 'level', 'path', 'picker', 'pickerText', 'sort', 'track'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Album);
    return AmplifyS3Album;
}());
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
    AmplifyS3Image = __decorate([
        ProxyCmp({ inputs: ['body', 'contentType', 'handleOnError', 'handleOnLoad', 'identityId', 'imgKey', 'level', 'path', 'track'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Image);
    return AmplifyS3Image;
}());
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
    AmplifyS3ImagePicker = __decorate([
        ProxyCmp({ inputs: ['buttonText', 'contentType', 'fileToKey', 'headerHint', 'headerTitle', 'identityId', 'level', 'path', 'placeholderHint', 'track'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3ImagePicker);
    return AmplifyS3ImagePicker;
}());
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
    AmplifyS3Text = __decorate([
        ProxyCmp({ inputs: ['body', 'contentType', 'fallbackText', 'identityId', 'level', 'path', 'textKey', 'track'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3Text);
    return AmplifyS3Text;
}());
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
    AmplifyS3TextPicker = __decorate([
        ProxyCmp({ inputs: ['contentType', 'fallbackText', 'fileToKey', 'identityId', 'level', 'path', 'track'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyS3TextPicker);
    return AmplifyS3TextPicker;
}());
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
    AmplifySection = __decorate([
        ProxyCmp({ inputs: ['role'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySection);
    return AmplifySection;
}());
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
    AmplifySelect = __decorate([
        ProxyCmp({ inputs: ['fieldId', 'handleInputChange', 'options', 'selected'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySelect);
    return AmplifySelect;
}());
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
    AmplifySelectMfaType = __decorate([
        ProxyCmp({ inputs: ['MFATypes', 'authData', 'handleSubmit'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySelectMfaType);
    return AmplifySelectMfaType;
}());
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
    AmplifySignIn = __decorate([
        ProxyCmp({ inputs: ['federated', 'formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'hideSignUp', 'submitButtonText', 'usernameAlias'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignIn);
    return AmplifySignIn;
}());
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
    AmplifySignInButton = __decorate([
        ProxyCmp({ inputs: ['provider'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignInButton);
    return AmplifySignInButton;
}());
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
    AmplifySignOut = __decorate([
        ProxyCmp({ inputs: ['buttonText', 'handleAuthStateChange'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignOut);
    return AmplifySignOut;
}());
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
    AmplifySignUp = __decorate([
        ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'haveAccountText', 'headerText', 'signInText', 'submitButtonText', 'usernameAlias', 'validationErrors'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifySignUp);
    return AmplifySignUp;
}());
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
    AmplifyToast = __decorate([
        ProxyCmp({ inputs: ['handleClose', 'message'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyToast);
    return AmplifyToast;
}());
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
    AmplifyTooltip = __decorate([
        ProxyCmp({ inputs: ['shouldAutoShow', 'text'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyTooltip);
    return AmplifyTooltip;
}());
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
    AmplifyTotpSetup = __decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'headerText', 'issuer', 'user'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyTotpSetup);
    return AmplifyTotpSetup;
}());
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
    AmplifyUsernameField = __decorate([
        ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyUsernameField);
    return AmplifyUsernameField;
}());
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
    AmplifyVerifyContact = __decorate([
        ProxyCmp({ inputs: ['handleAuthStateChange', 'user'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AmplifyVerifyContact);
    return AmplifyVerifyContact;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    AmplifyAmazonButton,
    AmplifyAuth0Button,
    AmplifyAuthenticator,
    AmplifyAuthContainer,
    AmplifyAuthFields,
    AmplifyButton,
    AmplifyChatbot,
    AmplifyCheckbox,
    AmplifyCodeField,
    AmplifyConfirmSignIn,
    AmplifyConfirmSignUp,
    AmplifyContainer,
    AmplifyCountryDialCode,
    AmplifyEmailField,
    AmplifyFacebookButton,
    AmplifyFederatedButtons,
    AmplifyFederatedSignIn,
    AmplifyForgotPassword,
    AmplifyFormField,
    AmplifyFormSection,
    AmplifyGoogleButton,
    AmplifyGreetings,
    AmplifyHint,
    AmplifyIcon,
    AmplifyIconButton,
    AmplifyInput,
    AmplifyLabel,
    AmplifyLink,
    AmplifyLoadingSpinner,
    AmplifyNav,
    AmplifyOauthButton,
    AmplifyPasswordField,
    AmplifyPhoneField,
    AmplifyPhotoPicker,
    AmplifyPicker,
    AmplifyRadioButton,
    AmplifyRequireNewPassword,
    AmplifyS3Album,
    AmplifyS3Image,
    AmplifyS3ImagePicker,
    AmplifyS3Text,
    AmplifyS3TextPicker,
    AmplifySection,
    AmplifySelect,
    AmplifySelectMfaType,
    AmplifySignIn,
    AmplifySignInButton,
    AmplifySignOut,
    AmplifySignUp,
    AmplifyStrike,
    AmplifyToast,
    AmplifyTooltip,
    AmplifyTotpSetup,
    AmplifyUsernameField,
    AmplifyVerifyContact,
];
var AmplifyUIAngularModule = /** @class */ (function () {
    function AmplifyUIAngularModule() {
    }
    AmplifyUIAngularModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: [],
                },] },
    ];
    return AmplifyUIAngularModule;
}());

export { AmplifyAmazonButton, AmplifyAuth0Button, AmplifyAuthContainer, AmplifyAuthFields, AmplifyAuthenticator, AmplifyButton, AmplifyChatbot, AmplifyCheckbox, AmplifyCodeField, AmplifyConfirmSignIn, AmplifyConfirmSignUp, AmplifyContainer, AmplifyCountryDialCode, AmplifyEmailField, AmplifyFacebookButton, AmplifyFederatedButtons, AmplifyFederatedSignIn, AmplifyForgotPassword, AmplifyFormField, AmplifyFormSection, AmplifyGoogleButton, AmplifyGreetings, AmplifyHint, AmplifyIcon, AmplifyIconButton, AmplifyInput, AmplifyLabel, AmplifyLink, AmplifyLoadingSpinner, AmplifyNav, AmplifyOauthButton, AmplifyPasswordField, AmplifyPhoneField, AmplifyPhotoPicker, AmplifyPicker, AmplifyRadioButton, AmplifyRequireNewPassword, AmplifyS3Album, AmplifyS3Image, AmplifyS3ImagePicker, AmplifyS3Text, AmplifyS3TextPicker, AmplifySection, AmplifySelect, AmplifySelectMfaType, AmplifySignIn, AmplifySignInButton, AmplifySignOut, AmplifySignUp, AmplifyStrike, AmplifyToast, AmplifyTooltip, AmplifyTotpSetup, AmplifyUIAngularModule, AmplifyUsernameField, AmplifyVerifyContact, ProxyCmp, proxyInputs, proxyMethods, proxyOutputs };
