import React from 'react';

const detail = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={process.env.PUBLIC_URL + '/img/img00.webp'} alt="" />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-5'>상품명</h4>
                    <p>상품설명</p>
                    <p>12000원</p>
                    <button className='btn btn-primary'>주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default detail;