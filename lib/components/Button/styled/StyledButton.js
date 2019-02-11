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
var Button = styled_components_1.default('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 20px;\n  cursor: ", ";\n  height: 40px;\n  padding: 10px 40px;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  outline: none;\n  &:focus {\n    outline: none;\n  }\n  color: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  border: none;\n  box-shadow: ", ";\n"], ["\n  border-radius: 20px;\n  cursor: ", ";\n  height: 40px;\n  padding: 10px 40px;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  outline: none;\n  &:focus {\n    outline: none;\n  }\n  color: ",
    ";\n  background-color: ",
    ";\n  background-image: ",
    ";\n  border: none;\n  box-shadow: ",
    ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? 'pointer' : 'not-allowed');
}, function (_a) {
    var disabled = _a.disabled, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary, theme = _a.theme;
    if (disabled) {
        return theme.button.textColor.disabled;
    }
    else if (primary) {
        return theme.button.textColor.primary;
    }
    else if (secondary) {
        return theme.button.textColor.secondary;
    }
    else {
        return theme.button.textColor.tertiary;
    }
}, function (_a) {
    var disabled = _a.disabled, tertiary = _a.tertiary, theme = _a.theme;
    if (disabled) {
        return theme.button.backgroundColor.disabled;
    }
    else {
        return theme.button.backgroundColor.tertiary;
    }
}, function (_a) {
    var primary = _a.primary, secondary = _a.secondary, theme = _a.theme;
    if (primary) {
        return theme.button.backgroundColor.primary;
    }
    else if (secondary) {
        return theme.button.backgroundColor.secondary;
    }
    else {
        return 'none';
    }
}, function (_a) {
    var tertiary = _a.tertiary, theme = _a.theme;
    return tertiary && '0 0 10px 0 rgba(99, 140, 177, 0.2)';
});
var StyledButton = /** @class */ (function (_super) {
    __extends(StyledButton, _super);
    function StyledButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledButton.prototype.render = function () {
        return React.createElement(Button, __assign({}, this.props), this.props.children);
    };
    return StyledButton;
}(React.Component));
exports.default = StyledButton;
var templateObject_1;
//# sourceMappingURL=StyledButton.js.map