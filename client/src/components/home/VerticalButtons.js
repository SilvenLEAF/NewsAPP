import React from 'react'

function VerticalButtons({ setCategory }) {
  return (
    <>
     <div onClick={ ()=> setCategory('') } >All</div> 
     <div onClick={ ()=> setCategory('technology') } >Technoogy</div> 
     <div onClick={ ()=> setCategory('sports') } >Sports</div> 
     <div onClick={ ()=> setCategory('business') } >Business</div> 
    </>
  )
}

export default VerticalButtons
