import React, { useEffect, useState } from 'react'
import {
  Container,
  CardDeck,
  Card,
  ListGroup,
  Button,
  Row,
  Col,
  Form,
} from 'react-bootstrap'

import Customer from '../cards/Customer'
import { data } from '../../Data'

const HomeScreen = () => {
  const [gender, setGender] = useState('All')
  const [payment, setPayment] = useState('All')
  const [peopleArray, setPeopleArray] = useState([])

  const filter = () => {
    const newData = data.filter((person) => {
      if (gender === 'All' && payment === 'All') {
        return person
      } else if (gender !== 'All' && payment === 'All') {
        return person.Gender === gender
      } else if (gender === 'All' && payment !== 'All') {
        return person.PaymentMethod === payment
      } else if (gender !== 'All' && payment !== 'All') {
        return person.PaymentMethod === payment && person.Gender === gender
      }
    })
    setPeopleArray(newData)
    console.log('new data', newData)
    console.log('peopleArray', peopleArray[0])
    console.log('gender!', gender)
    console.log('payment!', payment)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    filter()
  }

  const setData = () => {
    setPeopleArray(data)
    console.log('peopleArray', peopleArray[0])
  }
  useEffect(() => {
    setData()
    console.log('peopleArray!!', peopleArray[0])
    console.log('peopleArray first index', peopleArray[0])
    console.log('peopleArray second index', peopleArray[2])
    console.log('peopleArray first index of firt', peopleArray[0])

    // console.log('old data!!', data)
  }, [gender, payment])

  return (
    <div className='top'>
      <Row>
        <Col md={9}>
          <h1>All Patients</h1>
          <Container>
            <CardDeck className=' bg-secondary'>
              <Customer data={peopleArray} />
            </CardDeck>
          </Container>
        </Col>
        <Col md={3} className='fix'>
          <div>
            <h4>
              <strong>Sort by:</strong>
            </h4>
            <Card>
              <Form onSubmit={submitHandler}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <Form.Label>Gender</Form.Label>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            as='select'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option>All</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer to skip</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <Form.Label>Payment</Form.Label>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            as='select'
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                          >
                            <option>All</option>
                            <option>check</option>
                            <option>money order</option>
                            <option>paypal</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className='btn-block' type='submit'>
                      Filter
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
