import React from 'react';
import StarWidget from './starWidget';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function card(props) {

    return (
        <div>
            <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>{props.product.name}</Card.Title>
    <Card.Text>
      {props.product.description}
    </Card.Text>
    <StarWidget saveRating={props.saveRating} index={props.index} uuid={props.product.uuid} />
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
            
            <hr />
        </div>
    )
}
export default card