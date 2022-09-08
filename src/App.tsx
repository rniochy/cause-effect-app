import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import UserData from './components/users/[id]';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UsersName from './components/users/usersname';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route path="/user/:id" element={<UserData/>} ></Route>
            <Route path="/" element={<UsersName/>} ></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
