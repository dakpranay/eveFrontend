import React from 'react'
import styles from './ReveiwCard.module.css'

export default function ReviewCard() {
  return (
    <>
    <div className={styles.reviewCardWrapper}>
        <div>
            <p>👤</p>
        </div>
        <div>
            <p>Name</p>
            <p>date</p>
            <p>review</p>
        </div>
        <p>⭐ 5</p>
    </div>
    <hr style={{marginTop:"20px",marginBottom:"10px"}}/>
    </>
  )
}
