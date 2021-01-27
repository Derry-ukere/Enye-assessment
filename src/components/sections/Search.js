import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    const word = keyword.toLowerCase().trim()
    if (word) {
      history.push(`/search/${word}`)
    }
    setKeyword('')
  }

  const changeHandler = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={changeHandler}
        placeholder='Input first name...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
