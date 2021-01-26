import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { fakeData } from '../../Data'
import ProfileCard from '../cards/profileCard'
import { listRecords } from '../../actions/patientsActions'

const AboutScreen = ({ match }) => {
  const [profile, setProfile] = useState({})

  // redux store
  const dispatch = useDispatch()
  const recordslist = useSelector((state) => state.recordslist)
  const { loading, error, records } = recordslist
  const email = match.params.email

  //getting each details
  const fetchSingleRecord = () => {
    var t = records.filter(function (obj) {
      if (obj.Email.includes(email)) {
        return obj
      }
    })
    console.log('users', t[0])
    setProfile(t[0])
  }

  useEffect(() => {
    console.log(records)
    fetchSingleRecord()
    dispatch(listRecords())
  }, [dispatch])
  return (
    <div style={{ marginTop: '120px' }} className='py-3'>
      <Container>
        <ProfileCard data={profile} />
      </Container>
    </div>
  )
}

export default AboutScreen
