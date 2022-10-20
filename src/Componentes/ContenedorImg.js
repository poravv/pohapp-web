import React from "react";
import { Card, Container } from "react-bootstrap";

function ContenedorImg({ img }) {
  return (
    <>
      <Container style={{display:`flex` ,justifyContent:`center`,alignItems:`center` }}>
      <Card style={{justifyContent:`center`,width:`700px`}}>
        <Card.Img src={img} />
        </Card>
      </Container>
    </>
  );
}

export default ContenedorImg;