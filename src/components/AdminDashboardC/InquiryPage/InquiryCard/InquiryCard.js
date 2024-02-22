import React from 'react'
import styles from './InquiryCard.module.css'

export default function InquiryCard() {
  return (
    <div className={styles.inquiryCardWrapper}>
      <div>
        <p>👤</p>
      </div>
      <div>
        <div>
          <p>Name</p>
          <p>Email</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p>Event Type</p>
        </div>
        <div>
          <p>Event Date</p>
          <p>Number of guests</p>
        </div>

        <p>per person budget</p>
      </div>
      <div>
        <button>🗑️</button>
      </div>
    </div>
  )
}
