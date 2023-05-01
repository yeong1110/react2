import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className='company cont'>
            <div className='d-flex container'>
            <div className='tab d-flex container flex-column col-2'>
                <h4>About</h4>
                <Link className='p-3' to='/about/member'>이념</Link>
                <Link className='p-3' to='/about/location'>지도</Link>
            </div>
            <div className='company_cont col-10'>
            <h2>LEOPOLD의</h2>
            <h2>LEOPOLD만의</h2>
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default About;