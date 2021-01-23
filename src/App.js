import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from '../src/components/sections/Footer'
import Header from '../src/components/sections/Header'
import HomeScreen from '../src/components/screens/HomeScreen'
import AboutScreen from '../src/components/screens/AboutScreen'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/:name' component={AboutScreen} exact />
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App
