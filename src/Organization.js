import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 2em;
  margin-left: 16em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Organization = () => (
  <GridWrapper>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Org 1</Card.Title>
    <Card.Text>
     USA
    </Card.Text>
  </Card.Body>
</Card>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Org 2</Card.Title>
    <Card.Text>
    India
    </Card.Text>
  </Card.Body>
</Card>
  </GridWrapper>
)