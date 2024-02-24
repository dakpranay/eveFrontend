import React from 'react'
import styles from './review.module.css'
import ReviewCard from './ReviewCard/ReviewCard'

export default function Review({ venueData }) {
  

    let reviews = venueData.data.reviews

    return (
        <div className={styles.reviewWrapper}>
            <div>
                <p>Reviews</p>
            </div>
            <div>
                <div>
                    <button>1 ⭐</button>
                    <button>2 ⭐</button>
                    <button>3 ⭐</button>
                    <button>4 ⭐</button>
                    <button>5 ⭐</button>
                </div>

                <div>
                    <input type="text" placeholder='Share your thoughts' />
                    <button>Sumit</button>
                </div>

                <div>
                    {reviews.map((review, i) => {
                        return <ReviewCard review={review}/>
                    })}
                    {/* <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/> */}
                </div>
            </div>

        </div>
    )
}
