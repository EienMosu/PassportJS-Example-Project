import React from "react";
import { useLocation } from "react-router";
import { posts } from "../../data";
import { Container, Desc, Image, LongDesc, Title } from "./Post.styles";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);

  return (
    <Container>
      {!post ? (
        <Title>Loading...</Title>
      ) : (
        <>
          <Image src={post.img} alt="" />
          <Title>{post.title}</Title>
          <Desc>{post.desc}</Desc>
          <LongDesc>{post.longDesc}</LongDesc>
        </>
      )}
    </Container>
  );
};

export default Post;
