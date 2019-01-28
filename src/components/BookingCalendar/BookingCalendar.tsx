import * as React from "react";
import 'react-dates/initialize';
import { DayPicker } from "react-dates";
import * as moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import StyledBookingCalendar from "./styled/StyledBookingCalendar";
import Left from "./images/Left";
import Right from "./images/Right";

/*
  TODO:
    add stories
    add ux properties (selectable)
*/


interface Props {
  /** Initial Selected Date - moment */
  initialSelectedDate?: moment.Moment;
  /** Dates that have events - moment[] */
  eventDates?: Array<moment.Moment>
  /** Handler function when selected date changes - (date: moment)  */
  onChange?: (date: moment.Moment) => void;
}

interface State {
  selectedDate: moment.Moment;
  rerenderFlag: boolean;
}

class BookingCalendar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedDate: props.initialSelectedDate || moment(),
      rerenderFlag: false,
    };

    this.renderDayContentsSource = this.renderDayContentsSource.bind(this);
    this.renderDayContentsForTrue = this.renderDayContentsForTrue.bind(this);
    this.renderDayContentsForFalse = this.renderDayContentsForFalse.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  public render() {
    return (
      <StyledBookingCalendar>
        <DayPicker
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
          renderDayContents={this.state.rerenderFlag ? this.renderDayContentsForTrue : this.renderDayContentsForFalse }
          transitionDuration={0}
          noBorder={true}
          navPrev={this.renderNavPrev()}
          navNext={this.renderNavNext()}
          onDayClick={this.handleDateChange}
          initialVisibleMonth={() => this.props.initialSelectedDate || moment()}
        />
      </StyledBookingCalendar>
    );
  }

  protected handleDateChange(date: moment.Moment): void {
    this.setState({
      selectedDate: date,
      rerenderFlag: !this.state.rerenderFlag,
    });

    if (this.props.onChange) {
      this.props.onChange(date);
    }
  }

  protected renderDayContentsForTrue(day: moment.Moment): React.ReactNode {
    return this.renderDayContentsSource(day);
  }

  protected renderDayContentsForFalse(day: moment.Moment): React.ReactNode {
    return this.renderDayContentsSource(day);
  }

  protected renderDayContentsSource(day: moment.Moment): React.ReactNode {
    const { eventDates } = this.props;
    const { selectedDate } = this.state;
    const label = day.format('D');
    let classNames: string[] = [];

    if (day.isSame(moment(), 'day')) {
      classNames.push('bcd_today');
    } else if (day.isBefore(moment(), 'day')) {
      classNames.push('bcd_before');
    } else {
      classNames.push('bcd_after');
    }

    if (eventDates) {
      for(let i: number = 0; i < eventDates.length; i++) {
        if (day.isSame(eventDates[i], 'day')) {
          classNames.push('bcd_has_events');
          break;
        }
      }
    }

    if (day.isSame(selectedDate, 'day')) {
      classNames.push('bcd_selected');
    }

    return (
      <div className={classNames.join(' ')}>
        <div>
          {label}
        </div>
      </div>
    );
  }

  protected renderNavPrev(): React.ReactNode {
    return (
      <div className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault">
        <Left />
      </div>
    );
  }

  protected renderNavNext(): React.ReactNode {
    return (
      <div className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault">
        <Right />
      </div>
    );
  }
}

export default BookingCalendar;
