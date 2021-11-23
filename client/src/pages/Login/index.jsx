import React from "react";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import {
  Button,
  Center,
  Container,
  Icon,
  Input,
  Left,
  Line,
  LoginButtonContainer,
  Or,
  Right,
  Title,
  Wrapper,
} from "./Login.styles";

const Login = () => {
  const handleGoogle = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const handleGithub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <Container>
      <Title>Choose a Login Method</Title>
      <Wrapper>
        <Left>
          <LoginButtonContainer
            backgroundColor={"#df4930"}
            onClick={handleGoogle}
          >
            <Icon src={google} alt="" />
            Google
          </LoginButtonContainer>
          <LoginButtonContainer onClick={handleGithub} backgroundColor={"#000"}>
            <Icon src={github} alt="" />
            GitHub
          </LoginButtonContainer>
        </Left>
        <Center>
          <Line />
          <Or>OR</Or>
        </Center>
        <Right>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Submit</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Login;
