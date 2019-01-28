import * as React from "react";
import 'react-dates/initialize';
import { DayPicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import StyledBookingCalendar from "./styled/StyledBookingCalendar";

interface Props {
  children: React.ReactNode;
}

class BookingCalendar extends React.Component<Props, {}> {
  public render() {
    return (
      <StyledBookingCalendar>
        <DayPicker
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
          renderDayContents={day => {
            if (day.isBefore('2019-01-24')) {
              return day.format('D');
            }
            return <strong>{day.format('D')}</strong>
          }}
          enableOutsideDays={true}
        />
      </StyledBookingCalendar>
    );
  }
}

export default BookingCalendar;
