import React from 'react'
import doctor6 from '../Assets/doctor6.svg';
import doctor1 from '../Assets/doctor1.svg';
import doctor5 from '../Assets/doctor5.svg';
import doctor4 from '../Assets/doctor4.svg';
import doctor3 from '../Assets/doctor3.svg';
import doctor2 from '../Assets/doctor2.svg';
import '../Services1/Services1.css';
const Services1 = () => {
  return (
    <div>
      <div className='service3' id="pricings">
      <h2>OUR SERVICES</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia<br/>
      and Consonantia, there live the blind texts.</p>
    </div>
    <div className='service2'>
    <div>
        <img className='service1' src={doctor6}/>
        <h5>Dog Checkup</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    <div>
        <img className='service1' src={doctor1}/>
        <h5>Dog Dermatology</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    <div>
        <img className='service1' src={doctor5}/>
        <h5>For Strong Teeth</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    </div>
    <div className='service2'>
    <div>
        <img className='service1' src={doctor4}/>
        <h5>Dog FirstAid</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    <div>
        <img className='service1' src={doctor3}/>
        <h5>Dog Dryer</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    <div>
        <img className='service1' src={doctor2}/>
        <h5>Expert Veterinarian</h5>
        <p>Far far away, behind the word mountains,far</p>
        <p>from the countries Vokalia and Consonantia,</p>
        <p>there live the blind texts</p>
    </div>
    </div>
    </div>
  )
}

export default Services1
