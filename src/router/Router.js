import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import VenueDetails from '../pages/VenueDetails'
import Venues from '../pages/Venues'
import RequestForm from '../pages/RequestForm'
import ProfilePage from '../pages/ProfilePage'
import UpdatePassword from '../pages/UpdatePassword'
import AdminDashboard from '../pages/AdminDashboard'
import CreateVenue from '../pages/CreateVenue'
import Inquires from '../pages/Inquiry'
import NotFound from '../pages/NotFound'

export default function Router(){
    return (
       <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/venue/:venueId' element={<VenueDetails/>}/>
        <Route path='/request' element={<RequestForm/>}/>   
        <Route path='/profile' element={<ProfilePage/>}/>   
        <Route path='/updatePassword' element={<UpdatePassword/>}/>   
        <Route path='/admin' element={<AdminDashboard/>}/>   
        <Route path='admin/venue/:venueId?' element={<CreateVenue/>}/>   
        <Route path='admin/inqueries' element={<Inquires/>}/>   
        <Route path='*' element={<NotFound/>}/>
       </Routes>
    )
}