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
var styled_components_1 = require("../../../utils/styled-components");
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  outline: none;\n  #dropdown-container {\n    width: 100%;\n    & > div {\n      width: 100%;\n    }\n  }\n"], ["\n  display: inline-block;\n  outline: none;\n  #dropdown-container {\n    width: 100%;\n    & > div {\n      width: 100%;\n    }\n  }\n"])));
var Dropdown = styled_components_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 40px;\n  display: inline-flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n  border-radius: 4px;\n  background-color: #fafafa;\n  cursor: pointer;\n  border: ", ";\n"], ["\n  height: 40px;\n  display: inline-flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n  border-radius: 4px;\n  background-color: #fafafa;\n  cursor: pointer;\n  border: ",
    ";\n"])), function (_a) {
    var error = _a.error;
    return error ? 'solid 2px #cf1a1a' : 'solid 2px transparent';
});
var Label = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.label;
});
var SelectedText = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  padding-right: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  ", "\n  padding-right: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var OptionsContainer = styled_components_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"], ["\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'block' : 'none');
});
var Option = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  span {\n    white-space: nowrap;\n  }\n  &:hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"], ["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  span {\n    white-space: nowrap;\n  }\n  &:hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var Inline = styled_components_1.default('p')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  color: ", "\n"], ["\n  ", "\n  color: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.inline;
}, function (_a) {
    var error = _a.error;
    return (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)');
});
var StyledDropdown = /** @class */ (function (_super) {
    __extends(StyledDropdown, _super);
    function StyledDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledDropdown.prototype.renderOptions = function () {
        var _a = this.props, options = _a.options, selectOption = _a.selectOption;
        return _.map(options, function (option) { return (React.createElement(Option, { id: option.value, key: option.value, onClick: selectOption },
            React.createElement("span", null, option.label))); });
    };
    StyledDropdown.prototype.render = function () {
        var _a = this.props, open = _a.open, openDropdown = _a.openDropdown, closeDropdown = _a.closeDropdown, label = _a.label, inlineMessage = _a.inlineMessage, error = _a.error, selected = _a.selected;
        return (React.createElement("div", null,
            React.createElement(Label, null, label),
            React.createElement(DropdownContainer, { id: "dropdown-container", tabIndex: 0, onBlur: closeDropdown },
                React.createElement(Dropdown, { error: error, onClick: open ? closeDropdown : openDropdown },
                    React.createElement(SelectedText, null, selected),
                    React.createElement("div", { style: { marginLeft: 'auto' } },
                        React.createElement(Down_1.default, null))),
                React.createElement(OptionsContainer, { open: open }, this.renderOptions())),
            React.createElement(Inline, { error: error }, inlineMessage)));
    };
    return StyledDropdown;
}(React.Component));
exports.default = StyledDropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=StyledDropdown.js.map