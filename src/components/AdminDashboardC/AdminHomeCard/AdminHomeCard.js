import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AdminHomeCard.module.css'


export default function AdminHomeCard({updateVenue,setUpdatevenue}) {

    function handleUpdate(){
        setUpdatevenue(true)
    }

    return (
        <div className={styles.adminHomeCardWrapper}>
            <img src='5starvenue.jpg' alt="location" />
            <div className={styles.homeCardVenueDetailsWrapper}>
                <div>
                    <div>&#x1F4CD; London</div>
                    <div> ⭐ 4</div>
                </div>
                <h4>Nice to have you </h4>
                <div>
                    <button>Delete</button>
                    <Link to='/admin/venue/:venueid?'><button onClick={handleUpdate}>Update</button></Link>
                </div>
            </div>

        </div>
    )
}
