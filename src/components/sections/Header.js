import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Search from '../sections/Search'

const Header = () => {
  const history = useHistory
  return (
    <header>
      <Navbar fixed='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>KENTS HOSPITAL</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'></Nav>
            <Search history={history} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
