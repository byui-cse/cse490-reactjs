import React from 'react';
import { Card } from 'react-bootstrap';
import { format } from 'date-fns';
import { BsTrash } from 'react-icons/bs';
import './style.css';

function CardView(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>
          {props.title}
          {props.canDelete && (
            <BsTrash
              className='trashButton'
              onClick={() => {
                props.deleteHandler(props._key);
              }}
            />
          )}
        </Card.Title>
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
