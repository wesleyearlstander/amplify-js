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
// tslint:disable
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
// tslint:enable
import { Component, } from '@angular/core';
import { AmplifyService } from '../../../providers/amplify.service';
import { S3ImageComponentCore } from './s3-image.component.core';
var template = "\n  <img\n    class=\"amplify-image\"\n    (click)=\"onImageClicked()\"\n    src=\"{{url}}\"\n  />\n";
var S3ImageComponentIonic = /** @class */ (function (_super) {
    __extends(S3ImageComponentIonic, _super);
    function S3ImageComponentIonic(amplifyService) {
        var _this = _super.call(this, amplifyService) || this;
        _this.amplifyService = amplifyService;
        return _this;
    }
    S3ImageComponentIonic.decorators = [
        { type: Component, args: [{
                    selector: 'amplify-s3-image-ionic',
                    template: template,
                },] },
    ];
    /** @nocollapse */
    S3ImageComponentIonic.ctorParameters = function () { return [
        { type: AmplifyService, },
    ]; };
    return S3ImageComponentIonic;
}(S3ImageComponentCore));
export { S3ImageComponentIonic };
//# sourceMappingURL=s3-image.component.ionic.js.map