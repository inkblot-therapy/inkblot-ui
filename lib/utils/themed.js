"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var themed = function (component) { return renderer.create(React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default }, component)); };
exports.default = themed;
//# sourceMappingURL=themed.js.map