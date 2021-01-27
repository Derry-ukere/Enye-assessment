import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { fakeData } from '../../Data'
import ProfileCard from '../cards/profileCard'
import { filteredPatience } from '../../actions/patientsActions'

const AboutScreen = ({ match }) => {
  // redux store
  const dispatch = useDispatch()
  const filtered = useSelector((state) => state.filtered)
  const { filteredRecords } = filtered

  const [profile, setProfile] = useState({})
  const email = match.params.email

  //getting each details

  //   useEffect(() => {
  //     console.log('filter records', filteredRecords)
  //     fetchSingleRecord()
  //   })
  useEffect(() => {
    // console.log('filer records', filteredRecords[0].Email)
    dispatch(filteredPatience(email))
  }, [])
  return (
    <div style={{ marginTop: '120px' }} className='py-3'>
      <Container>
        <ProfileCard data={filteredRecords} />
      </Container>
    </div>
  )
}

export default AboutScreen
