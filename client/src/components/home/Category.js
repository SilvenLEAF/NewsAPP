import React from 'react'

function Category({ setCategory }) {
  return (
    <>
      <div onClick={ ()=>{ setCategory('general') } } >General</div> 
      <div onClick={ ()=>{ setCategory('science') } } >Science</div> 
      <div onClick={ ()=>{ setCategory('health') } } >Health</div> 
      <div onClick={ ()=>{ setCategory('entertainment') } } >Entertainment</div> 
    </>
  )
}

export default Category
