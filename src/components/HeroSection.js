import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video autoPlay muted loop controls>
                <source src="./videos/video-1.mp4" type="video/mp4" />
            </video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer
                <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default HeroSection
