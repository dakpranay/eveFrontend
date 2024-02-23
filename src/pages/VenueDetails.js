import styles from '../styles/VenueDetails.module.css'
import VenueDetailsForm from '../components/VenueDetailsC/VenueDetailsForm/VenueDetailsForm'
import VenueDetailsDes from '../components/VenueDetailsC/VenueDetailsDes/VenueDetailsDes'
import Review from '../components/VenueDetailsC/Review/Review'
import ImageCrousel from '../components/VenueDetailsC/ImageCrousel/ImageCrousel'

export default function VenueDetails() {
    return (
        <div className={styles.venueDetialsWrapper}>
            <div className={styles.venueDetialsInnerWrapper}>
                {/* left */}
                <div>
                    {/* image */}
                    <div>
                        <ImageCrousel/>
                    </div>
                    <VenueDetailsDes />
                    <Review />
                </div>




                {/* right */}
                <div>
                    <VenueDetailsForm />
                </div>

            </div>
        </div>
    )
}