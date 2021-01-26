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
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/details/:email' component={AboutScreen} exact />
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App

// const findUser = async () => {
//   const res = await axios.get('https://api.enye.tech/v1/challenge/records')
//   const data = res.data.records.profiles
//   const email = match.params.email
//   data.find((item) => {
//     if (item.Email === email) {
//       console.log('there')
//     }
//   })
//   // console.log('user', user)
//   // setProfile(user)
// }
