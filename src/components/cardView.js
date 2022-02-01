import React from 'react';
import { Card } from 'react-bootstrap';
import { format } from 'date-fns';

function CardView(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>
          Added on {format(new Date(props.created), 'MM/dd/yyyy')}
        </small>
      </Card.Footer>
    </Card>
  );
}

export default CardView;
