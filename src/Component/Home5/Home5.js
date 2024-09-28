import React from 'react'
import dog6 from '../Assets/dog6.webp'
import dog7 from '../Assets/dog7.webp'
import dog8 from '../Assets/dog8.webp'
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import '../Home5/Home5.css';
const Home5 = () => {
  return (
    <div className='home63'  id="action/3.1" >
      <div className='home58'>
        <h4>OUR TRAINERS</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and</p>
        <p>Consonantia, there live the blind texts.</p>
      </div>
      <div className='home61'>
   <div>
    <img className='home55' src={dog6}/>
    <h5>Jessica White</h5>
    <p>Far far away, behind the word mountains,<br/>
    far from the countries Vokalia and<br/>
    Consonantia, there live the blind texts.
    </p>
    <div>
    <FaSquareTwitter />
    <FaInstagram />
    <BiLogoFacebookSquare />
    </div>
    
   </div>
 
   <div>
    <img className='home55' src={dog7}/>
    <h5>Valerie Elash</h5>
    <p>Far far away, behind the word mountains,<br/>
    far from the countries Vokalia and<br/>
    Consonantia, there live the blind texts.
    </p>
    <div>
    <FaSquareTwitter />
    <FaInstagram />
    <BiLogoFacebookSquare />
    </div>
    
   </div>
   
   <div>
    <img className='home55' src={dog8}/>
    <h5>Alicia Jones</h5>
    <p>Far far away, behind the word mountains,<br/>
    far from the countries Vokalia and<br/>
    Consonantia, there live the blind texts.
    </p>
    <div>
    <FaSquareTwitter />
    <FaInstagram />
    <BiLogoFacebookSquare />
    </div>
    
   </div>
</div>
    </div>
  )
}

export default Home5
