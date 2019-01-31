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
var StyledSearchDropdown_1 = require("./styled/StyledSearchDropdown");
var SearchDropdown = /** @class */ (function (_super) {
    __extends(SearchDropdown, _super);
    function SearchDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            filteredOptions: _this.filterOptions(props.value || '', props.options),
            formValue: '',
            open: false,
            value: props.value || '',
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleButtonClick = _this.handleButtonClick.bind(_this);
        _this.openDropdown = _this.openDropdown.bind(_this);
        _this.closeDropdown = _this.closeDropdown.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        return _this;
    }
    SearchDropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.value !== prevState.value) {
            var value = this.state.value;
            var options = this.props.options;
            var filteredOptions = this.filterOptions(value, options);
            this.setState({
                filteredOptions: filteredOptions,
            });
        }
        if (this.props.value !== prevProps.value) {
            this.setState({
                value: this.props.value || '',
            });
        }
    };
    SearchDropdown.prototype.handleChange = function (event) {
        var value = event.target.value;
        this.setState({
            value: value,
        });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };
    SearchDropdown.prototype.handleButtonClick = function () {
        if (this.props.onButtonClick) {
            this.props.onButtonClick();
        }
    };
    SearchDropdown.prototype.openDropdown = function () {
        this.setState({
            open: true,
        });
    };
    SearchDropdown.prototype.closeDropdown = function () {
        var _this = this;
        this.setState({ open: false }, function () { return _this.updateValue(); });
    };
    SearchDropdown.prototype.selectOption = function (event) {
        var _a = event.currentTarget, id = _a.id, innerText = _a.innerText;
        var label = innerText.replace(/\n/, '');
        this.setState({
            formValue: id,
            open: false,
        });
        if (this.props.onChange) {
            this.props.onChange(label);
        }
    };
    SearchDropdown.prototype.render = function () {
        var _a = this.props, name = _a.name, disabled = _a.disabled, error = _a.error, inlineMessage = _a.inlineMessage, label = _a.label, placeholder = _a.placeholder;
        var _b = this.state, open = _b.open, value = _b.value, filteredOptions = _b.filteredOptions, formValue = _b.formValue;
        return (React.createElement("div", null,
            React.createElement("input", { style: { display: 'none' }, name: name, value: formValue, readOnly: true }),
            React.createElement(StyledSearchDropdown_1.default, { disabled: disabled, error: error, inlineMessage: inlineMessage, open: open, options: filteredOptions, value: value, label: label, placeholder: placeholder, handleChange: this.handleChange, handleButtonClick: this.handleButtonClick, openDropdown: this.openDropdown, closeDropdown: this.closeDropdown, selectOption: this.selectOption })));
    };
    // Filter the options based on the query
    SearchDropdown.prototype.filterOptions = function (query, options) {
        return query === ''
            ? options
            : _.filter(options, function (option) {
                var lowerCaseOption = option.label.toLowerCase();
                var lowerCaseValue = query.toLowerCase();
                return lowerCaseOption.includes(lowerCaseValue);
            });
    };
    // Update value's state to a
    SearchDropdown.prototype.updateValue = function () {
        var options = this.props.options;
        var _a = this.state, formValue = _a.formValue, value = _a.value;
        var currentOption = _.find(options, function (option) { return option.label === value; });
        var previousOption = _.find(options, function (option) {
            return option.value.toString() === formValue;
        });
        var newValue = currentOption
            ? currentOption.label
            : previousOption
                ? previousOption.label
                : value;
        this.setState({
            value: newValue,
        });
    };
    return SearchDropdown;
}(React.Component));
exports.default = SearchDropdown;
//# sourceMappingURL=SearchDropdown.js.map