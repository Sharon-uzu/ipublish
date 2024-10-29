import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signup'>

        <h2>Sign into your account</h2>

        <form className='signup-form'>

            <div>
                <p>Email Address</p>
                <input type="email" className='inp'/>
            </div>


            <div>
                <p>Password</p>
                <input type="password" className='inp'/>
            </div>

            <div className='rem'>

                <div>
                    <input type="checkbox" name="" id="" />
                    <span>Remember me</span>

                </div>

                <div>
                    <p>Forget password?</p>
                </div>

            </div>


            <button type="submit">Sign In</button>


            <p className='dnt'>Don’t have an account? <Link to='/signup'>Create an account</Link></p>


        </form>
        
    </div>
  )
}

export default SignIn