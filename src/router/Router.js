import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import VenueDetails from '../pages/VenueDetails'
import Venues from '../pages/Venues'
import RequestForm from '../pages/RequestForm'


export default function Router(){
    return (
       <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<Signup/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/venue/:venueId' element={<VenueDetails/>}/>
        <Route path='/request' element={<RequestForm/>}/>   
       </Routes>
    )
}