import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
