import React, { useState } from 'react'
import styles from '../styles/ProfilePage.module.css'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
    const [editable, setEditable] = useState(false)


    function handleEdit() {
        setEditable(true)
    }

    function handleSave() {
        setEditable(false)
    }


    return (
        <div className={styles.profilePageWrapper}>
            <div className={styles.profilePageInnerWrapper}>
                <div>
                    <img src="delhi.jpg" alt="" />
                </div>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" disabled={!editable} />
                    <label htmlFor="" >Email</label>
                    <input type="email" disabled={!editable} />
                    <label htmlFor="" >Phone Number</label>
                    <input type="number" disabled={!editable}/>
                </form>
                {!editable && <button onClick={handleEdit} className={styles.editButton}>Edit</button>}
                {editable && <button onClick={handleSave} className={styles.saveButton}>Save</button>}
                <Link to='/updatePassword'><button className={styles.updatepassword}>Update Password</button></Link>
                <Link to='/admin' ><button className={styles.dashoboardButton}>DashBoard</button></Link>

            </div>
        </div>
    )
}
