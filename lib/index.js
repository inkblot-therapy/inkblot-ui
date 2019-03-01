"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
exports.InkblotTheme = function (_a) {
    var children = _a.children;
    return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
        React.createElement("div", null, children)));
};
var BookingCalendar_1 = require("./components/BookingCalendar");
exports.BookingCalendar = BookingCalendar_1.default;
var Button_1 = require("./components/Button");
exports.Button = Button_1.default;
var Dropdown_1 = require("./components/Dropdown");
exports.Dropdown = Dropdown_1.default;
var MultiSelectDropdown_1 = require("./components/MultiSelectDropdown");
exports.MultiSelectDropdown = MultiSelectDropdown_1.default;
var Modal_1 = require("./components/Modal");
exports.Modal = Modal_1.default;
var SearchDropdown_1 = require("./components/SearchDropdown");
exports.SearchDropdown = SearchDropdown_1.default;
var TextInput_1 = require("./components/TextInput");
exports.TextInput = TextInput_1.default;
//# sourceMappingURL=index.js.map