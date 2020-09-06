import React from 'react'

function Category({ category, setCategory }) {
  return (
    <>
      <div onClick={ ()=>{ setCategory('') } } >All</div> 
      <div onClick={ ()=>{ setCategory('technology') } } >Technology</div> 
      <div onClick={ ()=>{ setCategory('science') } } >Science</div> 
      <div onClick={ ()=>{ setCategory('health') } } >Health</div> 
      <div onClick={ ()=>{ setCategory('sports') } } >Sports</div> 
      <div onClick={ ()=>{ setCategory('entertainment') } } >Entertainment</div> 
      <div onClick={ ()=>{ setCategory('business') } } >Business</div> 
    </>
  )
}

export default Category
