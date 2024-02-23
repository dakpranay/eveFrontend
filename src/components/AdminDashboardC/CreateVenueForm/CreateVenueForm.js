import React from 'react';
import styles from './CreateVenueForm.module.css'

export default function CreateVenueForm({updateVenue}) {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.mainFormWrapper}>
                <h1>Venue Details</h1>
                <form action="">
                    <div className={styles.formOtherDetails}>
                        <div>
                            <label htmlFor="name">Venue Name:<span>*</span></label>
                            <input
                                type="text"
                                placeholder="Venue name"
                                required
                            />

                            <label htmlFor="state">State:<span>*</span></label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Enter your state"
                                required
                            />

                            <label htmlFor="numberOfRooms">Number of rooms:<span>*</span></label>
                            <input
                                type="number"
                                id="numberOfRooms"
                                name="snumberOfRooms"
                                placeholder="Number of rooms"
                                required
                            />

                            <label htmlFor="numberOfHalls">Number of halls:<span>*</span></label>
                            <input
                                type="number"
                                id="numberOfHalls"
                                name="snumberOfHalls"
                                placeholder="Number of halls"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="city">City:<span>*</span></label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter your city"
                                required
                            />

                            <label htmlFor="perPersonbudget">Max Capacity:<span>*</span></label>
                            <input
                                type="number"
                                id="maxCapacity"
                                name="maxCapacity"
                                placeholder="Max capacity"
                                required
                            />

                            <label htmlFor="numberOfGardens">Number of gardens:<span>*</span></label>
                            <input
                                type="number"
                                id="numberOfGardens"
                                name="snumberOfGardens"
                                placeholder="Number of gardens"
                                required
                            />

                            <div className={styles.eventSelector}>
                                <label htmlFor="eventOccasion">Venue type:<span>*</span></label>
                                <select id="eventOccasion" name="eventOccasion" required defaultValue="">
                                    <option value="" disabled hidden>Type of Venue</option>
                                    <option value="garden">garden</option>
                                    <option value="hotel ">hotel </option>
                                    <option value="pool ">pool </option>
                                    <option value="hall">hall</option>
                                    <option value="confress hall ">confress hall </option>
                                    <option value="other ">other</option>
                                </select>
                            </div>




                        </div>
                    </div>

                    <div className={styles.addressWrapper}>
                            <label htmlFor='address'>Address</label>
                            <textarea name="" id="" ></textarea>
                            <label htmlFor='address'>Description</label>
                            <textarea name="" id="" ></textarea>
                            <label htmlFor='address'>Refund policy</label>
                            <textarea name="" id="" ></textarea>
                    </div>


                    <div className={styles.formButton}>
                        <button>{updateVenue?"Update":"Create"} Venue</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
