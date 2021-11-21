import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.span `
    font-size: 20px;
    font-weight: 600;
`

export const List = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
`

export const ListItem = styled.li `
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`

export const Avatar = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`