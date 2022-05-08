import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Discover from './Discover';
import Header from './Header';
import CreateEvent from './CreateEvent';
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
            <Route path = '/' element = {<Discover/>}/>
        </Routes>
        <Routes>
            <Route path = '/CreateEvent' element = {<CreateEvent/>}/>
        </Routes>
        <Routes>
            <Route path = '/ConnectWallet' element = {<connectWallet/>}/>
        </Routes>
    </Router>
  )
} 
 
export default App