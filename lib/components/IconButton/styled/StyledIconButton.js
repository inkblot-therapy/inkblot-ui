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
var IconButton = styled_components_1.default('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  border-radius: ", ";\n  cursor: ", ";\n  padding: 12px;\n  outline: none;\n  text-align: center;\n  &:focus {\n    outline: none;\n  }\n  color: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  border: none;\n  box-shadow: ", ";\n"], ["\n  flex: 0 0 auto;\n  border-radius: ", ";\n  cursor: ", ";\n  padding: 12px;\n  outline: none;\n  text-align: center;\n  &:focus {\n    outline: none;\n  }\n  color: ",
    ";\n  background-color: ",
    ";\n  background-image: ",
    ";\n  border: none;\n  box-shadow: ",
    ";\n"])), function (_a) {
    var rounded = _a.rounded;
    return (rounded ? '50%' : '4px');
}, function (_a) {
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
var StyledIconButton = /** @class */ (function (_super) {
    __extends(StyledIconButton, _super);
    function StyledIconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledIconButton.prototype.render = function () {
        return (React.createElement(IconButton, __assign({}, this.props),
            React.createElement("span", { style: { width: '100%', display: 'flex', position: 'relative' } }, this.props.children)));
    };
    return StyledIconButton;
}(React.Component));
exports.default = StyledIconButton;
var templateObject_1;
//# sourceMappingURL=StyledIconButton.js.map