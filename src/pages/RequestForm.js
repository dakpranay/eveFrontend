import React from 'react'
import styles from '../styles/RequestForm.module.css'

export default function RequestForm() {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.mainFormWrapper}>
        <h1>Get Quotes</h1>
        <p>Get best suited venues for your event</p>
        <p>Compare proposals and quotes from recommended venues. Select and Book the best.</p>
        <form action="">
          <div className={styles.eventSelector}>
            <label htmlFor="eventOccasion">Event/Occasion:<span>*</span></label>
            <select id="eventOccasion" name="eventOccasion" required defaultValue="">
              <option value="" disabled hidden>What type of event you planning for ?</option>
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
            </select>
          </div>

          <div className={styles.formOtherDetails}>
            <div>
              <label htmlFor="city">City:<span>*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                required
              />
              <label htmlFor="expectedGuest">Expected Guest:<span>*</span></label>
              <input
                type="number"
                id="expectedGuest"
                name="sexpectedGuest"
                placeholder="How many guests are you expection?"
                required
              />
              <label htmlFor="eventDate">Your Name:<span>*</span></label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
              />
              <label htmlFor="mobileNumber">Mobile Number:<span>*</span></label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                placeholder="Enter your mobile number"

                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

              />

            </div>
            <div>
              <label htmlFor="state">State:<span>*</span></label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                required
              />
              <label htmlFor="perPersonbudget">Per Person Budget:<span>*</span></label>
              <input
                type="number"
                id="perPersonbudget"
                name="perPersonbudget"
                placeholder="Per person budget"
                required
              />
              <label htmlFor="name">Your Name:<span>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
              <label htmlFor="email">Email Id:<span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              


            </div>
          </div>


          <div className={styles.formButton}>
            <button>Create Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  )
}
