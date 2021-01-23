import React from 'react'
import {
  DropdownButton,
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
const HomeScreen = () => {
  return (
    <div className='top'>
      <Row>
        <Col md={9}>
          <h1>List Of Top Customers</h1>
          <Container>
            <CardDeck className=' bg-secondary'>
              <Customer />
              <Customer />
              <Customer />
              <Customer />
              <Customer />
              <Customer />
            </CardDeck>
          </Container>
        </Col>
        <Col md={3} className='fix'>
          <h4>
            <strong>Sort by:</strong>
          </h4>

          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Gender</Col>
                  <Col>
                    <Form.Control as='select' value={'test'} onChange={'test'}>
                      <option key={'test'} value={'Mastercard'}>
                        All
                      </option>
                      <option key={'test'} value={'Male'}>
                        Male{' '}
                      </option>
                      <option key={'test'} value={'Female'}>
                        Female{' '}
                      </option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Card Type</Col>
                  <Col>
                    <Form.Control as='select' value={'test'} onChange={'test'}>
                      <option key={'test'} value={'Mastercard'}>
                        All
                      </option>
                      <option key={'test'} value={'Mastercard'}>
                        Mastercard
                      </option>
                      <option key={'test'} value={'Visacard'}>
                        Visacard
                      </option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button onClick={'test'} className='btn-block' type='button'>
                  Sort
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
