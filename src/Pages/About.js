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
            <div className='position-'>
            <h2>LEOPOLD의 <br />
            LEOPOLD만의</h2>
            </div>
            <div className='about_bg'>
                <img className='scale' src={process.env.PUBLIC_URL + '/img/cherry02.png'} alt="" />
            </div>
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default About;