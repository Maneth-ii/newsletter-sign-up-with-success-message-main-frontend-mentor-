import React from 'react'
import './success.css'

function Success() {
  return (
    <div className='container'>
      <div className="success">

      </div>

      <h1 className='thanks'>Thanks for subscribing!</h1>
      <p className="msg">
        A confirmation email has been sent to {'email'} Please open it and click the button inside to confirm your subscription.
      </p>

      <div className='dismiss-msg'>
        Dismiss message
      </div>
      
    </div>
  )
}

export default Success