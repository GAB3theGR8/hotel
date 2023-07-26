import React, { useState } from 'react'
import DCard from './DCard'
import Sdata from './SData'
import "./Destinations.css"

const AllItems = () => {
    const [items, setIems] = useState(Sdata)
    return (
        <>
        <section className='gallery desi mtop'>
            <div className='container'>
                <div className='content grid'>
                    {items.map((item) =>{
                            return <DCard key={item.id} item={item}/>
                        })}
                </div>
            </div>
        </section>
        </>
    )
}

export default AllItems
