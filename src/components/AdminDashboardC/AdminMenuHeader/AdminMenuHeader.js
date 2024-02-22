import React from 'react'
import styles from './AdminMenuHeader.module.css'
import { Link } from 'react-router-dom'

export default function AdminMenuHeader() {


  return (
    <div className={styles.adminMenuHeaderWrapper}>
      <Link to='/admin'><button>🏠 Home</button></Link>
      <Link to='/admin/inqueries'><button>📩 Requests</button></Link>
      <Link to='/admin/venue'><button>📝 Create Venue</button></Link>
    </div>
  )
}
