import React from 'react';
import '../App'
// import { Button } from './Button';
import '/Users/kareemmagdy/Desktop/adopt-a-pet/client/src/components/HeroSection.css';
import Video from '/Users/kareemmagdy/Desktop/adopt-a-pet/client/src/assets/pets.mp4'


function Home() {
    return (
        <div className='hero-container'>
            <video src={Video} autoPlay loop muted />
            <h1>Your pet Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                {/* <Button className="btns" buttonStyle='btn--outline'
               buttonSize='btn--large'
               >
                   GET STARTED
               </Button>
               <Button className="btns" buttonStyle='btn--primary'
               buttonSize='btn--large'
               >
                   GET STARTED
               </Button> */}
            </div>
        </div>

    )
}


export default Home;