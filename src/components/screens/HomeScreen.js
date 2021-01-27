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
import { useDispatch, useSelector } from 'react-redux'
import Customer from '../cards/Customer'
import Filtered from '../cards/Patient'
import Pagination from '../cards/paginate'
import { fakeData, toTitleCase, filter } from '../../Data'
import Spinner from '../cards/Spinner'
import Message from '../cards/Message'
import { listRecords } from '../../actions/patientsActions'
const HomeScreen = ({ match, history }) => {
  // redux store
  const dispatch = useDispatch()
  const recordslist = useSelector((state) => state.recordslist)
  const { loading, error, records } = recordslist
  //local states
  const [gender, setGender] = useState('All')
  const [payment, setPayment] = useState('All')
  const [peopleArray, setPeopleArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(2)
  const [filtered, setFiltered] = useState(false)
  var keyword = match.params.keyword

  // Get current patients
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = records.slice(indexOfFirstPost, indexOfLastPost)
  const filteredPosts = peopleArray.slice(indexOfFirstPost, indexOfLastPost)
  console.log('filtered', filteredPosts)

  const filter = (gender, payment, dataBase) => {
    console.log(gender, payment)
    setFiltered(true)
    console.log(filtered)
    console.log('old people array', peopleArray)

    const newData = dataBase.filter((person) => {
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
    localStorage.setItem('filtered', JSON.stringify(newData))
    setPeopleArray(newData)
  }

  // function to handle  form submit functionalities
  function submitHandler(e) {
    e.preventDefault()
    filter(gender, payment, records)
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const paginate2 = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    console.log(peopleArray)
    dispatch(listRecords(keyword))
  }, [dispatch, keyword, peopleArray])

  return (
    <div className='top'>
      <Row>
        <Col md={9}>
          <h1>All Patients</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Container>
              <CardDeck className=' bg-secondary'>
                {filtered ? (
                  <Filtered data={filteredPosts} />
                ) : (
                  <Customer data={currentPosts} />
                )}
              </CardDeck>
            </Container>
          )}
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={records.length}
        paginate={paginate}
      />
    </div>
  )
}

export default HomeScreen
