import React, { useState } from 'react'
import AdminMenuHeader from '../components/AdminDashboardC/AdminMenuHeader/AdminMenuHeader'
import styles from '../styles/AdminDashboard.module.css'
// import AdminHomePage from './AdminHomePage'
// import { Navigate, Route, Routes} from 'react-router-dom'
import AdminHomeCard from '../components/AdminDashboardC/AdminHomeCard/AdminHomeCard'
import AdminSearch from '../components/AdminDashboardC/AdminSearch/AdminSearch'


export default function AdminDashboard() {
  const [venueUpdate,setVenueupdate]=useState(true)
  return (
    <div className={styles.adminDashboardWrapper}>
      <AdminMenuHeader venueUpdate={venueUpdate} setVenueupdate={setVenueupdate}/>
      <AdminSearch />
      <div className={styles.adminHomeCardWrapper}>
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
        <AdminHomeCard />
      </div>

    </div>
  )
}
