"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var Down_1 = require("../../../svg/Down");
var X_1 = require("../../../svg/X");
var styled_components_1 = require("../../../utils/styled-components");
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 200px;\n  display: inline-block;\n  max-width: 300px;\n  outline: none;\n"], ["\n  min-width: 200px;\n  display: inline-block;\n  max-width: 300px;\n  outline: none;\n"])));
var Dropdown = styled_components_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 180px;\n  min-height: 40px;\n  display: inline-flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n  border-radius: 4px;\n  background-color: rgba(240, 242, 245, 0.79);\n  cursor: pointer;\n  border: ", ";\n"], ["\n  min-width: 180px;\n  min-height: 40px;\n  display: inline-flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n  border-radius: 4px;\n  background-color: rgba(240, 242, 245, 0.79);\n  cursor: pointer;\n  border: ",
    ";\n"])), function (_a) {
    var error = _a.error;
    return error ? 'solid 2px #cf1a1a' : 'solid 2px transparent';
});
var Label = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.label;
});
var Placeholder = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var OptionsContainer = styled_components_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-width: 200px;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"], ["\n  min-width: 200px;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'block' : 'none');
});
var Option = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  :hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"], ["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  :hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var SelectedOption = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  border-radius: 15px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  background-color: #ffffff;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  cursor: auto;\n"], ["\n  ", "\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  border-radius: 15px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  background-color: #ffffff;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  cursor: auto;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.selectedOption;
});
var NoOptions = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  text-align: center;\n  padding: 10px 0px;\n"], ["\n  ", "\n  text-align: center;\n  padding: 10px 0px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var Inline = styled_components_1.default('p')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  color: ", "\n"], ["\n  ", "\n  color: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.inline;
}, function (_a) {
    var error = _a.error;
    return (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)');
});
var StyledMultiSelectDropdown = /** @class */ (function (_super) {
    __extends(StyledMultiSelectDropdown, _super);
    function StyledMultiSelectDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledMultiSelectDropdown.prototype.renderSelectedOptions = function () {
        var _a = this.props, placeholder = _a.placeholder, selected = _a.selected, deselectOption = _a.deselectOption;
        if (selected.length === 0) {
            return React.createElement("span", null, placeholder);
        }
        return _.map(selected, function (option) { return (React.createElement(SelectedOption, { key: option.value, onClick: function (event) { return event.stopPropagation(); } },
            React.createElement("span", null, option.label),
            React.createElement("div", { style: { marginLeft: '10px', cursor: 'pointer' } },
                React.createElement(X_1.default, { id: option.value, onClick: deselectOption })))); });
    };
    StyledMultiSelectDropdown.prototype.renderOptions = function () {
        var _a = this.props, options = _a.options, selectOption = _a.selectOption;
        if (options.length === 0) {
            return React.createElement(NoOptions, null, "No options");
        }
        return _.map(options, function (option) { return (React.createElement(Option, { id: option.value, key: option.value, onClick: selectOption },
            React.createElement("span", null, option.label))); });
    };
    StyledMultiSelectDropdown.prototype.render = function () {
        var _a = this.props, open = _a.open, openDropdown = _a.openDropdown, closeDropdown = _a.closeDropdown, label = _a.label, inlineMessage = _a.inlineMessage, error = _a.error;
        return (React.createElement("div", null,
            React.createElement(Label, null, label),
            React.createElement(DropdownContainer, { id: "dropdown-container", tabIndex: 0, onBlur: closeDropdown },
                React.createElement(Dropdown, { error: error, onClick: open ? closeDropdown : openDropdown },
                    React.createElement(Placeholder, null, this.renderSelectedOptions()),
                    React.createElement("div", { style: { marginLeft: 'auto' } },
                        React.createElement(Down_1.default, null))),
                React.createElement(OptionsContainer, { open: open }, this.renderOptions())),
            React.createElement(Inline, { error: error }, inlineMessage)));
    };
    return StyledMultiSelectDropdown;
}(React.Component));
exports.default = StyledMultiSelectDropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=StyledMultiSelectDropdown.js.map