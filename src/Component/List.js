import React from 'react';

const list = (props) => {
    return (
        <div className="col-md-4">
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/img'+props.i+'.webp'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default list;