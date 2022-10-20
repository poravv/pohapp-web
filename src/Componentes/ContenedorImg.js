import React from "react";
import { Card, Container } from "react-bootstrap";

function ContenedorImg({ img }) {
  return (
    <>
      <Container className="contenedorimg" >
      <Card className="contenedorimg card">
        <Card.Img style={{display:`flex` }} src={img} />
        </Card>
      </Container>
    </>
  );
}

export default ContenedorImg;