import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='logo'>
                <h2>iPublish</h2>
            </div>
            <ul>
                <Link to='/'>
                    <li>Dashboard</li>
                </Link>

                <Link to='/'>
                    <li>Publications</li>
                </Link>

                <Link to='/'>
                    <li>Contact</li>
                </Link>

                <Link to='/signup'>
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
        
    </div>
  )
}

export default Header