import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Title = styled.h1``;

export const Desc = styled.p`
  padding: 0 100px;
  font-size: 24px;
  font-weight: 300;
  color: gray;
  margin-bottom: 50px;
`;

export const LongDesc = styled.p`
  padding: 100px;
  padding-top: 50px;
  font-size: 18px;
  line-height: 24px;
`;
