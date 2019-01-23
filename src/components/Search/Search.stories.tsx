import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import Search from "./Search";

const stories = storiesOf("Components/Search", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Search>
      {text("Label", "Default")}
    </Search>
  )),
);
