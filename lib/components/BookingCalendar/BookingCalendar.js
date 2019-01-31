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
require("react-dates/initialize");
var react_dates_1 = require("react-dates");
var moment = require("moment-timezone");
require("react-dates/lib/css/_datepicker.css");
var StyledBookingCalendar_1 = require("./styled/StyledBookingCalendar");
var Left_1 = require("./images/Left");
var Right_1 = require("./images/Right");
var BookingCalendar = /** @class */ (function (_super) {
    __extends(BookingCalendar, _super);
    function BookingCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedDate: props.initialSelectedDate || moment(),
            rerenderFlag: false,
        };
        _this.renderDayContentsSource = _this.renderDayContentsSource.bind(_this);
        _this.renderDayContentsForTrue = _this.renderDayContentsForTrue.bind(_this);
        _this.renderDayContentsForFalse = _this.renderDayContentsForFalse.bind(_this);
        _this.handleDateChange = _this.handleDateChange.bind(_this);
        return _this;
    }
    BookingCalendar.prototype.render = function () {
        var _this = this;
        return (React.createElement(StyledBookingCalendar_1.default, null,
            React.createElement(react_dates_1.DayPicker, { numberOfMonths: 1, hideKeyboardShortcutsPanel: true, renderDayContents: this.state.rerenderFlag ? this.renderDayContentsForTrue : this.renderDayContentsForFalse, transitionDuration: 0, noBorder: true, navPrev: this.renderNavPrev(), navNext: this.renderNavNext(), onDayClick: this.handleDateChange, initialVisibleMonth: function () { return _this.props.initialSelectedDate || moment(); } })));
    };
    BookingCalendar.prototype.handleDateChange = function (date) {
        this.setState({
            selectedDate: date,
            rerenderFlag: !this.state.rerenderFlag,
        });
        if (this.props.onChange) {
            this.props.onChange(date);
        }
    };
    BookingCalendar.prototype.renderDayContentsForTrue = function (day) {
        return this.renderDayContentsSource(day);
    };
    BookingCalendar.prototype.renderDayContentsForFalse = function (day) {
        return this.renderDayContentsSource(day);
    };
    BookingCalendar.prototype.renderDayContentsSource = function (day) {
        var eventDates = this.props.eventDates;
        var selectedDate = this.state.selectedDate;
        var label = day.format('D');
        var classNames = [];
        if (day.isSame(moment(), 'day')) {
            classNames.push('bcd_today');
        }
        else if (day.isBefore(moment(), 'day')) {
            classNames.push('bcd_before');
        }
        else {
            classNames.push('bcd_after');
        }
        if (eventDates) {
            for (var i = 0; i < eventDates.length; i++) {
                if (day.isSame(eventDates[i], 'day')) {
                    classNames.push('bcd_has_events');
                    break;
                }
            }
        }
        if (day.isSame(selectedDate, 'day')) {
            classNames.push('bcd_selected');
        }
        return (React.createElement("div", { className: classNames.join(' ') },
            React.createElement("div", null, label)));
    };
    BookingCalendar.prototype.renderNavPrev = function () {
        return (React.createElement("div", { className: "DayPickerNavigation_button__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault" },
            React.createElement(Left_1.default, null)));
    };
    BookingCalendar.prototype.renderNavNext = function () {
        return (React.createElement("div", { className: "DayPickerNavigation_button__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault" },
            React.createElement(Right_1.default, null)));
    };
    return BookingCalendar;
}(React.Component));
exports.default = BookingCalendar;
//# sourceMappingURL=BookingCalendar.js.map