import '../../styles/FooterNav.scss'

import React from 'react'
import { Link } from 'react-router-dom'







function FooterNav() {
  return (
    <div className="container">

      <Link to="/">
        <div>
          <div className="myFooterIcons fa fa-home"></div>
          <div className="myFooterNameTag">
            Home
          </div>
        </div>
      </Link>
    


      <Link to="/">
        <div>
          <div className="myFooterIcons fa fa-user"></div>
          <div className="myFooterNameTag">
            User
          </div>
        </div>
      </Link>



      <Link to="/">
        <div>
          <div className="myFooterIcons fa fa-bookmark"></div>
          <div className="myFooterNameTag">
            Bookmark
          </div>
        </div>
      </Link>




      <Link to="/">
        <div>
          <div className="myFooterIcons fa fa-list"></div>
          <div className="myFooterNameTag">
            Menu
          </div>
        </div>
      </Link>



    </div>
  )
}

export default FooterNav
