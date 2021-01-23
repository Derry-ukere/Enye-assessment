import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  const date = new Date()
  return (
    <footer className='bg-dark'>
      <cite>
        <Container>
          <span className='white'>
            Copyright Tech Prime shop &copy; {date.getFullYear()}{' '}
          </span>
        </Container>
      </cite>
    </footer>
  )
}

export default Footer
