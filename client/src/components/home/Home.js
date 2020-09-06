import M from 'materialize-css'

import '../../styles/Home.scss'

import React, { useEffect, useState } from 'react'


import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import VerticalButtons from './VerticalButtons'
import { usePaginatedQuery } from 'react-query'





const getNews = async (category, country, query)=>{
  const newsOptions = {}

  if(category) newsOptions.category = category;
  if(query) newsOptions.query = query;

  switch (country) {
    case 'US':
      newsOptions.country = 'us';
      break;
  
    case 'France':
      newsOptions.country = 'fr';
      break;

    case 'China':
      newsOptions.country = 'cn';
      break;

    case 'Japan':
      newsOptions.country = 'jp';
      break;

    case 'UK':
      newsOptions.country = 'uk';
      break;

    default:
      newsOptions.country = '';
      break;
  }


  const getNewsInfoRes = await fetch('/news', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newsOptions)
  });

  const getNewsInfoData = await getNewsInfoRes.json();
  console.log("GETNEWSINFODATA--------", getNewsInfoData)
  return getNewsInfoData;

  }














function Home() {
  useEffect(()=>{
    M.AutoInit()
  })


  const [category, setCategory] = useState('')
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');



  const { resolvedData, latestData, status } = usePaginatedQuery([category, country, query ], getNews)
  console.log(resolvedData)

  return (
    <div className="container myHomePage">
      <div className="myBackgroundDiv"></div>

      <div id="myHeaderHolder">
        <Header category={ category } setCategory={ setCategory } query={ query } setQuery={ setQuery } country={ country } setCountry={ setCountry } />
      </div>

      <div id="myVerticalButtonsHolder">
        <VerticalButtons/>
      </div>


      <div id="mySliderHolder">
        <Slider resolvedData={ resolvedData} />
      </div>


      <div id="myCategoriesHolder">
        <Category category={ category } setCategory={ setCategory } />
      </div>
    </div>
  )
}

export default Home
