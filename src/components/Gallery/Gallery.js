import React from 'react'
import Card from './Card'
import GalleryData from './GalleryData'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
      <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
              return <Card images={value.img} title={value.title} />
            })}
        </div>
      </section>
    </>
  )
}

export default Gallery
