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
var _ = require("lodash");
var React = require("react");
var StyledDropdown_1 = require("./styled/StyledDropdown");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Dropdown.prototype.renderOptions = function () {
        var options = this.props.options;
        return _.map(options, function (option, i) { return (React.createElement("option", { key: i, value: option.value }, option.label)); });
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, name = _a.name, label = _a.label, inlineMessage = _a.inlineMessage, error = _a.error, input = _a.input, options = _a.options;
        return (React.createElement(StyledDropdown_1.default, { name: name, label: label, options: options, inlineMessage: inlineMessage, error: error, input: input }));
    };
    return Dropdown;
}(React.Component));
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map