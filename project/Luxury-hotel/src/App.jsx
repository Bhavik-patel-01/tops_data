import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Booknow from './Website/Pages/Booknow'
import NotFound from './Website/Pages/NotFound'
import Adashboard from './Admin/Apages/Adashboard'
import AroomsManage from './Admin/Apages/AroomsManage'
import Rooms from './Website/Pages/Rooms'
import AroomsAdd from './Admin/Apages/AroomsAdd'
import Register from './Website/Pages/Register'
import Usermanage from './Admin/Apages/Usermanage'
import Login from './Website/Pages/Login'
import Alogin from './Admin/Apages/Alogin'
import { ToastContainer} from 'react-toastify'
import EditProfile from './Website/Pages/EditProfile'
import AbookingManage from './Admin/Apages/AbookingManage'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/booknow' element={<Booknow />}></Route>
      <Route path='/rooms' element={<Rooms />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/edit' element={<EditProfile/>}></Route>

       {/* not found */}
       <Route path="*" element={<NotFound />}></Route>

       {/* admin hide */}
       <Route path="/dashboard" element={<Adashboard />}></Route>
       <Route path="/AroomsManage" element={<AroomsManage />}></Route>
       <Route path="/AroomsAdd" element={<AroomsAdd />}></Route>
       <Route path="/AbookingManage" element={<AbookingManage />}></Route>
       <Route path="/usermanage" element={<Usermanage />}></Route>
       <Route path="/alogin" element={<Alogin />}></Route>
    </Routes>
    <ToastContainer />

    </BrowserRouter>
    </>
  )
}

export default App
