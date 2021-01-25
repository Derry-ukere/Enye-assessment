import Spinner from 'react-bootstrap/Spinner'
import React from 'react'

const Spiner = () => {
  return (
    <div>
      <Spinner animation='grow' role='status' variant='success'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Spiner
