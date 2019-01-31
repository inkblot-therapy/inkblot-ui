"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("../Dropdown");
var defaultValue = [
    { value: 10, label: 'Option 10' },
    { value: 11, label: 'Option 11' },
];
var options = [
    { value: 8, label: 'Option 8' },
    { value: 9, label: 'Option 9' },
    { value: 10, label: 'Option 10' },
    { value: 11, label: 'Option 11' },
    { value: 12, label: 'Option 12' },
    { value: 13, label: 'Option 13' },
    { value: 14, label: 'Option 14' },
];
var ControlledDropdown = /** @class */ (function (_super) {
    __extends(ControlledDropdown, _super);
    function ControlledDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: defaultValue,
        };
        return _this;
    }
    ControlledDropdown.prototype.render = function () {
        return (React.createElement(Dropdown_1.default, { label: 'Controlled Dropdown', options: options, onChange: this.handleChange, value: this.state.value }));
    };
    ControlledDropdown.prototype.handleChange = function (o, a) {
        console.log(a);
        console.log(o);
    };
    return ControlledDropdown;
}(React.Component));
exports.default = ControlledDropdown;
//# sourceMappingURL=ControlledDropdown.js.map