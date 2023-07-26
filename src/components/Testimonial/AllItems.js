import React from "react"
import Card from "./Card"
import TData from "./TData"
import "./Testimonial.css"

const AllItems = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid1'>
          {TData.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllItems