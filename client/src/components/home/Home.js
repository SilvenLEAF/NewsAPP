import '../../styles/Home.scss'

import React from 'react'

import Header from './Header'
import Category from './Category'
import VerticalButtons from './VerticalButtons'




function Home() {
  return (
    <div className="container myHomePage">
      <div className="myBackgroundDiv"></div>

      <div id="myHeaderHolder">
        <Header/>
      </div>

      <div id="myVerticalButtonsHolder">
        <VerticalButtons/>
      </div>


      <div id="myCategoriesHolder">
        <Category/>
      </div>
    </div>
  )
}

export default Home
