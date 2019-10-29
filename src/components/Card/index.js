import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: rgba(var(--white), 0.95);
  box-shadow: -3px 0 7px 2px rgba(var(--black), 0.25);
  border-radius: 4px;
  color: rgba(var(--black), 0.75);
  padding: 10px 15px;
  max-width: 300px;
  width: 100%;

  & + & {
    margin-top: 1em;
  }
`;

const CardTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 0.5em;
  line-height: normal;
`;

const CardDescription = styled.h4`
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4;
`;

export default ({
  title = "Default Title",
  description = "Default Description"
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};
