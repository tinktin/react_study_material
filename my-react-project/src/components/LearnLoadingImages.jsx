import React,{useState} from 'react'
import coverImage from '../assets/images/django-cover.jpg'

const LearnLoadingImages = () => {
  return (
    <>
    <h1>Load Images</h1>
    <img src={coverImage} alt="Cover Image" width={500} />
    </>
  )
}

export default LearnLoadingImages