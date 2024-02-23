import styles from './searchSection.module.css'

export default function SearchSection() {
    return (
        <div className={styles.image_container}>
            <div className={styles.overlay_text}>
                Find & Book the Best Venue For Every Special Event
            </div>
            <form className={styles.searchWrapper}>
                <div>
                    <select id="eventOccasion" name="eventOccasion"  defaultValue="">
                        <option value="" disabled hidden>Search for</option>
                        <option value="wedding">Wedding</option>
                        <option value="Wedding Reception ">Wedding Reception </option>
                        <option value="Wedding Anniversary ">Wedding Anniversary </option>
                        <option value="Valentine's Day ">Valentine's Day </option>
                        <option value="Ring Ceremony ">Ring Ceremony </option>
                        <option value="Pre Wedding Mehendi Party ">Pre Wedding Mehendi Party </option>
                        <option value="Baby Shower ">Baby Shower </option>
                        <option value="Birthday Party ">Birthday Party </option>
                        <option value="First Birthday Party ">First Birthday Party </option>
                        <option value="Sangeet Ceremony ">Sangeet Ceremony </option>
                        <option value="Bachelor Party ">Bachelor Party </option>
                        <option value="Bridal Shower ">Bridal Shower </option>
                        <option value="Brand Promotion ">Brand Promotion </option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="text"
                        id="cityInput"
                        name="city"
                        placeholder="Enter city"
                        required
                    />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>
        </div>
    )

}