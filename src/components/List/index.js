import React from "react";
import styled from "@emotion/styled";

import Card from "components/Card";

const List = styled.div`
  background-color: rgba(var(--black), 0.3);
  border-radius: 4px;
  padding: 10px 20px 20px;
  width: 300px;

  & + & {
    margin-left: 1em;
  }
`;

const ListTitle = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default () => {
  return (
    <List>
      <ListTitle>Lista</ListTitle>
      {[1, 2].map(id => (
        <Card key={id} />
      ))}
    </List>
  );
};
