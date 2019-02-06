import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
// import * as moment from 'moment-timezone';
import * as momentImported from 'moment-timezone'; 
const moment = momentImported;
import { wInfo } from "../../utils/wInfo";
import BookingCalendar from "./BookingCalendar";


const stories = storiesOf("Components/BookingCalendar", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <BookingCalendar
      eventDates={[moment('2019-02-04'), moment('2019-02-11'), moment('2019-02-20')]}
      onChange={date => console.log(date.format())}
    />
  )),
);
