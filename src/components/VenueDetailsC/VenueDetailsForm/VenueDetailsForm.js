import React from 'react'
import styles from './VenueDetailsForm.module.css'

export default function VenueDetailsForm() {
  return (
    <div className={styles.venueDetailsFormWrapper}>
      <p>Inquiry</p>
      <form>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='Full name'
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          required
        />
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          required
          placeholder="Phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          required
        />
        <input
          type="number"
          id="expectedGuest"
          name="sexpectedGuest"
          placeholder="Guest"
          required
        />



      </form>
      <button>Send Inquiry</button>
    </div>
  )
}
