import React from 'react'
import dog3 from '../Assets/dog3.webp';
import dog4 from '../Assets/dog4.webp';
import dog2 from '../Assets/dog2.webp';
import dogs7 from '../Assets/dogs7.webp';
import dogs8 from '../Assets/dogs8.webp';
import dogs9 from '../Assets/dogs9.webp';
import '../Gallery1/Gallery1.css';
const Gallery1 = () => {
  return (
    <div className='gallery99'>
        <div className='gallery2' id="action/3.5">
      <h2>PHOTO GALLERY</h2>
      </div>
      <div className='gallery45'>
      <div className='gallery1' >
        <img className='gallery' src={dog3}/>
        
        <img  className='gallery'   src={dog4}/>
        
        <img   className='gallery' src={dog2}/>
        
        <img  className='gallery'  src={dogs7}/>
      </div>
      <div className='gallery22' >
        <img className='gallery' src={dogs8}/>
        
        <img  className='gallery'   src={dogs9}/>
        
        <img   className='gallery' src={dog3}/>
        
        <img  className='gallery'  src={dog4}/>
      </div>
      <div   className='gallery23'>
        <img className='gallery' src={dog2}/>
        
        <img  className='gallery'   src={dogs7}/>
        
        <img   className='gallery' src={dogs8}/>
        
        <img  className='gallery'  src={dogs9}/>
      </div>
      </div>
    </div>
  )
}

export default Gallery1
