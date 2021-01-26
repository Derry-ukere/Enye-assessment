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
import Pagination from '../cards/paginate'
import { fakeData, toTitleCase } from '../../Data'
import Spinner from '../cards/Spinner'
import Message from '../cards/Message'
import { listRecords } from '../../actions/patientsActions'
const HomeScreen = ({ match }) => {
  const [gender, setGender] = useState('All')
  const [payment, setPayment] = useState('All')
  const [peopleArray, setPeopleArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)
  const [isloading, setLoading] = useState(false)
  var keyword = match.params.keyword

  // redux store
  const dispatch = useDispatch()
  const recordslist = useSelector((state) => state.recordslist)
  const { loading, error, records } = recordslist
  // Get current patients
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = records.slice(indexOfFirstPost, indexOfLastPost)

  const filter = () => {
    console.log(gender, payment)
    const newData = peopleArray.filter((person) => {
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
  }

  //Function to filter Data via keyword

  const findPatients = (word, dataBase) => {
    if (word === undefined || word === null) {
      keyword = ''
    }
    const filteredData = dataBase.filter((item) => {
      const titleCaseKeyword = toTitleCase(word)
      if (item.FirstName.includes(titleCaseKeyword)) {
        return item
      }
    })
    setPeopleArray(filteredData)
  }

  // function to handle  form submit functionalities
  function submitHandler(e) {
    e.preventDefault()
    filter()
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    dispatch(listRecords())
    // filter()
    findPatients(keyword, peopleArray)
  }, [dispatch, gender, payment, keyword])

  return (
    <div className='top'>
      <Row>
        <Col md={9}>
          <h1>All Patients</h1>
          {loading ? (
            <Spinner />
          ) : (
            <Container>
              <CardDeck className=' bg-secondary'>
                <Customer data={currentPosts} />
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
        totalPosts={peopleArray.length}
        paginate={paginate}
      />
    </div>
  )
}

export default HomeScreen
