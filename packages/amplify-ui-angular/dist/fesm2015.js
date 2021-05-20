import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@aws-amplify/ui-components/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => (this.el[item] = val))); }
        });
    }));
});
/** @type {?} */
const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
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
    const decorator = (/**
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
let AmplifyAmazonButton = class AmplifyAmazonButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyAmazonButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-amazon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clientId', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifyAmazonButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyAmazonButton = __decorate([
    ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyAmazonButton);
class AmplifyAuthContainer {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyAuthContainer.decorators = [
    { type: Component, args: [{ selector: 'amplify-auth-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyAuthContainer.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AmplifyAuthFields = class AmplifyAuthFields {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyAuthFields.decorators = [
    { type: Component, args: [{ selector: 'amplify-auth-fields', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields'] },] },
];
/** @nocollapse */
AmplifyAuthFields.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyAuthFields = __decorate([
    ProxyCmp({ inputs: ['formFields'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyAuthFields);
let AmplifyAuth0Button = class AmplifyAuth0Button {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyAuth0Button.decorators = [
    { type: Component, args: [{ selector: 'amplify-auth0-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['config', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifyAuth0Button.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyAuth0Button = __decorate([
    ProxyCmp({ inputs: ['config', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyAuth0Button);
let AmplifyAuthenticator = class AmplifyAuthenticator {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyAuthenticator.decorators = [
    { type: Component, args: [{ selector: 'amplify-authenticator', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['federated', 'handleAuthStateChange', 'hideToast', 'initialAuthState', 'usernameAlias'] },] },
];
/** @nocollapse */
AmplifyAuthenticator.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyAuthenticator = __decorate([
    ProxyCmp({ inputs: ['federated', 'handleAuthStateChange', 'hideToast', 'initialAuthState', 'usernameAlias'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyAuthenticator);
let AmplifyButton = class AmplifyButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'handleButtonClick', 'icon', 'type', 'variant'] },] },
];
/** @nocollapse */
AmplifyButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyButton = __decorate([
    ProxyCmp({ inputs: ['disabled', 'handleButtonClick', 'icon', 'type', 'variant'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyButton);
let AmplifyChatbot = class AmplifyChatbot {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['chatCompleted']);
    }
};
AmplifyChatbot.decorators = [
    { type: Component, args: [{ selector: 'amplify-chatbot', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['botName', 'botTitle', 'clearOnComplete', 'conversationModeOn', 'silenceThreshold', 'silenceTime', 'textEnabled', 'voiceEnabled', 'welcomeMessage'] },] },
];
/** @nocollapse */
AmplifyChatbot.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyChatbot = __decorate([
    ProxyCmp({ inputs: ['botName', 'botTitle', 'clearOnComplete', 'conversationModeOn', 'silenceThreshold', 'silenceTime', 'textEnabled', 'voiceEnabled', 'welcomeMessage'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyChatbot);
let AmplifyCheckbox = class AmplifyCheckbox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyCheckbox.decorators = [
    { type: Component, args: [{ selector: 'amplify-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'fieldId', 'label', 'name', 'value'] },] },
];
/** @nocollapse */
AmplifyCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyCheckbox = __decorate([
    ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'label', 'name', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyCheckbox);
let AmplifyCodeField = class AmplifyCodeField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyCodeField.decorators = [
    { type: Component, args: [{ selector: 'amplify-code-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
];
/** @nocollapse */
AmplifyCodeField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyCodeField = __decorate([
    ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyCodeField);
let AmplifyConfirmSignIn = class AmplifyConfirmSignIn {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyConfirmSignIn.decorators = [
    { type: Component, args: [{ selector: 'amplify-confirm-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] },] },
];
/** @nocollapse */
AmplifyConfirmSignIn.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyConfirmSignIn = __decorate([
    ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyConfirmSignIn);
let AmplifyConfirmSignUp = class AmplifyConfirmSignUp {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyConfirmSignUp.decorators = [
    { type: Component, args: [{ selector: 'amplify-confirm-sign-up', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user', 'usernameAlias'] },] },
];
/** @nocollapse */
AmplifyConfirmSignUp.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyConfirmSignUp = __decorate([
    ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user', 'usernameAlias'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyConfirmSignUp);
class AmplifyContainer {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyContainer.decorators = [
    { type: Component, args: [{ selector: 'amplify-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyContainer.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AmplifyCountryDialCode = class AmplifyCountryDialCode {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyCountryDialCode.decorators = [
    { type: Component, args: [{ selector: 'amplify-country-dial-code', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dialCode', 'fieldId', 'handleInputChange', 'options'] },] },
];
/** @nocollapse */
AmplifyCountryDialCode.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyCountryDialCode = __decorate([
    ProxyCmp({ inputs: ['dialCode', 'fieldId', 'handleInputChange', 'options'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyCountryDialCode);
let AmplifyEmailField = class AmplifyEmailField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyEmailField.decorators = [
    { type: Component, args: [{ selector: 'amplify-email-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
];
/** @nocollapse */
AmplifyEmailField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyEmailField = __decorate([
    ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyEmailField);
let AmplifyFacebookButton = class AmplifyFacebookButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyFacebookButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-facebook-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appId', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifyFacebookButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyFacebookButton = __decorate([
    ProxyCmp({ inputs: ['appId', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyFacebookButton);
let AmplifyFederatedButtons = class AmplifyFederatedButtons {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyFederatedButtons.decorators = [
    { type: Component, args: [{ selector: 'amplify-federated-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['authState', 'federated', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifyFederatedButtons.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyFederatedButtons = __decorate([
    ProxyCmp({ inputs: ['authState', 'federated', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyFederatedButtons);
let AmplifyFederatedSignIn = class AmplifyFederatedSignIn {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyFederatedSignIn.decorators = [
    { type: Component, args: [{ selector: 'amplify-federated-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['authState', 'federated'] },] },
];
/** @nocollapse */
AmplifyFederatedSignIn.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyFederatedSignIn = __decorate([
    ProxyCmp({ inputs: ['authState', 'federated'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyFederatedSignIn);
let AmplifyForgotPassword = class AmplifyForgotPassword {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyForgotPassword.decorators = [
    { type: Component, args: [{ selector: 'amplify-forgot-password', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSend', 'handleSubmit', 'headerText', 'sendButtonText', 'submitButtonText', 'usernameAlias'] },] },
];
/** @nocollapse */
AmplifyForgotPassword.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyForgotPassword = __decorate([
    ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSend', 'handleSubmit', 'headerText', 'sendButtonText', 'submitButtonText', 'usernameAlias'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyForgotPassword);
let AmplifyFormField = class AmplifyFormField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyFormField.decorators = [
    { type: Component, args: [{ selector: 'amplify-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'name', 'placeholder', 'required', 'type', 'value'] },] },
];
/** @nocollapse */
AmplifyFormField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyFormField = __decorate([
    ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'name', 'placeholder', 'required', 'type', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyFormField);
let AmplifyFormSection = class AmplifyFormSection {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyFormSection.decorators = [
    { type: Component, args: [{ selector: 'amplify-form-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleSubmit', 'headerText', 'loading', 'secondaryFooterContent', 'submitButtonText', 'testDataPrefix'] },] },
];
/** @nocollapse */
AmplifyFormSection.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyFormSection = __decorate([
    ProxyCmp({ inputs: ['handleSubmit', 'headerText', 'loading', 'secondaryFooterContent', 'submitButtonText', 'testDataPrefix'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyFormSection);
let AmplifyGoogleButton = class AmplifyGoogleButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyGoogleButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-google-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clientId', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifyGoogleButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyGoogleButton = __decorate([
    ProxyCmp({ inputs: ['clientId', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyGoogleButton);
let AmplifyGreetings = class AmplifyGreetings {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyGreetings.decorators = [
    { type: Component, args: [{ selector: 'amplify-greetings', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'logo', 'username'] },] },
];
/** @nocollapse */
AmplifyGreetings.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyGreetings = __decorate([
    ProxyCmp({ inputs: ['handleAuthStateChange', 'logo', 'username'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyGreetings);
class AmplifyHint {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyHint.decorators = [
    { type: Component, args: [{ selector: 'amplify-hint', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyHint.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AmplifyIcon = class AmplifyIcon {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyIcon.decorators = [
    { type: Component, args: [{ selector: 'amplify-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['name'] },] },
];
/** @nocollapse */
AmplifyIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyIcon = __decorate([
    ProxyCmp({ inputs: ['name'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyIcon);
let AmplifyIconButton = class AmplifyIconButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyIconButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-icon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoShowTooltip', 'name', 'tooltip'] },] },
];
/** @nocollapse */
AmplifyIconButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyIconButton = __decorate([
    ProxyCmp({ inputs: ['autoShowTooltip', 'name', 'tooltip'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyIconButton);
let AmplifyInput = class AmplifyInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyInput.decorators = [
    { type: Component, args: [{ selector: 'amplify-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'name', 'placeholder', 'type', 'value'] },] },
];
/** @nocollapse */
AmplifyInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyInput = __decorate([
    ProxyCmp({ inputs: ['description', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'name', 'placeholder', 'type', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyInput);
let AmplifyLabel = class AmplifyLabel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyLabel.decorators = [
    { type: Component, args: [{ selector: 'amplify-label', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['htmlFor'] },] },
];
/** @nocollapse */
AmplifyLabel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyLabel = __decorate([
    ProxyCmp({ inputs: ['htmlFor'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyLabel);
let AmplifyLink = class AmplifyLink {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyLink.decorators = [
    { type: Component, args: [{ selector: 'amplify-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['role'] },] },
];
/** @nocollapse */
AmplifyLink.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyLink = __decorate([
    ProxyCmp({ inputs: ['role'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyLink);
class AmplifyLoadingSpinner {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyLoadingSpinner.decorators = [
    { type: Component, args: [{ selector: 'amplify-loading-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyLoadingSpinner.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class AmplifyNav {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyNav.decorators = [
    { type: Component, args: [{ selector: 'amplify-nav', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyNav.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AmplifyOauthButton = class AmplifyOauthButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyOauthButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-oauth-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['config'] },] },
];
/** @nocollapse */
AmplifyOauthButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyOauthButton = __decorate([
    ProxyCmp({ inputs: ['config'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyOauthButton);
let AmplifyPasswordField = class AmplifyPasswordField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyPasswordField.decorators = [
    { type: Component, args: [{ selector: 'amplify-password-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
];
/** @nocollapse */
AmplifyPasswordField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyPasswordField = __decorate([
    ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyPasswordField);
let AmplifyPhoneField = class AmplifyPhoneField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyPhoneField.decorators = [
    { type: Component, args: [{ selector: 'amplify-phone-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dialCode', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
];
/** @nocollapse */
AmplifyPhoneField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyPhoneField = __decorate([
    ProxyCmp({ inputs: ['dialCode', 'disabled', 'fieldId', 'handleInputChange', 'hint', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyPhoneField);
let AmplifyPhotoPicker = class AmplifyPhotoPicker {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyPhotoPicker.decorators = [
    { type: Component, args: [{ selector: 'amplify-photo-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'handleClick', 'headerHint', 'headerTitle', 'placeholderHint', 'previewSrc'] },] },
];
/** @nocollapse */
AmplifyPhotoPicker.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyPhotoPicker = __decorate([
    ProxyCmp({ inputs: ['buttonText', 'handleClick', 'headerHint', 'headerTitle', 'placeholderHint', 'previewSrc'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyPhotoPicker);
let AmplifyPicker = class AmplifyPicker {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyPicker.decorators = [
    { type: Component, args: [{ selector: 'amplify-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['acceptValue', 'inputHandler', 'pickerText'] },] },
];
/** @nocollapse */
AmplifyPicker.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyPicker = __decorate([
    ProxyCmp({ inputs: ['acceptValue', 'inputHandler', 'pickerText'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyPicker);
let AmplifyRadioButton = class AmplifyRadioButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyRadioButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'name', 'placeholder', 'value'] },] },
];
/** @nocollapse */
AmplifyRadioButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyRadioButton = __decorate([
    ProxyCmp({ inputs: ['checked', 'disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'name', 'placeholder', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyRadioButton);
let AmplifyRequireNewPassword = class AmplifyRequireNewPassword {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyRequireNewPassword.decorators = [
    { type: Component, args: [{ selector: 'amplify-require-new-password', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] },] },
];
/** @nocollapse */
AmplifyRequireNewPassword.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyRequireNewPassword = __decorate([
    ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'submitButtonText', 'user'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyRequireNewPassword);
let AmplifyS3Album = class AmplifyS3Album {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyS3Album.decorators = [
    { type: Component, args: [{ selector: 'amplify-s3-album', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentType', 'fileToKey', 'filter', 'handleOnError', 'handleOnLoad', 'identityId', 'level', 'path', 'picker', 'pickerText', 'sort', 'track'] },] },
];
/** @nocollapse */
AmplifyS3Album.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyS3Album = __decorate([
    ProxyCmp({ inputs: ['contentType', 'fileToKey', 'filter', 'handleOnError', 'handleOnLoad', 'identityId', 'level', 'path', 'picker', 'pickerText', 'sort', 'track'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyS3Album);
let AmplifyS3Image = class AmplifyS3Image {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyS3Image.decorators = [
    { type: Component, args: [{ selector: 'amplify-s3-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['body', 'contentType', 'handleOnError', 'handleOnLoad', 'identityId', 'imgKey', 'level', 'path', 'track'] },] },
];
/** @nocollapse */
AmplifyS3Image.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyS3Image = __decorate([
    ProxyCmp({ inputs: ['body', 'contentType', 'handleOnError', 'handleOnLoad', 'identityId', 'imgKey', 'level', 'path', 'track'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyS3Image);
let AmplifyS3ImagePicker = class AmplifyS3ImagePicker {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyS3ImagePicker.decorators = [
    { type: Component, args: [{ selector: 'amplify-s3-image-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'contentType', 'fileToKey', 'headerHint', 'headerTitle', 'identityId', 'level', 'path', 'placeholderHint', 'track'] },] },
];
/** @nocollapse */
AmplifyS3ImagePicker.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyS3ImagePicker = __decorate([
    ProxyCmp({ inputs: ['buttonText', 'contentType', 'fileToKey', 'headerHint', 'headerTitle', 'identityId', 'level', 'path', 'placeholderHint', 'track'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyS3ImagePicker);
let AmplifyS3Text = class AmplifyS3Text {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyS3Text.decorators = [
    { type: Component, args: [{ selector: 'amplify-s3-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['body', 'contentType', 'fallbackText', 'identityId', 'level', 'path', 'textKey', 'track'] },] },
];
/** @nocollapse */
AmplifyS3Text.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyS3Text = __decorate([
    ProxyCmp({ inputs: ['body', 'contentType', 'fallbackText', 'identityId', 'level', 'path', 'textKey', 'track'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyS3Text);
let AmplifyS3TextPicker = class AmplifyS3TextPicker {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyS3TextPicker.decorators = [
    { type: Component, args: [{ selector: 'amplify-s3-text-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentType', 'fallbackText', 'fileToKey', 'identityId', 'level', 'path', 'track'] },] },
];
/** @nocollapse */
AmplifyS3TextPicker.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyS3TextPicker = __decorate([
    ProxyCmp({ inputs: ['contentType', 'fallbackText', 'fileToKey', 'identityId', 'level', 'path', 'track'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyS3TextPicker);
let AmplifySection = class AmplifySection {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySection.decorators = [
    { type: Component, args: [{ selector: 'amplify-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['role'] },] },
];
/** @nocollapse */
AmplifySection.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySection = __decorate([
    ProxyCmp({ inputs: ['role'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySection);
let AmplifySelect = class AmplifySelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySelect.decorators = [
    { type: Component, args: [{ selector: 'amplify-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['fieldId', 'handleInputChange', 'options', 'selected'] },] },
];
/** @nocollapse */
AmplifySelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySelect = __decorate([
    ProxyCmp({ inputs: ['fieldId', 'handleInputChange', 'options', 'selected'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySelect);
let AmplifySelectMfaType = class AmplifySelectMfaType {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySelectMfaType.decorators = [
    { type: Component, args: [{ selector: 'amplify-select-mfa-type', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['MFATypes', 'authData', 'handleSubmit'] },] },
];
/** @nocollapse */
AmplifySelectMfaType.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySelectMfaType = __decorate([
    ProxyCmp({ inputs: ['MFATypes', 'authData', 'handleSubmit'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySelectMfaType);
let AmplifySignIn = class AmplifySignIn {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySignIn.decorators = [
    { type: Component, args: [{ selector: 'amplify-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['federated', 'formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'hideSignUp', 'submitButtonText', 'usernameAlias'] },] },
];
/** @nocollapse */
AmplifySignIn.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySignIn = __decorate([
    ProxyCmp({ inputs: ['federated', 'formFields', 'handleAuthStateChange', 'handleSubmit', 'headerText', 'hideSignUp', 'submitButtonText', 'usernameAlias'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySignIn);
let AmplifySignInButton = class AmplifySignInButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySignInButton.decorators = [
    { type: Component, args: [{ selector: 'amplify-sign-in-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['provider'] },] },
];
/** @nocollapse */
AmplifySignInButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySignInButton = __decorate([
    ProxyCmp({ inputs: ['provider'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySignInButton);
let AmplifySignOut = class AmplifySignOut {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySignOut.decorators = [
    { type: Component, args: [{ selector: 'amplify-sign-out', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonText', 'handleAuthStateChange'] },] },
];
/** @nocollapse */
AmplifySignOut.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySignOut = __decorate([
    ProxyCmp({ inputs: ['buttonText', 'handleAuthStateChange'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySignOut);
let AmplifySignUp = class AmplifySignUp {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifySignUp.decorators = [
    { type: Component, args: [{ selector: 'amplify-sign-up', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'haveAccountText', 'headerText', 'signInText', 'submitButtonText', 'usernameAlias', 'validationErrors'] },] },
];
/** @nocollapse */
AmplifySignUp.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifySignUp = __decorate([
    ProxyCmp({ inputs: ['formFields', 'handleAuthStateChange', 'handleSubmit', 'haveAccountText', 'headerText', 'signInText', 'submitButtonText', 'usernameAlias', 'validationErrors'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifySignUp);
class AmplifyStrike {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AmplifyStrike.decorators = [
    { type: Component, args: [{ selector: 'amplify-strike', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AmplifyStrike.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AmplifyToast = class AmplifyToast {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyToast.decorators = [
    { type: Component, args: [{ selector: 'amplify-toast', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleClose', 'message'] },] },
];
/** @nocollapse */
AmplifyToast.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyToast = __decorate([
    ProxyCmp({ inputs: ['handleClose', 'message'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyToast);
let AmplifyTooltip = class AmplifyTooltip {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyTooltip.decorators = [
    { type: Component, args: [{ selector: 'amplify-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['shouldAutoShow', 'text'] },] },
];
/** @nocollapse */
AmplifyTooltip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyTooltip = __decorate([
    ProxyCmp({ inputs: ['shouldAutoShow', 'text'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyTooltip);
let AmplifyTotpSetup = class AmplifyTotpSetup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyTotpSetup.decorators = [
    { type: Component, args: [{ selector: 'amplify-totp-setup', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'headerText', 'issuer', 'user'] },] },
];
/** @nocollapse */
AmplifyTotpSetup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyTotpSetup = __decorate([
    ProxyCmp({ inputs: ['handleAuthStateChange', 'headerText', 'issuer', 'user'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyTotpSetup);
let AmplifyUsernameField = class AmplifyUsernameField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyUsernameField.decorators = [
    { type: Component, args: [{ selector: 'amplify-username-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] },] },
];
/** @nocollapse */
AmplifyUsernameField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyUsernameField = __decorate([
    ProxyCmp({ inputs: ['disabled', 'fieldId', 'handleInputChange', 'inputProps', 'label', 'placeholder', 'required', 'value'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyUsernameField);
let AmplifyVerifyContact = class AmplifyVerifyContact {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AmplifyVerifyContact.decorators = [
    { type: Component, args: [{ selector: 'amplify-verify-contact', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['handleAuthStateChange', 'user'] },] },
];
/** @nocollapse */
AmplifyVerifyContact.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AmplifyVerifyContact = __decorate([
    ProxyCmp({ inputs: ['handleAuthStateChange', 'user'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AmplifyVerifyContact);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
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
class AmplifyUIAngularModule {
}
AmplifyUIAngularModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            },] },
];

export { AmplifyAmazonButton, AmplifyAuth0Button, AmplifyAuthContainer, AmplifyAuthFields, AmplifyAuthenticator, AmplifyButton, AmplifyChatbot, AmplifyCheckbox, AmplifyCodeField, AmplifyConfirmSignIn, AmplifyConfirmSignUp, AmplifyContainer, AmplifyCountryDialCode, AmplifyEmailField, AmplifyFacebookButton, AmplifyFederatedButtons, AmplifyFederatedSignIn, AmplifyForgotPassword, AmplifyFormField, AmplifyFormSection, AmplifyGoogleButton, AmplifyGreetings, AmplifyHint, AmplifyIcon, AmplifyIconButton, AmplifyInput, AmplifyLabel, AmplifyLink, AmplifyLoadingSpinner, AmplifyNav, AmplifyOauthButton, AmplifyPasswordField, AmplifyPhoneField, AmplifyPhotoPicker, AmplifyPicker, AmplifyRadioButton, AmplifyRequireNewPassword, AmplifyS3Album, AmplifyS3Image, AmplifyS3ImagePicker, AmplifyS3Text, AmplifyS3TextPicker, AmplifySection, AmplifySelect, AmplifySelectMfaType, AmplifySignIn, AmplifySignInButton, AmplifySignOut, AmplifySignUp, AmplifyStrike, AmplifyToast, AmplifyTooltip, AmplifyTotpSetup, AmplifyUIAngularModule, AmplifyUsernameField, AmplifyVerifyContact, ProxyCmp, proxyInputs, proxyMethods, proxyOutputs };
