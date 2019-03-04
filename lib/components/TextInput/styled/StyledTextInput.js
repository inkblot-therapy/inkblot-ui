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
var React = require("react");
var styled_components_1 = require("../../../utils/styled-components");
var Input = styled_components_1.default('input')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 180px;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 4px;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  color: \"#0f2045\";\n  letter-spacing: ", ";\n  border: ", ";\n  background-color: #fafafa;\n  transition: 0.25s;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n    background-color: #ffffff;\n  }\n  cursor: ", ";\n  ::placeholder {\n    letter-spacing: normal;\n    color: ", ";\n  }\n"], ["\n  min-width: 180px;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 4px;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  color: \"#0f2045\";\n  letter-spacing: ", ";\n  border: ", ";\n  background-color: #fafafa;\n  transition: 0.25s;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);\n    background-color: #ffffff;\n  }\n  cursor: ", ";\n  ::placeholder {\n    letter-spacing: normal;\n    color: ",
    ";\n  }\n"])), function (_a) {
    var type = _a.type;
    return (type === 'password' ? '2px' : 'normal');
}, function (_a) {
    var error = _a.error;
    return (error ? 'solid #cf1a1a' : 'solid transparent');
}, function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? 'auto' : 'not-allowed');
}, function (_a) {
    var disabled = _a.disabled;
    return disabled ? 'rgba(15, 32, 69, 0.25)' : 'rgba(15, 32, 69, 0.75);';
});
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  color: #0f2045;\n  font-size: 12px;\n  letter-spacing: 0.1px;\n  display: block;\n  margin-bottom: 10px;\n"], ["\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  color: #0f2045;\n  font-size: 12px;\n  letter-spacing: 0.1px;\n  display: block;\n  margin-bottom: 10px;\n"])));
var InlineMessage = styled_components_1.default('p')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: \"Source Sans Pro\", sans-serif;\n  margin-top: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  transition: 0.25s;\n  color: ", ";\n"], ["\n  font-family: \"Source Sans Pro\", sans-serif;\n  margin-top: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  transition: 0.25s;\n  color: ", ";\n"])), function (_a) {
    var error = _a.error;
    return (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)');
});
var StyledTextInput = /** @class */ (function (_super) {
    __extends(StyledTextInput, _super);
    function StyledTextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.setState({ value: event.target.value });
            if (_this.props.onChange) {
                _this.props.onChange(event);
            }
        };
        _this.state = {
        // value: this.props.value || '',
        };
        return _this;
    }
    StyledTextInput.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, error = _a.error, disabled = _a.disabled, placeholder = _a.placeholder, labelStyle = _a.labelStyle, inputStyle = _a.inputStyle, type = _a.type, name = _a.name, inlineMessage = _a.inlineMessage;
        return (React.createElement("div", { className: className },
            React.createElement(Label, { style: labelStyle }, label),
            React.createElement(Input, __assign({}, this.props, { name: name, style: inputStyle, placeholder: placeholder, error: error, 
                // value={this.state.value}
                disabled: disabled, onChange: this.handleChange, type: type })),
            React.createElement(InlineMessage, { error: error }, inlineMessage)));
    };
    return StyledTextInput;
}(React.Component));
exports.default = StyledTextInput;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledTextInput.js.map