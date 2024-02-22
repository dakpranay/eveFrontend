import React from 'react'
import styles from './InquiryPage.module.css'
import InquiryCard from './InquiryCard/InquiryCard'

export default function InquiryPage() {
    return (
        <div className={styles.inquiryPageWrapper}>
            <div>
                <p>Requests</p>
                <InquiryCard />
                <InquiryCard />
                <InquiryCard />
            </div>
        </div>
    )
}
