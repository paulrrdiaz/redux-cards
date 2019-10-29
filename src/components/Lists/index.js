import React from 'react'
import styled from "@emotion/styled";
import List from 'components/List';

const Lists = styled.div`
  display: flex;
`

export default () => {
  return (
    <Lists>
      {
        [1, 2].map(id => <List key={id} />)
      }
    </Lists>
  )
}