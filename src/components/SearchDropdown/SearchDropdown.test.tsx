import * as React from "react";

import themed from "../../utils/themed";
import SearchDropdown from "./SearchDropdown";

describe("SearchDropdown", () => {
  it("should render correctly", () => {
    const component = themed(
      <SearchDropdown>
        Test
      </SearchDropdown>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
