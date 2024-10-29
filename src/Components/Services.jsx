import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import s1 from '../Assets/s1.png';
import s2 from '../Assets/s2.png';
import s3 from '../Assets/s3.png';



const Services = () => {
  return (
    <div className='services' id='services'>

        <h2>Our Services</h2>
        <h3>Publish name, Correct name, Correct DOB, Find a stolen car, Find a missing person...</h3>


        <div className='cards'>
            
            <div className='card'>

                <img src={s1} alt="" />
                <div>
                    <p>Publish a name, correction of names and correction of DOB </p>
                </div>

            </div>

            <div className='card'>
                <img src={s2} alt="" />
                <div>
                    <p>You can find and track a stolen car</p>
                </div>
                
            </div>

            <div className='card'>
                <img src={s3} alt="" />

                <div>
                    <p>You can search for a missing person</p>
                </div>
                
            </div>


        </div>

        <p className='see-more'><a href="#services2">See more <IoIosArrowRoundForward className='fwd'/></a></p>
        
    </div>
  )
}

export default Services