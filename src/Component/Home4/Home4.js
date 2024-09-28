import React from 'react'
import dog5 from '../Assets/dog5.webp'
import '../Home4/Home4.css';
const Home4 = () => {
  return (
    <div className='home45' id="About">
    <div>
      <h4>ABOUT US</h4>
      <p>Separated they live in Bookmarksgrove right at<br/>
      the coast of the Semantics, a large language<br/>
      ocean.
      </p>
      <p>A small river named Duden flows by their place and<br/>
      supplies it with the necessary regelialia. It is a<br/>
      paradisematic country, in which roasted parts of sentences<br/>
      fly into your mouth
      </p>
      <p>A small river named Duden flows</p>
      <p>It is a paradisematic country</p>
      <p>Roasted parts of sentences fly</p>
    </div>
    <div>
        <img className='home44' src={dog5}/>
    </div>
    </div>
  )
}

export default Home4;