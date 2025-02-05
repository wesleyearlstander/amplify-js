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
import * as React from 'react';
import { I18n, ConsoleLogger as Logger } from '@aws-amplify/core';
import AmplifyTheme from '../Amplify-UI/Amplify-UI-Theme';
import { PhotoPickerButton } from '../Amplify-UI/Amplify-UI-Components-React';
var PickerInput = {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    cursor: 'pointer',
};
var logger = new Logger('Picker');
var Picker = /** @class */ (function (_super) {
    __extends(Picker, _super);
    function Picker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picker.prototype.handleInput = function (e) {
        var that = this;
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var name = file.name, size = file.size, type = file.type;
        logger.debug(file);
        var onPick = this.props.onPick;
        if (onPick) {
            onPick({
                file: file,
                name: name,
                size: size,
                type: type,
            });
        }
    };
    Picker.prototype.render = function () {
        var _this = this;
        var title = this.props.title || 'Pick a File';
        var accept = this.props.accept || '*/*';
        var theme = this.props.theme || AmplifyTheme;
        var pickerStyle = Object.assign({}, { position: 'relative' }, theme.pickerPicker);
        var inputStyle = Object.assign({}, PickerInput, theme.pickerInput);
        return (React.createElement("div", { style: pickerStyle },
            React.createElement(PhotoPickerButton, { theme: theme }, I18n.get(title)),
            React.createElement("input", { title: I18n.get(title), type: "file", accept: accept, style: inputStyle, onChange: function (e) { return _this.handleInput(e); } })));
    };
    return Picker;
}(React.Component));
export { Picker };
/**
 * @deprecated use named import
 */
export default Picker;
//# sourceMappingURL=Picker.js.map