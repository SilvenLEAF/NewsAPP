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
    


      <Link to="/user">
        <div>
          <div className="myFooterIcons fa fa-user"></div>
          <div className="myFooterNameTag">
            User
          </div>
        </div>
      </Link>



      <Link to="/bookmarks">
        <div>
          <div className="myFooterIcons fa fa-bookmark"></div>
          <div className="myFooterNameTag">
            Bookmarks
          </div>
        </div>
      </Link>




      

      <div className="sidenav-trigger" data-target="mobileNav" >
        <div className="myFooterIcons fa fa-list"></div>
        <div className="myFooterNameTag">
          Menu
        </div>
      </div>

  






    </div>
  )
}

export default FooterNav
