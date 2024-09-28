import React from 'react'
import dog from '../Assets/dog.webp';
import '../Home/Home.css';
const Home = () => {
  return (
    <div className='home1'>
          <div className='home3'>
        <h1>WE CARE FOR
          <br/>YOUR DOG</h1>
        <p>We always try to provide your dog the best <br/>services</p>
      </div>
      <div>
        <img className='home2' src={dog}/>
      </div>
    </div>
  )
}

export default Home
