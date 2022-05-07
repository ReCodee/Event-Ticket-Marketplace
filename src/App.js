import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Discover from './Discover';
import Header from './Header';
function App() {
  return (
    <Router>
      <Header/>
      {/* <Link to = '/discover'>Discover page</Link>
      <br/>
      <Link to = 'connectwallet'>Connect Wallet</Link>
      <br/>
      <Link to = 'createevent'>Create Event</Link> */}
        <Routes>
            <Route path = '/discover' element = {<Discover/>}/>
        </Routes>
        <Routes>
            <Route path = '/createEvent' element = {<createEvent/>}/>
        </Routes>
        <Routes>
            <Route path = '/connectWallet' element = {<connectWallet/>}/>
        </Routes>
    </Router>
  )
} 
 
export default App