import React from 'react';
import Acceuil from '../components/Acceuil';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <Acceuil />
            <br />
            <Footer />
        </div>
    );
}

export default Home;