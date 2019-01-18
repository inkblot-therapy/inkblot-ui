import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import DropdownItem from "./DropdownItem";

const stories = storiesOf("Components/DropdownItem", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <DropdownItem>
      {text("Label", "Default")}
    </DropdownItem>
  )),
);
