import React from 'react'
import Card from 'react-bootstrap/Card'
import { ListGroupItem, ListGroup } from 'react-bootstrap'

const profileCard = ({ data }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            {data.FirstName} {data.LastName}
          </Card.Title>
          <Card.Text>
            More Detailed Information about {data.FirstName} {data.LastName}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Email Address:{data.Email}</ListGroupItem>
          <ListGroupItem>Phone Number:{data.PhoneNumber}</ListGroupItem>
          <ListGroupItem>Gender:{data.Gender}</ListGroupItem>
          <ListGroupItem>Latitude:{data.Latitude}</ListGroupItem>
          <ListGroupItem>Longitude:{data.Longitude}</ListGroupItem>
          <ListGroupItem>
            Credit Card Number:{data.CreditCardNumber}
          </ListGroupItem>
          <ListGroupItem>Credit Card Type:{data.CreditCardType}</ListGroupItem>

          <ListGroupItem>Domain:{data.DomainName}</ListGroupItem>
          <ListGroupItem>Mac Address:{data.MacAddress}</ListGroupItem>
          <ListGroupItem>Url:{data.URL}</ListGroupItem>
          <ListGroupItem>Payment Method:{data.PaymentMethod}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <ListGroupItem>User Name:{data.UserName}</ListGroupItem>
          <ListGroupItem>Last Login:{data.LastLogin}</ListGroupItem>
        </Card.Body>
      </Card>
    </div>
  )
}

export default profileCard
