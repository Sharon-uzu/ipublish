import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signup'>

        <h2>Sign Up</h2>

        <form className='signup-form'>

            <div>
                <p>Full name</p>
                <input type="text" className='inp'/>
            </div>

            <div>
                <p>Email</p>
                <input type="email" className='inp'/>
            </div>


            <div>
                <p>Password</p>
                <input type="password" className='inp'/>
            </div>


            <div>
                <p>Confirm password</p>
                <input type="password" className='inp'/>
            </div>


            <button type="submit">Sign Up</button>

            <p className='sign-in'><Link to='/signin'>Sign in</Link></p>


        </form>
        
    </div>
  )
}

export default SignUp