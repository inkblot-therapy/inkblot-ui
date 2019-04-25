import * as React from "react";

import themed from "../../utils/themed";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("should render correctly", () => {
    const component = themed(
      <IconButton>
        Test
      </IconButton>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
