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
var React = require("react");
var styled_components_1 = require("../../../utils/styled-components");
// TODO: Animation for closing
var fadeIn = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var slideIn = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    top: -100px;\n  }\n  to {\n    top: 0px;\n  }\n"], ["\n  from {\n    top: -100px;\n  }\n  to {\n    top: 0px;\n  }\n"])));
var Container = styled_components_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: ", ";\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: ", ";\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'flex' : 'none');
});
var Overlay = styled_components_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  z-index: 9000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  animation: ", " 250ms ease-in;\n"], ["\n  display: ", ";\n  z-index: 9000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  animation: ", " 250ms ease-in;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'flex' : 'none');
}, fadeIn);
var ModalBody = styled_components_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: ", "\n  position: relative;\n  z-index: 9001;\n  opacity: 1;\n  margin: 0 auto;\n  max-width: 768px;\n  width: 75%;\n  min-height: 50px;\n  max-height: 60vh;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);\n  animation: ", " 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"], ["\n  display: ", "\n  position: relative;\n  z-index: 9001;\n  opacity: 1;\n  margin: 0 auto;\n  max-width: 768px;\n  width: 75%;\n  min-height: 50px;\n  max-height: 60vh;\n  overflow-y: auto;\n  border-radius: 3px;\n  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);\n  animation: ", " 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'flex' : 'none');
}, slideIn);
var ModalContent = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 4em 2em;\n  background-color: #ffffff;\n  width: 100%;\n"], ["\n  padding: 4em 2em;\n  background-color: #ffffff;\n  width: 100%;\n"])));
var StyledModal = /** @class */ (function (_super) {
    __extends(StyledModal, _super);
    function StyledModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledModal.prototype.render = function () {
        var _a = this.props, open = _a.open, onRequestClose = _a.onRequestClose, children = _a.children;
        return (React.createElement(Container, { open: open },
            React.createElement(Overlay, { open: open, onClick: onRequestClose }),
            React.createElement(ModalBody, { open: open },
                React.createElement(ModalContent, null, children))));
    };
    return StyledModal;
}(React.Component));
exports.default = StyledModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=StyledModal.js.map