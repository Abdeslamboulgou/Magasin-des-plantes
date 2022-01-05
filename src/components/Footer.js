import '../styles/Footer.css'
import footerLogo from '../assets/footer-logo.png'


function Footer() {
  return (
    <div className='footer-bac'>
      <div className='socials'>
        <div className='social-media'>
          <a href='https://www.facebook.com/fidelea.rever/' target='_blank' rel='noopener noreferrer'><i style={{ cursor: 'pointer' }} class="fab fa-facebook"></i></a>
        </div>
        <div className='social-media'>
          <a href='https://www.instagram.com/aasou_u/' target='_blank' rel='noopener noreferrer'><i style={{ cursor: 'pointer' }} class="fab fa-instagram"></i></a>
        </div>
        <div className='social-media'>
          <a href='https://www.linkedin.com/in/abdeslam-boulgou-811aa518a/' target='_blank' rel='noopener noreferrer'> <i style={{ cursor: 'pointer' }} class="fab fa-linkedin"></i></a>

        </div>
        <div className='social-media'>
          <a href='https://github.com/Abdeslamboulgou' target='_blank' rel='noopener noreferrer'><i style={{ cursor: 'pointer' }} class="fab fa-github"></i></a>

        </div>
        <div class="social-media">
                <h5>payment method</h5>
                <section>
                    select one of the most common ways to <br/>pay a money for our products.
                </section>
                <br/>
                <div class="footer-logo">
                    <img src={footerLogo} alt="footer logo"/>
                </div>
        </div>
      </div>
      <p className='createur'>© Created BY Mr.Abdeslam BOULGOU || All Rights Reserved</p>
    </div>
  );

}

export default Footer