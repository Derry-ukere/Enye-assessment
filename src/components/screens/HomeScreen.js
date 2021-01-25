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
import axios from 'axios'
import Customer from '../cards/Customer'
import Pagination from '../cards/paginate'
import { data, toTitleCase } from '../../Data'
import Spinner from '../cards/Spinner'
import Message from '../cards/Message'

const HomeScreen = ({ match }) => {
  const [gender, setGender] = useState('All')
  const [payment, setPayment] = useState('All')
  const [peopleArray, setPeopleArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  const [loading, setLoading] = useState(false)
  var keyword = match.params.keyword

  // Get current patients
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = peopleArray.slice(indexOfFirstPost, indexOfLastPost)

  const filter = () => {
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

  //Function to filter Data via key world

  const findPatients = (word, dataBase) => {
    if (word === undefined || word === null) {
      keyword = ''
      console.log('keyword empty')
    }
    const filteredData = dataBase.filter((item) => {
      const titleCaseKeyword = toTitleCase(word)
      if (item.FirstName.includes(titleCaseKeyword)) {
        return item
      }
    })
    console.log('filtered', filteredData)
    setPeopleArray(filteredData)
  }

  // function to handle  form submit functionalities
  function submitHandler(e) {
    e.preventDefault()
    filter()
  }

  const setData = () => {
    setPeopleArray(data)
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get('https://api.enye.tech/v1/challenge/records')
      console.log(res)
      setLoading(false)
    }

    fetchData()
    setData()
    // filterData()
    findPatients(keyword, data)
  }, [gender, payment, keyword])

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
