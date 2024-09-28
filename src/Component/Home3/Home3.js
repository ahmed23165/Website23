import React from 'react'
import Button from 'react-bootstrap/Button';
import dog4 from '../Assets/dog4.webp';
import '../Home3/Home3.css';
const Home3 = () => {
  return (
     
     <div className='home31'>
     <div className='home34'>
      <h5>Beautiful</h5>
      <p>Far far away, behind the word mountains, Separated they
          <br/>live in Bookmarksgrove right at the coast of the Semantics,<br/>
          a large language ocean.
      </p>
      <Button variant="primary">Read More</Button>
     </div>
     <div  className='home33'>
      <img src={dog4}/>
     </div>
     </div>
  
  )
}

export default Home3
