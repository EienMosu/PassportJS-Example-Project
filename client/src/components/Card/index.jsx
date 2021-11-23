import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Desc, Image, Title } from "./Card.styles";

const Card = ({ title, image, desc, id }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src={image} alt="" />
      <Desc>{desc}</Desc>
      <Link to={`/post/${id}`}>
        <Button>Read More</Button>
      </Link>
    </Container>
  );
};

export default Card;
