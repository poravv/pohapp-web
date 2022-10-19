import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({ cabecera, cuerpo, imagen, boton, idpoha }) {
  return (
    <>
      <Card key={idpoha} id={idpoha} style={{ width: '18rem', margin: `10px` }}>
        <Card.Img variant="top" height="200px" src={imagen} />
        <Card.Body>
          <Card.Title >{cabecera}</Card.Title>
          <Card.Text>
            {cuerpo}
          </Card.Text>
          {boton ?
              <Button as={Link} to={`/Detalle/${idpoha}`} variant="primary">{boton}</Button>
            : null}
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;