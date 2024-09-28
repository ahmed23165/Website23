import React from 'react'
import { TiTick } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import '../Home6/Home6.css';
const Home6 = () => {
  return (
    <div>
        <div className='san5' id="action/3.2">
      <h4>PRICING TABLE</h4>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and<br/>
      Consonantia, there live the blind texts.
      </p>
      </div>
      <div className='san4'>
      <div className='san1'>
        <h6>BASIC</h6>
        <h4>$47 /year</h4>
        <p><TiTick />   Officia quaerat eaque neque</p>
        <p><TiTick />   Possimus aut consequuntur incidunt</p>
        <p><TiTick />   Lorem ipsum dolor sit amet </p>
        <p><TiTick />   Consectetur adipisicing elit</p>
        <p><TiTick />   Dolorum esse odio quas architecto sint </p>
         <br/>
         <Button variant="secondary">Primary</Button>
      </div>
     
      <div className='san2'>
        <h6>PREMIUM</h6>
        <h4>$250 /year</h4>
        <p><TiTick />   Officia quaerat eaque neque</p>
        <p><TiTick />   Possimus aut consequuntur incidunt</p>
        <p><TiTick />   Lorem ipsum dolor sit amet </p>
        <p><TiTick />   Consectetur adipisicing elit</p>
        <p><TiTick />   Dolorum esse odio quas architecto sint </p>
         <br/>
         <Button variant="success">Primary</Button>
      </div>
      <div className='san3'>
        <h6>PROFESSIONAL</h6>
        <h4>$850 /year</h4>
        <p><TiTick />   Officia quaerat eaque neque</p>
        <p><TiTick />   Possimus aut consequuntur incidunt</p>
        <p><TiTick />   Lorem ipsum dolor sit amet </p>
        <p><TiTick />   Consectetur adipisicing elit</p>
        <p><TiTick />   Dolorum esse odio quas architecto sint </p>
         <br/>
         <Button variant="secondary">Primary</Button>
      </div>
      </div>
    </div>
  )
}

export default Home6
