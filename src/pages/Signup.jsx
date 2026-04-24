import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Signup Page</h1>
      {/* <button onClick={() => navigate('/chackout')}>
        Checkout
      </button>
      <button onClick={() => navigate('/card')}>
        Card
      </button> */}




<Outlet />

    </div>
  )
}

export default Signup
