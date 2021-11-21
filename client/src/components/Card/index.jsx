import React from "react";
import { Button, Container, Desc, Image, Title } from "./Card.styles";

const Card = ({ title, image, desc }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src={image} alt="" />
      <Desc>{desc}</Desc>
      <Button>Read More</Button>
    </Container>
  );
};

export default Card;
