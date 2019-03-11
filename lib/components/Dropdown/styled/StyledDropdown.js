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
var Down_1 = require("../../../svg/Down");
var styled_components_1 = require("../../../utils/styled-components");
var Dropdown = styled_components_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fafafa;\n  max-width: 200px;\n  height: 40px;\n  overflow: hidden;\n  border-radius: 4px;\n  border: ", ";\n  position: relative;\n\n  select {\n    ", "\n    background: transparent;\n    width: 220px;\n    height: 40px;\n    outline: none;\n    border: none;\n  }\n\n  svg {\n    pointer-events: none;\n    position: absolute;\n    right: 5px;\n    top: 15px;\n  }\n"], ["\n  background-color: #fafafa;\n  max-width: 200px;\n  height: 40px;\n  overflow: hidden;\n  border-radius: 4px;\n  border: ",
    ";\n  position: relative;\n\n  select {\n    ", "\n    background: transparent;\n    width: 220px;\n    height: 40px;\n    outline: none;\n    border: none;\n  }\n\n  svg {\n    pointer-events: none;\n    position: absolute;\n    right: 5px;\n    top: 15px;\n  }\n"])), function (_a) {
    var error = _a.error;
    return error ? 'solid 2px #cf1a1a' : 'solid 2px transparent';
}, function (_a) {
    var theme = _a.theme;
    return theme.input.text.standard;
});
var Label = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.input.text.label;
});
var Inline = styled_components_1.default('p')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  color: ", "\n"], ["\n  ", "\n  color: ", "\n"])), function (_a) {
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
    StyledDropdown.prototype.render = function () {
        var _a = this.props, label = _a.label, inlineMessage = _a.inlineMessage, error = _a.error, children = _a.children, name = _a.name, input = _a.input;
        return (React.createElement("div", null,
            React.createElement(Label, null, label),
            React.createElement(Dropdown, { error: error },
                React.createElement("select", __assign({ name: name }, input), children),
                React.createElement(Down_1.default, null)),
            React.createElement(Inline, { error: error }, inlineMessage)));
    };
    return StyledDropdown;
}(React.Component));
exports.default = StyledDropdown;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledDropdown.js.map