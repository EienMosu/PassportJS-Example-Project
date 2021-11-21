import React from "react";
import { useLocation } from "react-router";
import { posts } from "../../data";
import { Container, Desc, Image, LongDesc, Title } from "./Post.styles";

const Post = () => {
  const post = posts[0];

  const location = useLocation();

  console.log(location);

  return (
    <Container>
      <Image src={post.img} alt="" />
      <Title>{post.title}</Title>
      <Desc>{post.desc}</Desc>
      <LongDesc>{post.longDesc}</LongDesc>
    </Container>
  );
};

export default Post;
