import React, { useState } from 'react'

function Header({ query, setQuery, country, setCountry }) {
    
    const [formQuery, setFormQuery] = useState('')
    
    

    const handleSubmit = (e) =>{
      e.preventDefault();
      setQuery(formQuery)


      setFormQuery('')
    }



  return (
    <>
      <h5 className="myHeaderTitle">Browse News</h5>
     

      <form className="mySearchForm" onSubmit={ handleSubmit } >
      
      <select id="mySearchCountry" value={ country } onChange={ e => setCountry(e.target.value) } >
        <option value="" >None</option>
        <option value="France" >France</option>
        <option value="China" >China</option>
        <option value="Japan" >Japan</option>
        <option value="UK" >UK</option>
      </select>



      <input id="mySearchInput" type="text" value={ formQuery } onChange={ e => setFormQuery(e.target.value) } placeholder="search" />
      <button type="submit" className="mySearchBtn"><i className="material-icons">search</i></button>

      </form>
    </>
  )
}

export default Header
