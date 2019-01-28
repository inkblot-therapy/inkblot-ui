import * as React from "react";

import themed from "../../utils/themed";
import BookingCalendar from "./BookingCalendar";

describe("BookingCalendar", () => {
  it("should render correctly", () => {
    const component = themed(
      <BookingCalendar>
        Test
      </BookingCalendar>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
