import React from "react";
import { Card } from "react-bootstrap";

function MyCard({ titulo, contenido, adicional, lista }) {
  return (
    <>
      <Card className="card" style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="card-text text-secondary">
            {contenido}
          </Card.Text>
          <Card.Text className="card-text text-secondary" style={{ whitespace: `pre-wrap` }}>
            
            {
              //Aqui se aplica el salto de linea 
              lista? 
              lista.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              }):null
            }
          </Card.Text>
          <Card.Text className="card-text">
            {adicional}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;