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
var StyledModal_1 = require("./styled/StyledModal");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: props.open,
        };
        return _this;
    }
    Modal.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.open !== prevProps.open) {
            this.setState({
                open: this.props.open,
            });
        }
    };
    Modal.prototype.render = function () {
        return (React.createElement(StyledModal_1.default, { open: this.state.open, onRequestClose: this.props.onRequestClose }, this.props.children));
    };
    return Modal;
}(React.Component));
exports.default = Modal;
//# sourceMappingURL=Modal.js.map