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
var StyledCheckbox_1 = require("./styled/StyledCheckbox");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: false,
        };
        _this.change = function (event) {
            _this.setState({ checked: event });
            _this.props.onChange(event);
            return false;
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var disabled = this.props.disabled;
        return (React.createElement(StyledCheckbox_1.default, __assign({}, this.props, { onChange: !disabled ? this.change : function () { return undefined; } })));
    };
    Checkbox.defaultProps = {
        disabled: false,
        label: '',
        onChange: function () { return undefined; },
        checked: false,
        style: {},
        name: '',
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map