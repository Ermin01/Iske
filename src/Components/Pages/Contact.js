import React from 'react';
import '../CSS/Contact.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <>

      <div className='box-naslov-concat'>
        <div className='ismarje-glrup'>
        <h1>Contact us</h1>
        <h3>Start the conversation to established good relationship and business.</h3>
        </div>
      </div>


  <div className='box-concat'>
    <div className='box-gl'>
    <i class='fas fa-map-marker-alt'></i>
      <h2>Head Office</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
    <div className='box-gl'>
    <i class="fa fa-phone"></i>
        <h2>Let's Talk</h2>
      <p>Phone : +6221.2002.2012</p>
    </div>
    <div className='box-gl'>
    <i class="fa fa-envelope"></i>
      <h2>Email us</h2>
      <p>iske@gmail.com</p>
    </div>
  </div>













    <div className='contact-container'>
      <div className='box-left'>
        <h5>GET IN TOUCH</h5>
        <h1>Seamless Communication, Global Impact.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <hr />
        <h3>Follow our social media</h3>
        <div className='box-icon-concat'>
                <h4>Follow Me</h4>
                <li><i class='fab fa-instagram'></i></li>
                <li><i class="fab fa-twitch"></i></li>
                <li><i class='fab fa-steam'></i></li>
                <li><i class='fab fa-youtube'></i></li> 
                {/* https://www.youtube.com/@magiskee */}
        </div>
      </div>
      <div className='right-con'>
        <form>
          <h1>Send us a message</h1>
          <div className='input-group'>
            <div className='input-field'>
              <label htmlFor='name'>Ime</label>
              <input id='name' type='text' placeholder='Ime' required />
            </div>
            <div className='input-field'>
              <label htmlFor='lastname'>Prezime</label>
              <input id='lastname' type='text' placeholder='Prezime' required />
            </div>
          </div>
          <div className='input-group'>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input id='email' type='email' placeholder='Email' required />
            </div>
            <div className='input-field'>
              <label htmlFor='phone'>Telefon</label>
              <input id='phone' type='tel' placeholder='Telefon' required />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='predmet'>Predmet</label>
            <input id='predmet' type='text' placeholder='Predmet' required />
          </div>
          <div className='input-field'>
            <label htmlFor='message'>Poruka</label>
            <textarea id='message' placeholder='Poruka' rows='5' required></textarea>
          </div>
          <button className='btne' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
