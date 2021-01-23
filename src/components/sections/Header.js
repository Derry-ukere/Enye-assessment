import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Search from '../sections/Search'

const Header = () => {
  return (
    <header>
      <Navbar fixed='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>People</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'></Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
