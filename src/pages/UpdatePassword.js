import React from 'react'
import styles from '../styles/UpdatePassword.module.css'

export default function UpdatePassword() {
  return (
    <div className={styles.updatePasswordWrapper}>
            <div className={styles.updatePasswordInnerWrapper}>
                <p>Update Password</p>
                <form action="">
                    <label htmlFor="" >Current Password</label>
                    <input type="text"  />
                    <label htmlFor="" >New Password</label>
                    <input type="text"/>
                    <label htmlFor="" >Confirm Password</label>
                    <input type="text"/>
                </form>
                <button >Update</button>
            </div>
        </div>
  )
}
