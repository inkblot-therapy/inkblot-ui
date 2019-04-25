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
var IconButton_1 = require("../../IconButton");
var Check_1 = require("../../../svg/Check");
var CheckOutline_1 = require("../../../svg/CheckOutline");
var styled_components_1 = require("../../../utils/styled-components");
var box = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
};
var Checkbox = styled_components_1.default('input')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: inherit;\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n"], ["\n  cursor: inherit;\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n"])));
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #2e5fca;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  text-align: left;\n  margin-left: 10px;\n  width: 460px;\n  display: block;\n"], ["\n  color: #2e5fca;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  text-align: left;\n  margin-left: 10px;\n  width: 460px;\n  display: block;\n"])));
var StyledCheckbox = /** @class */ (function (_super) {
    __extends(StyledCheckbox, _super);
    function StyledCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var checked = event.target.checked;
            _this.setState({
                checked: checked,
                value: (checked ? 'on' : 'off'),
            });
            if (_this.props.onChange) {
                _this.props.onChange(event.target.checked);
            }
        };
        _this.state = {
            value: _this.props.checked ? 'on' : 'off',
            checked: _this.props.checked ? true : false,
        };
        return _this;
    }
    StyledCheckbox.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, disabled = _a.disabled, name = _a.name;
        return (React.createElement("div", { className: className },
            React.createElement(IconButton_1.default, { rounded: false, disabled: disabled, style: box },
                this.state.checked ? React.createElement(Check_1.default, null) : React.createElement(CheckOutline_1.default, null),
                React.createElement(Checkbox, { name: name, checked: this.state.checked, value: this.state.value, onChange: !disabled ? this.handleChange : function () { return undefined; }, type: "checkbox" }),
                React.createElement(Label, null, label))));
    };
    return StyledCheckbox;
}(React.Component));
exports.default = StyledCheckbox;
var templateObject_1, templateObject_2;
//# sourceMappingURL=StyledCheckbox.js.map