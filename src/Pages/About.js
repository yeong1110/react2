import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            회사정보
            <Link to='/about/member'>멤버</Link>
            <Link to='/about/location'>지도</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default About;