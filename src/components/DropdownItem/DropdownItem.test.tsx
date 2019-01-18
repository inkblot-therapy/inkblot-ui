import * as React from "react";

import themed from "../../utils/themed";
import DropdownItem from "./DropdownItem";

describe("DropdownItem", () => {
  it("should render correctly", () => {
    const component = themed(
      <DropdownItem>
        Test
      </DropdownItem>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
