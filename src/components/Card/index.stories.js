import React from "react";
import { text } from "@storybook/addon-knobs";

import Card from ".";

export default { title: "Card Component" };

export const Initial = () => <Card />;
export const WithProps = () => (
  <Card title={text("Title", "This is a really big title")}
  description={text("Description", "This is a really big description")} />
);
