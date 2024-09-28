import React from 'react'
import Button from 'react-bootstrap/Button';
import dog2 from '../Assets/dog2.webp';
import '../Home1/Home1.css';
const Home1 = () => {
  return (
    <div className='home12'>
      <div  className='home81' >
      <h1>WELCOME TO DOGGER PET CARE</h1>
       <p>Far far away, behind the word mountains, far from the countries Vokalia
        <br/>
        and Consonantia, there live the blind texts.

       </p>
       </div>
       <div className='home11'>
       <div className='home14'>
        <h5>Love & Care</h5>
        <p>Far far away, behind the word mountains, Separated they
            <br/>live in Bookmarksgrove right at the coast of the Semantics,<br/>
            a large language ocean.
        </p>
        <Button variant="primary">Read More</Button>
       </div>
       <div  className='home13'>
        <img src={dog2}/>
       </div>
       </div>
    </div>
  )
}

export default Home1;
