import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const List = (props) => {
    let navigate = useNavigate();

    return (
        
        <div className="col-md-3 item" onClick={()=>{navigate('/detail/'+props.i)}}>
            <div className='item-cont'>
            <img className='item-img' src={process.env.PUBLIC_URL + props.items.url} alt=''/>
            </div>
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default List;