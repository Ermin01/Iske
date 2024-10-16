import React, { useState, useEffect } from 'react';
import '../CSS/About.css';
import aboutiske from '../Slike/Iske.jpg';
import aboutleft from '../Slike/naslov.jpg'
import Footer from './Footer';
const About = () => {
  const counters = [
    { label: 'Godine iskustvae', start: 0, end: 6, suffix: '+' },
    { label: 'Pobjede', start: 0, end: 243, suffix: '' },
    { label: 'Utakmica', start: 0, end: 2000, suffix: '+' },
    { label: 'Perfect Products', start: 0, end: 99, suffix: '' }
  ];

  const Counter = ({ start, end, suffix, duration }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let startValue = start;
      const increment = end / (duration / 100); // Adjust increment rate based on duration
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 100);

      return () => clearInterval(interval);
    }, [start, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <>      
    <div className='box-about-text-glavni '>
      <div className='img-about-gl'>
        <img src={aboutiske} alt='IskeH' className='about-img'/>
        <div className='box-about-m'>
        <h1 className='sredina-about'>About me</h1>
        <p className='paragraf-about'>I’m a passionate CS: GO player with over 6 years of competitive experience. My journey has been marked by constant growth, countless victories, and a love for the game. From perfecting my aim to mastering complex strategies, every match has helped me become the player I am today. I’m always striving to improve and push my limits in the world of esports.
        </p>
        </div>
      </div>
    </div>

    <div className='box-dva'>
      <div className='box-dva-img-text'>
        <img src={aboutleft} alt='IskeH' className='slika-left'/>
        <div className='lista-box'>
        <h1>Why us</h1>
        <p>Choosing the right coach can make all the difference in your CS: GO performance. With years of experience and a strong understanding of the game, I bring flexibility, skill, and confidence to every session. Whether it’s improving your flick shots, mastering clutches, or building a calm and composed mindset, I can help take your game to the next level.        </p>
        <div className='lista-box-dva'>
          <ul>
            <li><i class="fa fa-check-circle"></i> Flexible</li>
            <li><i class="fa fa-check-circle"></i> Flicking  </li>
            <li><i class="fa fa-check-circle"></i> Ability</li>
          </ul>
          <ul>
          <li><i class="fa fa-check-circle"></i> Clutching</li>
          <li><i class="fa fa-check-circle"></i> Confidence</li>
          <li><i class="fa fa-check-circle"></i> Calm</li>
          </ul>
          </div>
        </div>
      </div>
    </div>

   
    <div className='about-sesije'>
  <div className='box-sesije'>
    <div className='box-posebni-about'>
      <h1>Our Value</h1>
      <p className='zoom-about-text'>My vision is to inspire and guide players to unlock their true potential in CS: GO. Whether you’re looking to improve your game sense or nail those clutch moments,<br></br> I am here to provide you with the tools and techniques to succeed. Together, we’ll turn every challenge into an opportunity for growth.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus le</p>
    </div>

    <div className='box-liste-about'>
      <div className='about-box'>
        <i class="fa fa-eye"></i>
        <div className='text-box'>
          <h3>Our Vision</h3>
          <p>Tortor morbi lorem neque ex scelerisque accumsan. Curabitur urna sapien congue aliquam consectetur feugiat pretium.</p>
        </div>
      </div>

      <div className='about-box'>
        <i class="fa fa-gamepad"></i>
        <div className='text-box'>
          <h3>Clutching</h3>
          <p>Tortor morbi lorem neque ex scelerisque accumsan. Curabitur urna sapien congue aliquam consectetur feugiat pretium.</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* 
    <div className='box-back'>
    <div className='box-ab'>
      <h1>ZAŠTO ODABRATI MENE?</h1>
      <h2>Ovo su neke moje statistike</h2>
    </div>
    </div> */}


   

      <div className="about-section">
        {/* <h1>About Us</h1> */}
        <div className="counters">
          {counters.map((counter, index) => (
            <div key={index} className="counter-item">
              <h2 className='text-box-about'>
                <Counter
                  start={counter.start}
                  end={counter.end}
                  suffix={counter.suffix}
                  duration={2000} // Animation duration in milliseconds
                />
              </h2>
              <p className='text-box-about-p'>{counter.label}</p>
              
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
