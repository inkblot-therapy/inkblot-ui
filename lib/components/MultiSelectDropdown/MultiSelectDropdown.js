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
var StyledMultiSelectDropdown_1 = require("./styled/StyledMultiSelectDropdown");
var MultiSelectDropdown = /** @class */ (function (_super) {
    __extends(MultiSelectDropdown, _super);
    function MultiSelectDropdown(props) {
        var _this = _super.call(this, props) || this;
        // Map value to array of strings
        var formValue = _.map(props.value, function (option) {
            return option.value.toString();
        });
        _this.state = {
            formValue: formValue,
            open: false,
            options: _this.removeDefaultValues(props.options, props.value || []),
            selected: props.value || [],
            value: props.value,
        };
        _this.openDropdown = _this.openDropdown.bind(_this);
        _this.closeDropdown = _this.closeDropdown.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        _this.deselectOption = _this.deselectOption.bind(_this);
        return _this;
    }
    MultiSelectDropdown.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (this.props.value !== prevProps.value) {
            this.setState({
                options: this.removeDefaultValues(this.state.options, this.props.value || []),
                selected: this.props.value || [],
            }, function () { return _this.updateFormValue(); });
        }
    };
    MultiSelectDropdown.prototype.openDropdown = function () {
        this.setState({
            open: true,
        }, function () {
            var dropdownContainer = document.getElementById('dropdown-container');
            if (dropdownContainer) {
                dropdownContainer.focus();
            }
        });
    };
    MultiSelectDropdown.prototype.closeDropdown = function () {
        this.setState({
            open: false,
        });
    };
    MultiSelectDropdown.prototype.selectOption = function (event) {
        this.changeOptions(event);
    };
    MultiSelectDropdown.prototype.deselectOption = function (event) {
        this.changeOptions(event, true);
    };
    MultiSelectDropdown.prototype.render = function () {
        var _a = this.props, name = _a.name, label = _a.label, placeholder = _a.placeholder, inlineMessage = _a.inlineMessage, error = _a.error;
        var _b = this.state, open = _b.open, options = _b.options, selected = _b.selected, formValue = _b.formValue;
        return (React.createElement("div", null,
            React.createElement("input", { style: { display: 'none' }, name: name, value: formValue, readOnly: true }),
            React.createElement(StyledMultiSelectDropdown_1.default, { label: label, placeholder: placeholder, open: open, options: options, selected: selected, inlineMessage: inlineMessage, error: error, openDropdown: this.openDropdown, closeDropdown: this.closeDropdown, selectOption: this.selectOption, deselectOption: this.deselectOption })));
    };
    // Remove any objects that are in defaultValue from options
    MultiSelectDropdown.prototype.removeDefaultValues = function (options, defaultValue) {
        if (defaultValue.length === 0) {
            return options;
        }
        var optionsWithoutDefaults = options;
        _.forEach(defaultValue, function (defaultOption) {
            var index = optionsWithoutDefaults.findIndex(function (option) { return option.value === defaultOption.value; });
            if (index >= 0) {
                optionsWithoutDefaults.splice(index, 1);
            }
        });
        return optionsWithoutDefaults;
    };
    // Actions to take for selecting and deselecting dropdown options
    MultiSelectDropdown.prototype.changeOptions = function (event, deselect) {
        var _this = this;
        if (deselect === void 0) { deselect = false; }
        event.stopPropagation();
        var objectArray = deselect ? this.state.selected : this.state.options;
        var id = event.currentTarget.id;
        var newOption = _.find(objectArray, function (option) { return option.value.toString() === id.toString(); });
        if (newOption) {
            if (this.props.onChange) {
                var action = deselect ? 'deselect' : 'select';
                this.props.onChange(newOption, action);
            }
            var filteredOptions = _.filter(objectArray, function (option) { return option.value.toString() !== id.toString(); });
            if (deselect) {
                this.setState({
                    options: _.sortBy(this.state.options.concat([newOption]), ['value']),
                    selected: filteredOptions,
                }, function () { return _this.updateFormValue(); });
            }
            else {
                this.setState({
                    options: filteredOptions,
                    selected: this.state.selected.concat([newOption]),
                }, function () { return _this.updateFormValue(); });
            }
        }
    };
    MultiSelectDropdown.prototype.updateFormValue = function () {
        var selectedStringArray = _.map(this.state.selected, function (option) { return option.value.toString(); });
        this.setState({
            formValue: selectedStringArray,
        });
    };
    return MultiSelectDropdown;
}(React.Component));
exports.default = MultiSelectDropdown;
//# sourceMappingURL=MultiSelectDropdown.js.map