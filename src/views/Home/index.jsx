import React from 'react';
import Tatuador from './Tatuador';
import Cliente from './Cliente';
import Cookies from 'js-cookie';

const Home = () => {
    const cookies = Cookies.get();
    return cookies?.profile === "tatuador" ? (
        <Tatuador />
    ) : (
        <Cliente />
    )
}

export default Home;
