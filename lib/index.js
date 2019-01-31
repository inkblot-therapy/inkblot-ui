"use strict";
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
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var Button_1 = require("./components/Button");
var Dropdown_1 = require("./components/Dropdown");
var ThemeButton = function (props) { return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
    React.createElement(Button_1.default, __assign({}, props)))); };
exports.ThemeButton = ThemeButton;
var ThemeDropdown = function (props) { return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
    React.createElement(Dropdown_1.default, __assign({}, props)))); };
exports.ThemeDropdown = ThemeDropdown;
var InkblotTheme = function (_a) {
    var children = _a.children;
    return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
        React.createElement("div", null, children)));
};
exports.InkblotTheme = InkblotTheme;
var BookingCalendar_1 = require("./components/BookingCalendar");
exports.BookingCalendar = BookingCalendar_1.default;
var Button_2 = require("./components/Button");
exports.Button = Button_2.default;
var Dropdown_2 = require("./components/Dropdown");
exports.Dropdown = Dropdown_2.default;
var Modal_1 = require("./components/Modal");
exports.Modal = Modal_1.default;
var SearchDropdown_1 = require("./components/SearchDropdown");
exports.SearchDropdown = SearchDropdown_1.default;
var TextInput_1 = require("./components/TextInput");
exports.TextInput = TextInput_1.default;
//# sourceMappingURL=index.js.map