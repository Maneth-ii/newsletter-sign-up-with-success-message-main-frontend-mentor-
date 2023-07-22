import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Form() {
    const [error , setError] = useState(0);
    const [success , setSuccess] = useState("");

    const handleInput = event => {
        if (!isValidEmail(event.target.value)) {
          setError(1);
          setSuccess('/')
        } else {
            setSuccess('/success')
          setError(0);
        }
      };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


  return (
    <>
        <div className="main-container">
            <div className="form-container">
                <h1 className='title'>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <div className='list'>
                        <div className='bullet'></div>
                        <li className='list-item'>Product discovery and building what matters</li>
                    </div>
                    
                        <div className='list'>
                        <div className='bullet'></div><li className='list-item'> Measuring to ensure updates are a success</li>
                    </div>

                        <div className='list'>
                        <div className='bullet'></div><li className='list-item'>Add much more!</li>
                    </div>
                </ul>

                <div className='input-container'>
                    <div className='labels'>
                        <label className='input-label' htmlFor="email-input">Email address</label>
                        {
                            error?
                            <p className='err-msg'>Valid email required</p>
                            :null
                        }
                    </div>
                    <input className={`email-input-field ${error ? "err-input":null}`} onChange={handleInput} type="email" name="email-input" id="email-input" />
                </div>

                <Link to={success}>
                    <div className='subscribe-btn'>
                        Subscribe to monthly newsletter
                    </div>
                </Link>
            </div>
            <div className="illustration">
            </div>
        </div>
    </>
  )
}

export default Form