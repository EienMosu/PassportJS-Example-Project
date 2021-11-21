import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 25%;
  min-width: 300px;
  height: 700px;
  margin: 50px 30px;
  border-radius: 10px;
  box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: -1px -2px 5px 6px rgba(0, 0, 0, 0.11);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin: 10px 0px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Desc = styled.span`
  font-size: 24px;
  font-weight: 300;
  margin: 20px 0px;
  color: #333;
  line-height: 30px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: teal;
  color: white;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
