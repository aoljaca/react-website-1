import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video autoPlay muted loop controls>
                <source src="https://vod-progressive.akamaized.net/exp=1621606007~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448071.mp4~hmac=1df0c0890554a24b62c5fc65e76f0d0fbcc8d4ed2e3be9a7381aedf97249e6b7/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448071.mp4?filename=Waves+-+70796.mp4" type="video/mp4" />
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
