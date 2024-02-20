import React from 'react'
import styles from './VenueDetailsDes.module.css'

export default function VenueDetailsDes() {
    return (
        <div className={styles.venueDetailsDesWrapper}>
            <div>
                <p>Name</p>
                <p><span>&#9733;</span> 4</p>
            </div>
            <div>
                <p>📍loaction</p>
                <p>🤼max capacity</p>
            </div>
            <p>address</p>
            <div>
                <p>Description</p>
                <p>Detail</p>
            </div>
        </div>
    )
}
