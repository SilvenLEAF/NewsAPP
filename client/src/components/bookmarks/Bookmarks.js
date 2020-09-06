import M from 'materialize-css'

import React, { useEffect } from 'react'

function Bookmarks() {
  useEffect(()=>{
    M.AutoInit();
  })






  return (
    <div className="container">
      <h3>Bookmarks</h3>
    </div>
  )
}

export default Bookmarks
