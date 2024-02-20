import React from 'react'
import styles from './VenueCard.module.css'
import { Link } from 'react-router-dom'

export default function VenueCard() {
  return (
    <Link to='/venue/2' className={styles.uniqueVenueCardWrapper}>
        <img src='5starvenue.jpg' alt="location" />
        <div className={styles.venueDetailsWrapper}>
            <div>
                <div>&#x1F4CD; London</div>
                <div> ⭐ 4</div>
            </div>
            <h4>Nice to have you </h4>
            <Link to='/request'><button>Request a quote</button></Link>
        </div>
    </Link>
  )
}
