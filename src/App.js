import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowersRouter as Router,Route,Router } from 'react-router-dom';

const App =() => {
  return (
    <Router>
      <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        
         </Routes>
         </Router>
  )
}
export default App