import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from 'react-bootstrap'
import ProfileCard from '../cards/profileCard'
import { filteredPatience } from '../../actions/patientsActions'

const AboutScreen = ({ match }) => {
  // redux store
  const dispatch = useDispatch()
  const filtered = useSelector((state) => state.filtered)
  const { filteredRecords } = filtered

  //email of user
  const email = match.params.email

  useEffect(() => {
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
