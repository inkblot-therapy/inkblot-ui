"use strict";
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
var Modal_1 = require("../Modal");
var DynamicModal = /** @class */ (function (_super) {
    __extends(DynamicModal, _super);
    function DynamicModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: false,
        };
        _this.toggleOpen = _this.toggleOpen.bind(_this);
        return _this;
    }
    DynamicModal.prototype.toggleOpen = function () {
        this.setState(function (prevState) { return ({
            open: !prevState.open,
        }); });
    };
    DynamicModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Modal_1.default, { open: this.state.open, onRequestClose: this.toggleOpen },
                React.createElement("p", null, "Hello")),
            React.createElement("button", { onClick: this.toggleOpen }, "Open modal")));
    };
    return DynamicModal;
}(React.Component));
exports.default = DynamicModal;
//# sourceMappingURL=DynamicModal.js.map