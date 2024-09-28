import React from 'react'
import dog3 from '../Assets/dog3.webp'
import '../Faq/Faq1.css';
const Faq1 = () => {
  return (
    <div>
        <div className='faq24'  id="action/3.3">
      <h4>FREQUENTLY ASK QUESTIONS</h4>
      <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
      <p>and Consonantia, there live the blind texts.</p>
    </div>
    <div  className='faq23'>
    <div>
      <h5>Should I stop letting my dog sleep with me <br/>at night?</h5>
      <p>Far far away, behind the word mountains, far from
        <br/>the countries Vokalia and Consonantia, there live the<br/>
        blind texts. Separated they live in Bookmarksgrove<br/>right at the coast of the Semantics, a large language<br/>
        ocean.</p>
        <br/>
        <p>Is it okay to dress up your dog?</p>
        <p>Why do dogs like belly rubs so much?</p>
        <p>Is a warm dry nose a sign of illness in dogs?</p>

    </div>
    <div>
        <img className='faq1' src={dog3}/>
    </div>
    </div>
    </div>
  )
}

export default Faq1
