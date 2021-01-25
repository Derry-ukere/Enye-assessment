import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  const date = new Date()
  return (
    <footer className='bg-dark' style={{ height: '60px' }}>
      <cite>
        <Container>
          <span className='white'>
            Copyright Kents Hospital &copy; {date.getFullYear()}{' '}
          </span>
        </Container>
      </cite>
    </footer>
  )
}

export default Footer
