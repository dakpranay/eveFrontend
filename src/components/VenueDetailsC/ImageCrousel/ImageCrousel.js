import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './ImageCrousel.module.css'

export default function ImageCrousel() {
  return (
    <Carousel showArrows={true} showThumbs={false} autoPlay interval={5000} infiniteLoop showStatus={false}> 
        <div className={styles.imageWrapper}>
          <img src="../delhi.jpg"  alt='nice'/>
        </div>
        
        <div className={styles.imageWrapper}>
          <img src="../5starvenue.jpg" alt='nice' />
        </div>
      </Carousel>
  )
}
