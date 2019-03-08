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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
var StyledDropdown_1 = require("./styled/StyledDropdown");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            formValue: _.get(props.value, 'value') || _.get(props.options[0], 'value'),
            open: false,
            options: props.options,
            selected: _.get(props.value, 'label') || _.get(props.options[0], 'label'),
            value: props.value,
        };
        _this.openDropdown = _this.openDropdown.bind(_this);
        _this.closeDropdown = _this.closeDropdown.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        return _this;
    }
    Dropdown.prototype.openDropdown = function () {
        this.setState({
            open: true,
        }, function () {
            var dropdownContainer = document.getElementById('dropdown-container');
            if (dropdownContainer) {
                dropdownContainer.focus();
            }
        });
    };
    Dropdown.prototype.closeDropdown = function () {
        this.setState({
            open: false,
        });
    };
    Dropdown.prototype.selectOption = function (event) {
        var options = this.props.options;
        var id = event.currentTarget.id;
        var selected = _.find(options, function (option) { return option.value.toString() === id.toString(); });
        if (selected) {
            this.setState({
                formValue: _.get(selected, 'value'),
                open: false,
                selected: _.get(selected, 'label'),
            });
        }
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, name = _a.name, label = _a.label, inlineMessage = _a.inlineMessage, error = _a.error, input = _a.input;
        var _b = this.state, open = _b.open, options = _b.options, selected = _b.selected, formValue = _b.formValue;
        return (React.createElement("div", null,
            React.createElement("input", __assign({}, input, { style: { display: 'none' }, name: name, value: formValue, readOnly: true })),
            React.createElement(StyledDropdown_1.default, { label: label, open: open, options: options, selected: selected, inlineMessage: inlineMessage, error: error, openDropdown: this.openDropdown, closeDropdown: this.closeDropdown, selectOption: this.selectOption })));
    };
    return Dropdown;
}(React.Component));
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map