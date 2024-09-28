import React from 'react';
import dog3 from '../Assets/dog3.webp';
import Button from 'react-bootstrap/Button';
import '../Home2/Home2.css';
const Home2 = () => {
  return (
    <div>
        <div  className='home21'>
      <div  className='home23'>
        <img src={dog3}/>
       </div>
       
       <div className='home14'>
        <h5>Fearsome</h5>
        <p>Far far away, behind the word mountains, Separated they
            <br/>live in Bookmarksgrove right at the coast of the Semantics,<br/>
            a large language ocean.
        </p>
        <Button variant="primary">Read More</Button>
       </div>
    </div>
    </div>
  )
}

export default Home2
