import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Foter.css'
import logo from '../Slike/supak.png'
const Footer = () => {


  return (
    <>
  

        <div className='foterbox'>
            <div className='box-foter-img'>
            <img src={logo} alt='IskeH' className='logo-footer'/>
            <p>Explore the vibrant world of game development with gamequ - <br></br>your ultimate destination for innovative games and industry insights.</p>
            <div className='box-icon-concat'>
                <h4 className='boja-bijela'>Follow Me</h4>
                <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a></li>
                <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitch"></i></a></li>
                <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i class='fab fa-steam'></i></a></li>
                <li><a href="https://www.youtube.com/@magiskee" target="_blank" rel="noopener noreferrer"><i class='fab fa-youtube'></i></a></li> 
                {/* https://www.youtube.com/@magiskee */}
        </div>
            </div>
            <div className='box-foter'>
                    <ul>
                        <li>Support
                            <a href='/Services'>FAQ</a>
                            <a href='/Contact'>Contact us</a>
                        </li>
                        <li>Other Link
                        <a href='#'>Parental Control</a>
                        <a href='#'>Online Services</a>
                        </li>
                        <li>Company
                        <a href='#'>About us</a>
                        <a href='#'>Leadership</a>
                        </li>
                    </ul>
            </div>
        </div>

        <div className='copy-right-iske'>
            <h6 className='boja-bela'>Copyright© 2024 Iske, All rights reserved. Powered by IskeH</h6>
            <ul>
            <li>Term of use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            
            </ul>
        </div>
    </>
  )
}

export default Footer
