import * as React from "react";

import themed from "../../utils/themed";
import Search from "./Search";

describe("Search", () => {
  it("should render correctly", () => {
    const component = themed(
      <Search>
        Test
      </Search>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
