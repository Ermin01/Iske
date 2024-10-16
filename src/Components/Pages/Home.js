import React, { useState, useEffect, useCallback } from 'react';
import '../CSS/Home.css'

import iske from '../Slike/Iske.jpg'
import testimonials from '../Data/testimonialsData'; // Import testimonials data
import videoiske from '../Video/Download.mp4'
import Footer from './Footer';


const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      if (draggedX > 50) {
        prevSlide();
      } else if (draggedX < -50) {
        nextSlide();
      }
      setIsDragging(false);
      setDraggedX(0); // Reset draggedX
    }
  }, [isDragging, draggedX]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      setDraggedX(e.clientX - startX);
    }
  }, [isDragging, startX]);

  useEffect(() => {
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mousedown', handleMouseDown);
    sliderContainer.addEventListener('mouseup', handleMouseUp);
    sliderContainer.addEventListener('mouseleave', handleMouseUp);
    sliderContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      sliderContainer.removeEventListener('mousedown', handleMouseDown);
      sliderContainer.removeEventListener('mouseup', handleMouseUp);
      sliderContainer.removeEventListener('mouseleave', handleMouseUp);
      sliderContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, handleMouseUp]); // Only depend on the callback functions




  return (
  
    <>
        <div className='Naslovna-pic'>
          <div className='box-nas-novi'>
              <span className='box-spanerbn'>Hi 🖐 I’m Iske</span>
              <h1 className='sredina-hom'>Iske</h1>
              <h2 className='sredina-homdv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <div className='btn-nas'>
                <button  className='btn'> <a href='Contact'>Send me Message</a> <i class="fa fa-arrow-right"></i></button>
              </div>
              <div className='box-icon-home'>
                <h4 className='sredi-h4'>Follow Me</h4>
                <li><i class='fab fa-instagram'></i></li>
                <li><i class="fab fa-twitch"></i></li>
                <li><i class='fab fa-steam'></i></li>
                <li><i class='fab fa-youtube'></i></li> 
                {/* https://www.youtube.com/@magiskee */}
              </div>
          </div>
        </div>

      

      <div className='box-nas'>
        <div className='box-nas-t'>
          <img src={iske} alt='Iske' className='iske-img'/>
          <div className='box'>
          <h2 className='t-h2'> About me <strong className='t-b'>Iske</strong> </h2>
          <p className='t-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <p className='t-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing.adipiscing elitconsectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <p className='t-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing.adipiscing elitconsectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='dole'>
          <button className='btn'> <a href='about'>About me</a></button>
        </div>
          </div>
        </div>
      </div>

      <div className='box-min'>
        <h1>Join Our Membership & Community</h1>
        <a 
        href='https://discord.com/channels/1012883442444275722/1019603507503972494' 
        target='_blank' 
        rel='noopener noreferrer'
      >
        Join Membership
      </a>
      </div>
  


      <div className='box-tri'>
        <div className='box-nov-tri'>
          <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</p>
          <h2>Chat with me</h2>
          <i class='far fa-comment-dots'></i>
        </div>
       <div className='box-nov-tri'>
          <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</p>
          <h2>Consultancy
          </h2>
          <i class='fas fa-file-alt'></i>


        </div>
         <div className='box-nov-tri'>
          <p>clLorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</p>
          <h2>Strategy</h2>
          <i class="fas fa-chess-pawn"></i>
        </div>
      </div>


    <div className='video-home'>
    <div className='video-sredi'>
    <video className='video-sredi-btn' muted loop autoPlay>
            <source src={videoiske} type="video/mp4" />
            Vaš pregledač ne podržava video tag.
        </video>
        <div className='video-overlay'>
            <h1 className='text1'> Immersive Adventures Await</h1>
            <h2 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur!</h2>
            <button className='btn'><a href='https://discord.com/channels/1012883442444275722/1019603507503972494' target='_blank' rel='noopener noreferrer'>Send to Message</a></button>
        </div>
    </div>
    </div>




   

      
    <div className='pored'>
    <div className='testimonials-slider'>
      {/* <h2 className='section-title'>Our Most Popular Testimonial Posts</h2> */}

      <div className='slider-container'>
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-box'>
            <div className='testimonial-header'>
              <img src={testimonial.avatar} alt={testimonial.name} className='avatar-hom' />
              <div className='sredina'>
                <h3 className='sredina'>{testimonial.name}</h3>
              </div>
            </div>
            <p className='testimonial-text'>{testimonial.text}</p>
            <div className='rating'>
              {[...Array(5)].map((star, i) => (
                <span key={i} className={i < Math.round(testimonial.rating) ? 'star filled' : 'star'}>
                  &#9733;
                </span>
              ))}
              <span className='rating-value'>{testimonial.rating}</span>
            </div>
          </div>
        ))}
      </div>

      <button className='prev-slide' onClick={prevSlide}>&#10094;</button>
      <button className='next-slide' onClick={nextSlide}>&#10095;</button>
    </div>
    </div> 


    <Footer/>
    </>

  )
}

export default Home