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
var StyledButton_1 = require("./styled/StyledButton");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            disableClick: false,
        };
        _this.click = function () {
            if (_this.state.disableClick && _this.props.singleClick) {
                return false;
            }
            _this.props.onClick();
            _this.setState(function (state) { return ({
                disableClick: true,
            }); });
            return false;
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, label = _a.label;
        return (React.createElement(StyledButton_1.default, __assign({}, this.props, { onClick: !disabled ? this.click : function () { return undefined; } }), label));
    };
    Button.defaultProps = {
        disabled: false,
        label: 'default',
        onClick: function () { return undefined; },
        primary: false,
        secondary: false,
        singleClick: true,
        style: {},
        tertiary: false,
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map