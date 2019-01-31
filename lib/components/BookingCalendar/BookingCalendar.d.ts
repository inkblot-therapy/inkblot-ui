import * as React from "react";
import 'react-dates/initialize';
import * as moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
interface Props {
    /** Initial Selected Date - moment */
    initialSelectedDate?: moment.Moment;
    /** Dates that have events - moment[] */
    eventDates?: Array<moment.Moment>;
    /** Handler function when selected date changes - (date: moment)  */
    onChange?: (date: moment.Moment) => void;
}
interface State {
    selectedDate: moment.Moment;
    rerenderFlag: boolean;
}
declare class BookingCalendar extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    protected handleDateChange(date: moment.Moment): void;
    protected renderDayContentsForTrue(day: moment.Moment): React.ReactNode;
    protected renderDayContentsForFalse(day: moment.Moment): React.ReactNode;
    protected renderDayContentsSource(day: moment.Moment): React.ReactNode;
    protected renderNavPrev(): React.ReactNode;
    protected renderNavNext(): React.ReactNode;
}
export default BookingCalendar;
