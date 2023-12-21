import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.productImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default KitchenSinkExample;
