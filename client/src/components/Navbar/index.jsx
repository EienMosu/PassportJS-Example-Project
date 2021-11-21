import React from 'react'
import { Avatar, Container, List, ListItem, Logo } from './Navbar.styles'

const Navbar = () => {
    return (
        <Container>
            <Logo>Passport-JS App</Logo>
            <List>
                <ListItem>
                    <Avatar alt="" src="https://images.unsplash.com/photo-1636990491571-18f0b277a947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"/>
                </ListItem>
                <ListItem>Ozkan Selcuk</ListItem>
                <ListItem>Logout</ListItem>
            </List>
        </Container>
    )
}

export default Navbar
