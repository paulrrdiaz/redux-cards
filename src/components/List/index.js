import React from "react";

import { List, ListTitle } from "./styled";
import Card from "containers/Card";
import CreateCard from "components/CreateCard";

export default ({ title = "Default List's title", cards }) => {
  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CreateCard />
      {cards.map(cardId => (
        <Card key={cardId} cardId={cardId} />
      ))}
    </List>
  );
};
