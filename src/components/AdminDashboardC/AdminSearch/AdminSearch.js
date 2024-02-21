import React from 'react'
import styles from './AdminSearch.module.css'

export default function AdminSearch() {
    return (
        <div className={styles.adminSearchWrapper}>
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
    )
}
