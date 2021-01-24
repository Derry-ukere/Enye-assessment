import React from 'react'
import Card from 'react-bootstrap/Card'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <div style={{ marginTop: '120px' }} className='py-3'>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> Full Name: Terry Kens</Card.Title>
            <Card.Text>More Detailed Information about Terry Kens</Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Email Address:</ListGroupItem>
            <ListGroupItem>Phone Number:</ListGroupItem>
            <ListGroupItem>Gender:</ListGroupItem>
            <ListGroupItem>Latitude:</ListGroupItem>
            <ListGroupItem>Longitude:</ListGroupItem>
            <ListGroupItem>Credit Card Number:</ListGroupItem>
            <ListGroupItem>Domain:</ListGroupItem>
            <ListGroupItem>Mac Address:</ListGroupItem>
            <ListGroupItem>Url:</ListGroupItem>
            <ListGroupItem>Payment Method:</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <ListGroupItem>User Name:</ListGroupItem>
            <ListGroupItem>Last Login:</ListGroupItem>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default AboutScreen
