import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const dontMove = function(){
    alert('로그인해야 이용할 수 있습니다!');
}

const Customer = () => {
    return (
        <div className='company cont'>
            <div className='d-flex container'>
            <div className='tab d-flex container flex-column col-2'>
                <h4>CUSTOMER</h4>
                <Link className='p-3' onClick={dontMove}>QNA</Link>
                <Link className='p-3' to='/customer/faq'>FAQ</Link>
            </div>
            <div className='company_cont col-10'>
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Customer;