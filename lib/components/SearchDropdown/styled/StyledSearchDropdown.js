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
var SearchActive_1 = require("../../../svg/SearchActive");
var SearchInactive_1 = require("../../../svg/SearchInactive");
var styled_components_1 = require("../../../utils/styled-components");
var Label = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.label;
});
var Input = styled_components_1.default('input')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  cursor: ", ";\n  color: ", ";\n  border: ", ";\n  margin-bottom: 0;\n  max-width: 156px;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 30px;\n  border-radius: 4px;\n  background-color: #fafafa;\n  outline: none;\n  ::placeholder {\n    color: ", ";\n    font-weight: normal;\n    letter-spacing: normal;\n  }\n"], ["\n  ", "\n  cursor: ", ";\n  color: ", ";\n  border: ",
    ";\n  margin-bottom: 0;\n  max-width: 156px;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 30px;\n  border-radius: 4px;\n  background-color: #fafafa;\n  outline: none;\n  ::placeholder {\n    color: ",
    ";\n    font-weight: normal;\n    letter-spacing: normal;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.label;
}, function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? 'auto' : 'not-allowed');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'rgba(15, 32, 69, 0.25)' : '#0f2045');
}, function (_a) {
    var error = _a.error;
    return error ? 'solid 2px #cf1a1a' : 'solid 2px transparent';
}, function (_a) {
    var disabled = _a.disabled;
    return disabled ? 'rgba(15, 32, 69, 0.25)' : 'rgba(15, 32, 69, 0.75);';
});
var OptionsContainer = styled_components_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 200px;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"], ["\n  min-width: 200px;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  display: ", ";\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n  margin-top: 10px;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'inline-block' : 'none');
});
var Option = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  :hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"], ["\n  ", "\n  height: 40px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  :hover {\n    opacity: 0.9;\n    background-color: #ecf9f9;\n    font-weight: 600;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var NoOptions = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  text-align: center;\n  padding: 10px 0px;\n"], ["\n  ", "\n  text-align: center;\n  padding: 10px 0px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var Inline = styled_components_1.default('p')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  color: ", "\n"], ["\n  ", "\n  color: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.inline;
}, function (_a) {
    var error = _a.error;
    return (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)');
});
var SearchContainer = styled_components_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 175px;\n  top: 11px;\n"], ["\n  cursor: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 175px;\n  top: 11px;\n"])), function (_a) {
    var value = _a.value;
    return (value === '' ? 'auto' : 'pointer');
});
var StyledSearchDropdown = /** @class */ (function (_super) {
    __extends(StyledSearchDropdown, _super);
    function StyledSearchDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledSearchDropdown.prototype.renderOptions = function () {
        var _a = this.props, options = _a.options, selectOption = _a.selectOption;
        if (options.length === 0) {
            return React.createElement(NoOptions, null, "No options");
        }
        return _.map(options, function (option) { return (React.createElement(Option, { id: option.value, key: option.value, onMouseDown: selectOption },
            React.createElement("span", null, option.label))); });
    };
    StyledSearchDropdown.prototype.renderSearchButton = function () {
        var _a = this.props, disabled = _a.disabled, handleButtonClick = _a.handleButtonClick, value = _a.value;
        return value === '' || disabled ? (React.createElement(SearchInactive_1.default, null)) : (React.createElement(SearchActive_1.default, { onClick: handleButtonClick }));
    };
    StyledSearchDropdown.prototype.render = function () {
        var _a = this.props, label = _a.label, placeholder = _a.placeholder, name = _a.name, disabled = _a.disabled, error = _a.error, inlineMessage = _a.inlineMessage, handleChange = _a.handleChange, open = _a.open, openDropdown = _a.openDropdown, closeDropdown = _a.closeDropdown, value = _a.value;
        return (React.createElement("div", { style: { maxWidth: '200px' }, onBlur: closeDropdown },
            React.createElement(Label, null, label),
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement(Input, { placeholder: placeholder, name: name, disabled: disabled, error: error, onChange: handleChange, onFocus: openDropdown, value: value }),
                React.createElement(SearchContainer, { value: value }, this.renderSearchButton())),
            React.createElement(OptionsContainer, { open: open }, this.renderOptions()),
            React.createElement(Inline, { error: error }, inlineMessage)));
    };
    return StyledSearchDropdown;
}(React.Component));
exports.default = StyledSearchDropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=StyledSearchDropdown.js.map