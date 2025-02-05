/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../phone-field-component/phone-field.component.core.ngfactory";
import * as i2 from "../phone-field-component/phone-field.component.core";
import * as i3 from "../../../providers/amplify.service";
import * as i4 from "@angular/common";
import * as i5 from "./username-field.component.core";
var styles_UsernameFieldComponentCore = [];
var RenderType_UsernameFieldComponentCore = i0.ɵcrt({ encapsulation: 2, styles: styles_UsernameFieldComponentCore, data: {} });
export { RenderType_UsernameFieldComponentCore as RenderType_UsernameFieldComponentCore };
function View_UsernameFieldComponentCore_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "label", [["class", "amplify-input-label"], ["for", "emailField"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, [" ", " *"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, [["emailField", 1]], null, 0, "input", [["class", "amplify-form-input"], ["data-test", "email-input"], ["type", "email"]], [[8, "placeholder", 0]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.setEmail($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.amplifyService.i18n().get("Email"); _ck(_v, 3, 0, currVal_0); var currVal_1 = i0.ɵinlineInterpolate(1, "", _co.amplifyService.i18n().get(_co.getPlaceholder()), ""); _ck(_v, 5, 0, currVal_1); }); }
function View_UsernameFieldComponentCore_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "amplify-auth-phone-field-core", [], null, [[null, "phoneFieldChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("phoneFieldChanged" === en)) {
        var pd_0 = (_co.onPhoneFieldChanged($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_PhoneFieldComponentCore_0, i1.RenderType_PhoneFieldComponentCore)), i0.ɵdid(3, 245760, null, 0, i2.PhoneFieldComponentCore, [i3.AmplifyService], null, { phoneFieldChanged: "phoneFieldChanged" }), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_UsernameFieldComponentCore_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "label", [["class", "amplify-input-label"], ["for", "usernameField"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, [" ", " *"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, [["usernameField", 1]], null, 0, "input", [["class", "amplify-form-input"], ["data-test", "username-input"], ["type", "text"]], [[8, "value", 0], [8, "placeholder", 0]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.setUsername($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.amplifyService.i18n().get(_co.getUsernameLabel()); _ck(_v, 3, 0, currVal_0); var currVal_1 = i0.ɵinlineInterpolate(1, "", _co.username, ""); var currVal_2 = i0.ɵinlineInterpolate(1, "", _co.amplifyService.i18n().get(_co.getPlaceholder()), ""); _ck(_v, 5, 0, currVal_1, currVal_2); }); }
export function View_UsernameFieldComponentCore_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 10, "div", [["class", "amplify-amplify-form-row amplify-signin-username"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UsernameFieldComponentCore_1)), i0.ɵdid(4, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UsernameFieldComponentCore_2)), i0.ɵdid(7, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UsernameFieldComponentCore_3)), i0.ɵdid(10, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co._usernameAttributes === "email"); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co._usernameAttributes === "phone_number"); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co._usernameAttributes !== "email") && (_co._usernameAttributes !== "phone_number")); _ck(_v, 10, 0, currVal_2); }, null); }
export function View_UsernameFieldComponentCore_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "amplify-auth-username-field-core", [], null, null, null, View_UsernameFieldComponentCore_0, RenderType_UsernameFieldComponentCore)), i0.ɵdid(1, 245760, null, 0, i5.UsernameFieldComponentCore, [i3.AmplifyService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UsernameFieldComponentCoreNgFactory = i0.ɵccf("amplify-auth-username-field-core", i5.UsernameFieldComponentCore, View_UsernameFieldComponentCore_Host_0, { data: "data", usernameAttributes: "usernameAttributes", placeholder: "placeholder" }, { usernameFieldChanged: "usernameFieldChanged" }, []);
export { UsernameFieldComponentCoreNgFactory as UsernameFieldComponentCoreNgFactory };
//# sourceMappingURL=username-field.component.core.ngfactory.js.map