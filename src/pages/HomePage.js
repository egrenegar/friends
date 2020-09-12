import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home/index';

function HomePage () {
    return(
        <div>
            <Home/>
            <Link to="/Friends">
                enter site
            </Link>
        </div>
    )
}

export default HomePage;