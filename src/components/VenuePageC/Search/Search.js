import React from 'react'
import styles from './Search.module.css'
import VenueCard from '../VenueCard/VenueCard'

export default function Search() {
    return (
        <>
            <div className={styles.image_container}>
                <div className={styles.overlay_text}>
                    Top Party & Event Venues
                </div>
                <p>Browse, shortlist and get best prices and packages from venues available to host your event. Take your pick from banquet halls, resorts, hotels, farmhouses and party lawns as per your preferences. Once your venue is booked, let us also help you select vendors like event planner, decorator, caterer, photographer, band, DJ and more.</p>
            </div>
            <div className={styles.searchWrapper}>
                <div>
                    <input
                        type="text"
                        id="cityInput"
                        name="city"
                        placeholder="Enter city"
                    />
                    <input
                        type="text"
                        id="stateInput"
                        name="state"
                        placeholder="Enter state"
                    />
                    <input
                        type="text"
                        id="stateInput"
                        name="venue"
                        placeholder="Seacrching by venue name"
                    />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
            <div className={styles.venueCardWrapper}>
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
                <VenueCard />
            </div>
        </>
    )
}
