import { useState} from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer-bac'>
   <div className='socials'>
     <div className='social-media'>
      <a href='https://www.facebook.com/fidelea.rever/' target='_blank' rel='noopener noreferrer'><i style={{cursor: 'pointer'}} class="fab fa-facebook"></i><span>facebook</span></a>
     </div>
     <div className='social-media'>
     <a href='https://www.instagram.com/aasou_u/' target='_blank' rel='noopener noreferrer'><i style={{cursor: 'pointer'}}  class="fab fa-instagram"></i><span>instagram</span></a>
       </div>
       <div className='social-media'>
       <a href='https://www.linkedin.com/in/abdeslam-boulgou-811aa518a/' target='_blank' rel='noopener noreferrer'> <i style={{cursor: 'pointer'}}  class="fab fa-linkedin"></i><span>linkedin</span></a>
       
       </div>
       <div className='social-media'>
       <a href='https://github.com/Abdeslamboulgou' target='_blank' rel='noopener noreferrer'><i style={{cursor: 'pointer'}} class="fab fa-github"></i><span>github</span></a>
       
       </div>
   </div>
   <p className='createur'>© Created BY Mr.Abdeslam BOULGOU || All Rights Reserved</p>
   </div>
  );
 
}

export default Footer