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
var react_select_1 = require("react-select");
var styled_components_1 = require("../../../utils/styled-components");
var Container = styled_components_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 4px;\n  border: ", ";\n"], ["\n  border-radius: 4px;\n  border: ",
    ";\n"])), function (_a) {
    var error = _a.error;
    return error ? '2px solid #cf1a1a' : '2px solid transparent';
});
var Label = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  margin-bottom: 10px;\n"], ["\n  ", "\n  margin-bottom: 10px;\n"])), function (_a) {
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
var customStyles = {
    control: function (provided) { return (__assign({}, provided, { backgroundColor: '#fafafa', border: 'none', borderRadius: '4px', boxShadow: 'none', height: '40px' })); },
    dropdownIndicator: function (provided, state) { return (__assign({}, provided, { color: '#2e5fca' })); },
    indicatorSeparator: function () { return ({}); },
    option: function (provided, state) { return (__assign({}, provided, { backgroundColor: state.isFocused ? '#ecf9f9' : 'white', color: '#0f2045', fontFamily: '"Source Sans Pro", sans-serif', fontSize: '16px', fontStretch: 'normal', fontStyle: 'normal', fontWeight: state.isFocused ? '600' : 'normal', letterSpacing: '0.1px', lineHeight: 'normal' })); },
    placeholder: function (provided) { return (__assign({}, provided, { color: '#0f2045', fontFamily: '"Source Sans Pro", sans-serif', fontSize: '16px', fontStretch: 'normal', fontStyle: 'normal', fontWeight: 'normal', letterSpacing: 'normal', lineHeight: 'normal' })); },
    valueContainer: function (provided) { return (__assign({}, provided, { backgroundColor: '#fafafa', border: 'none', color: '#0f2045', fontFamily: '"Source Sans Pro", sans-serif', fontSize: '16px', fontStretch: 'normal', fontStyle: 'normal', fontWeight: 'normal', letterSpacing: '0.1px', lineHeight: 'normal' })); },
};
var StyledDropdown = /** @class */ (function (_super) {
    __extends(StyledDropdown, _super);
    function StyledDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledDropdown.prototype.render = function () {
        var _a = this.props, label = _a.label, inlineMessage = _a.inlineMessage, input = _a.input, options = _a.options, error = _a.error;
        return (React.createElement("div", null,
            React.createElement(Label, null, label),
            React.createElement(Container, { error: error },
                React.createElement(react_select_1.default, __assign({ isSearchable: false, options: options, styles: customStyles }, input))),
            React.createElement(Inline, { error: error }, inlineMessage)));
    };
    return StyledDropdown;
}(React.Component));
exports.default = StyledDropdown;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=StyledDropdown.js.map