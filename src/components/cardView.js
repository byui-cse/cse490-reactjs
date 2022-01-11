import React from 'react';
import { Card } from 'react-bootstrap';
function CardView(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardView;
