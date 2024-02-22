import React from 'react'
import AdminMenuHeader from '../components/AdminDashboardC/AdminMenuHeader/AdminMenuHeader'
import AdminCreateVImageU from '../components/AdminDashboardC/AdminCreateVImageU/AdminCreateVImageU'
import styles from '../styles/CreateVenue.module.css'
import CreateVenueForm from '../components/AdminDashboardC/CreateVenueForm/CreateVenueForm'

export default function CreateVenue() {
  return (
    <>
      <AdminMenuHeader />
      <div className={styles.createVenueInnerWrapper}>
        <p className={styles.title}>Create venue</p>
        <AdminCreateVImageU />
        <CreateVenueForm/>
      </div>


    </>

  )
}
