import React from 'react';
import '../App'
// import { Button } from './Button';
import './HeroSection.css';
import Video from '../assets/pets.mp4'


function Home() {
    return (
        <div className='hero-container'>
            <video id="video" src={Video} autoPlay loop muted />
            
            <div class="overlay-text">

            <h2>Your pet Awaits</h2>
            <p>What are you waiting for?</p>
            </div>

        </div>

    )
}


export default Home;