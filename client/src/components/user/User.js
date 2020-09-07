import M from 'materialize-css'

import React, { useEffect } from 'react'

function User() {
  useEffect(()=>{
    M.AutoInit();
  }, [])






  return (
    <div className="container">
      <h3>User Profile</h3>
    </div>
  )
}

export default User
