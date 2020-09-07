import '../../styles/NewsPlate.scss'

import React from 'react'
import moment from 'moment'

function NewsPlate({ item }) {
  return (
    <div className="myNewsPlate">

      <div className="myNewsImage" style={{background: `url(${ item.urlToImage }) center/cover` }} ></div>
      <div>
        
        <h6>
            { moment(item.publishedAt).calendar() }          
        </h6>
        <h5 className="myNewsTitle"> { item && item.title && item.title} </h5>
        <p>
          { item && item.description && (
            item.description.length > 125 ? item.description.slice(0, 125) + '. . .' : item.description
          ) }
        </p>



      </div>
    </div>
  )
}

export default NewsPlate
