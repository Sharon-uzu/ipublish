import React from 'react'
import Header from '../Components/Header';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import hero from '../Assets/hero.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import Services from '../Components/Services';
import Services2 from '../Components/Services2';



const Home = () => {
  return (
    <div>
        <Header/>

        <div className='form-section'>
          <form className='search-form'>
            <div>
              <CiSearch  className='icon'/>
              <input type="search" name="" id="" placeholder='Search published names, missing person, stolen car'/>
              <IoIosArrowDown className='icon'/>
            </div>

            <button type="submit">Search</button>

          </form>



          <div className='hero'>

            <div className='h-l'>
              <h2>You can seamlessly Publicize and download your change of name certificate.</h2>
              <p>You can also find a missing person and a stolen car.</p>

              <div className="more">
                <button>Get Started</button>
                <span><a href='#services'>Learn More <IoIosArrowRoundForward className='fwd'/></a></span>
              </div>
            </div>

            <div className='h-r'>
              <img src={hero} alt="" />
            </div>

          </div>


        </div>

        <Services/>
        <Services2/>
    </div>
  )
}

export default Home