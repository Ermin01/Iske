import React, { useState } from 'react';
import '../CSS/Services.css'
import pitanjaodgovor from '../Data/Faq';

import prva from '../Slike/1.png'
import druga from '../Slike/2.png'
import tri from '../Slike/3.png'
import cetri from '../Slike/awp.png';
import pet from '../Slike/smoke.png'
import Footer from './Footer'
const Services = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
        <div className='serivces-text'>
          <div className='box-providni'>
            <h1>SERVICES</h1>
            <p className='paragraf-serivces'>Where Dreams Code Reality: gamequ's Dynamic Game Development</p>
            </div>
       </div>
       {/* https://steamcommunity.com/id/Ismar24 */}
       <div className='box-sredina-services'>
            <p className='text-shadow'>Choose The Package</p>
            <h2 className='zom-text'>Elevate Your Play with gamequ's Innovative Game Development.</h2>
          </div>
       <div className='box-services'>
        <div className='box-unutar-serivices'>
            <img src={prva} alt='IskeH' className='img-serivces'/>
            <h3 className='sredina-services'>Getting the basics out of the way</h3>
                {/* <i class='fas fa-gamepad'></i> IGRICE icona */}
                <div className='jedan-red'>
                <i class='fas fa-gamepad'></i> <p className='shadow-text'>1 Session 1 hour</p>
                </div>
                <div className='box-price-sredina'>
                <h4>$5</h4> <button className='btn-serivces'><a href='https://steamcommunity.com/id/Ismar24'>LET GO</a></button>
                </div>
        </div>
        <div className='box-unutar-serivices'>
        <img src={druga} alt='IskeH' className='img-serivces'/>
        <h3 className='sredina-services'>Aim mechanics</h3>
                {/* <i class='fas fa-gamepad'></i> IGRICE icona */}
                <div className='jedan-red'>
                <i class='fas fa-gamepad'></i> <p className='shadow-text'>3 Session 3 hour</p>
                </div>
                <div className='box-price-sredina'>
                <h4>$7</h4> <button className='btn-serivces'><a href='https://steamcommunity.com/id/Ismar24'>LET GO</a></button>
                </div>
        </div>
        <div className='box-unutar-serivices'>
         <img src={tri} alt='IskeH' className='img-serivces'/>
         <h3 className='sredina-services'>Finding the perfect team for you</h3>
            <div className='jedan-red'>
            <i class='fas fa-gamepad'></i> <p className='shadow-text'>1 Session 1 hour</p>
            </div>
                {/* <i class='fas fa-gamepad'></i> IGRICE icona */}
                <div className='box-price-sredina'>
                <h4>$2</h4> <button className='btn-serivces'><a href='https://steamcommunity.com/id/Ismar24'>LET GO</a></button>
                </div>
        </div>
        <div className='box-unutar-serivices'>
        <img src={cetri} alt='IskeH' className='img-serivces'/>
        <h3 className='sredina-services'>CS2 Demo Review</h3>
            <div className='jedan-red'>
            <i class='fas fa-gamepad'></i> <p className='shadow-text'>1 Session 1 hour</p>
            </div>
                {/* <i class='fas fa-gamepad'></i> IGRICE icona */}
                <div className='box-price-sredina'>
                <h4>$10</h4> <button className='btn-serivces'><a href='https://steamcommunity.com/id/Ismar24'>LET GO</a></button>
                </div>
        </div>
        <div className='box-unutar-serivices'>
         <img src={pet} alt='IskeH' className='img-serivces'/>
         <h3 className='sredina-services'>Full time coach</h3>
            <div className='jedan-red'>
            <i class='fas fa-gamepad'></i> <p className='shadow-text'>1 Session 1 hour</p>
            </div>
                <div className='box-price-sredina'>
                <h4>$20</h4> <button className='btn-serivces'><a href='https://steamcommunity.com/id/Ismar24'>LET GO</a></button>
                </div>
        </div>
       </div>

     
          {/* <h5>WHY CHOSSE US</h5>
          <h2>Elevate Your Play with gamequ's Innovative Game Development</h2>
          <p>Sodales neque odio fames molestie porttitor turpis. Ultricies eros sollicitudin dictumst vestibulum natoque netus vitae mattis facilisi phasellus. Ad ac suspendisse cursus hac suscipit lacinia et senectus.</p>
          <img src={prva} alt='IskeH' className='slika-right'/> */}
    <div className='box-serivs-left'>
      <div className='box-unutar-serivis'>
        <img src={prva} alt='IskeH' className='iske-serivs'/>
        <div className='text-serivs-box'>
        <h5 className='show-text-boja'>Why Choose Us</h5>
        <h2>Elevate Your Play with gamequ's Innovative Game Development</h2>
        <p>Sodales neque odio fames molestie porttitor turpis. Ultricies eros sollicitudin dictumst vestibulum natoque netus vitae mattis facilisi phasellus. Ad ac suspendisse cursus hac suscipit lacinia et senectus.</p>
        <hr className='line-smanji'></hr>
        <div className='boxx-lista-servis'>
  <ul>
      <li className='list-item'>
        <i className="fa fa-gamepad"></i>
        <div className='content'>
          <p>Innovative Game Development</p>
          <p>Metus lobortis feugiat ullamcorper et suspendisse bibendum urna curae augue vel egestas</p>
        </div>
      </li>
      <li className='list-item'>
        <i className="fas fa-laptop"></i>
        <div className='content'>
          <p>Innovative Game Development</p>
          <p>Metus lobortis feugiat ullamcorper et suspendisse bibendum urna curae augue vel egestas</p>
        </div>
      </li>
      <li className='list-item'>
        <i className="fas fa-laptop"></i>
        <div className='content'>
          <p>Innovative Game Development</p>
          <p>Metus lobortis feugiat ullamcorper et suspendisse bibendum urna curae augue vel egestas</p>
        </div>
      </li>
  </ul>
    </div>
    </div>
    </div>
    </div>



  <div className='faq-section'>
      <h2>FAQ</h2>
      {pitanjaodgovor.map((item, index) => (
        <div className='faq-item' key={index} onClick={() => toggleFAQ(index)}>
          <div className='faq-header'>
            <h3 className='faq-question'>{item.Pitanje}</h3>
            <span className={`faq-arrow ${activeIndex === index ? 'open' : ''}`}></span>
          </div>
          {activeIndex === index && <p className='faq-answer'>{item.Odgovor}</p>}
        </div>
      ))}
          </div>




  <div className='traka-follow-me-serivces'>
    <div className='line-ravna'>
    <h1 className='tekst-smanji-he1'>Follow me for pro-level CS
    tactics, exclusive gameplay breakdowns, and epic clutch moments! Step up your game and let's conquer the leaderboard together!</h1>
    <ul>
    <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a></li>
    <li><i class='fab fa-steam'></i></li>
    <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i class='fab fa-youtube'></i></a></li> 
    <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitch"></i></a></li>

    </ul>
    </div>
  </div>



      <Footer />

    
    </>
  )
}

export default Services