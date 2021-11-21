import React from "react";
import Card from "../../components/Card";
import { posts } from "../../data";
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          image={post.img}
          desc={post.desc}
        />
      ))}
    </Container>
  );
};

export default Home;
