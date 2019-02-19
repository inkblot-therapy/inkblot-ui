"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SvgCheckOutline = function (props) { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "46", height: "46", viewBox: "0 0 46 46" },
    React.createElement("defs", null,
        React.createElement("rect", { id: "b", width: "26", height: "26", rx: "4" }),
        React.createElement("filter", { id: "a", width: "215.4%", height: "215.4%", x: "-57.7%", y: "-57.7%", filterUnits: "objectBoundingBox" },
            React.createElement("feOffset", { in: "SourceAlpha", result: "shadowOffsetOuter1" }),
            React.createElement("feGaussianBlur", { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "5" }),
            React.createElement("feComposite", { in: "shadowBlurOuter1", in2: "SourceAlpha", operator: "out", result: "shadowBlurOuter1" }),
            React.createElement("feColorMatrix", { in: "shadowBlurOuter1", values: "0 0 0 0 0.388235294 0 0 0 0 0.547410486 0 0 0 0 0.694117647 0 0 0 0.2 0" }))),
    React.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(10 10)" },
        React.createElement("use", { fill: "#000", filter: "url(#a)" }),
        React.createElement("rect", { width: "24", height: "24", x: "1", y: "1", fill: "#FFF", stroke: "#2E5FCA", strokeLinejoin: "square", strokeWidth: "2", rx: "4" })))); };
exports.default = SvgCheckOutline;
//# sourceMappingURL=CheckOutline.js.map