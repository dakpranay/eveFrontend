import React from 'react'
import styles from './UniquevenueCard.module.css'

export default function UniqueVenueCard({item}) {
  return (
    <button className={styles.uniqueVenueCardWrapper}>
      <div>
        <img src={item.url} alt="location" />
      </div>
      <div className={styles.uniqueVenueCardDetailWrapper}>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
    </button>
  )
}
