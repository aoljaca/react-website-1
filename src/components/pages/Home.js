import '../../App.css';
import HeroSection from '../HeroSection';

import React from 'react'
import Cards from '../Cards.js';
import Footer from '../Footer';

function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home
