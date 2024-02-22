import React, { useState } from 'react'
import styles from './AdminCreateVImageU.module.css'

export default function AdminCreateVImageU() {
  const [selectedimage,setSelectedImage]=useState([])

  const imageHandleChange=(e)=>{
    console.log(e.target.files)
    if(e.target.files){
      const fileArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
      setSelectedImage((prevImages)=>prevImages.concat(fileArray))
      Array.from(e.target.files).map(
        (file)=>URL.revokeObjectURL(file)
      )
    }
  }

  const renderPhotos=(source)=>{
    return source.map((photo)=>{
      return <img src={photo} key={photo} alt="venue"/>
    })
  }



  return (
    <>
      <div className={styles.imageUploaderWrapper}>
        <input type="file" name="" id="uploadBtn" multiple accept="image/*" onChange={imageHandleChange}/>
        <label htmlFor="uploadBtn"><span>⬆️</span>Upload Photos</label>
      </div>
      {/* <div className={styles.result}></div> */}

      <div className={styles.uploadImageWrapper}>
        {renderPhotos(selectedimage)}
      </div>

    </>
  )
}

