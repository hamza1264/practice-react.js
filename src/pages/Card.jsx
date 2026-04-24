import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {

const navigate = useNavigate()

  return (
    <div>
      <h1>Card Page</h1>
      <button onClick={()=>navigate('/signup')}>
        Back to Signup
      </button>
      
    </div>
  )
}

export default Card
