import React, { useContext } from 'react'
import { Context } from '../App'

const Service = () => {
  const data = useContext(Context)
  return (
    <>
    <div className='service' style={{background: data.color, color: data.changeColor()}}>
    <h1>Our Service Will be available in future</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores? </p>
    </div>
    </>
  )
}

export default Service