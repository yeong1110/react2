import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Community = () => {
    return (
        <div className='commu cont'>
            <div className='d-flex container'>
            <div className='tab d-flex container flex-column col-2'>
                <h4>COMMUNITY</h4>
                <Link className='p-3' to='/community/info'>공지사항</Link>
                <Link className='p-3' to='/community/event'>이벤트</Link>
            </div>
            <div className='company_cont col-10'>
            {/* <div className='about_bg'>
                <img className='scale' src={process.env.PUBLIC_URL + '/img/service.jpg'} alt="" />
            </div> */}
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Community;