import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import BookingCalendar from "./BookingCalendar";

const stories = storiesOf("Components/BookingCalendar", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <BookingCalendar>
    </BookingCalendar>
  )),
);
