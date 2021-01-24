import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import React, { useEffect } from 'react'

const Customer = ({ data }) => {
  useEffect(() => {}, [])

  return (
    <div>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <tr>
              <td>{customer.FirstName}</td>
              <td>{customer.LastName}</td>
              <td>{customer.Gender}</td>
              <td>{customer.Email}</td>
              <td>{customer.PhoneNumber}</td>
              <td>
                <LinkContainer to={`/${customer.FirstName}`}>
                  <Button variant='outline-success' className='btn-sm'>
                    More Details
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Customer
