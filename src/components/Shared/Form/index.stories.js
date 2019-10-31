import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { Input, Button } from ".";

storiesOf("Form Components", module).add(
  "Input",
  () => (
    <Input
      placeholder={text(
        "Placeholder",
        "Label, Placeholder, Helper text, whatever you want"
      )}
    />
  ),
  {
    notes: "Basic component with default data"
  }
);

storiesOf("Form Components", module).add(
  "Button Default",
  () => (
    <>
      <Button looks="danger">I'm a button</Button>
      <Button looks="warning">I'm a button</Button>
      <Button disabled>I'm a button</Button>
    </>
  ),
  {
    notes: "Basic component with default data"
  }
);
