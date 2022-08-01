import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import UsersName from './components/users/usersname'

function App() {

  return (
    <div className="App">
      <Header/>
      <UsersName/>
      <Footer/>
    </div>
  )
}

export default App
