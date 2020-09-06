import React, { useState } from 'react'

function Header({ category, setCategory, query, setQuery, country, setCountry }) {
    
    const [formQuery, setFormQuery] = useState('')
    const [formCountry, setFormCountry] = useState('')
    

    const handleSubmit = (e) =>{
      e.preventDefault();

      setQuery(formQuery)
      setCountry(formCountry)


      console.log("CATEGORY------", category)
      console.log("COUNTRY------", country)
      console.log("QUERY------", query)

      setFormQuery('')
    }



  return (
    <>
      <h5 className="myHeaderTitle">Browse News</h5>
     

      <form className="mySearchForm" onSubmit={ handleSubmit } >
      
      <select id="mySearchCountry" value={ formCountry } onChange={ e => setFormCountry(e.target.value) } >
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
