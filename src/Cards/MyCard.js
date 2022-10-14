import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({cabecera,cuerpo,imagen}) {
  return (
    <>
    <Card style={{ width: '18rem',margin:`10px`}}>
      <Card.Img variant="top" height="200px" src={imagen}/>
      <Card.Body>
        <Card.Title>{cabecera}</Card.Title>
        <Card.Text>
          {cuerpo}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default MyCard;