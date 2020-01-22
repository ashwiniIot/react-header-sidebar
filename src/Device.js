import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 2em;
  margin-left: 15em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


export const Device = (props) => (
  <GridWrapper>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Device 1</Card.Title>
    <Card.Text>
     Device is online.
    </Card.Text>
  </Card.Body>
</Card>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Device 2</Card.Title>
    <Card.Text>
     Device is offline.
    </Card.Text>
  </Card.Body>
</Card>
  </GridWrapper>
)