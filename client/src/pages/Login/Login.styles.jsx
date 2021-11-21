import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
    position: absolute;
    top: 200px;
    color: lightgray;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 60%;
  height: 75%;
  box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButtonContainer = styled.div`
  width: 150px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Line = styled.div`
  width: 0.5px;
  height: 70%;
  background-color: lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`;

export const Or = styled.div`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: bold;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 200px;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
