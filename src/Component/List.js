import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = (props) => {
    let navigate = useNavigate();
    return (
        
        <div className="col-md-4" onClick={()=>{navigate('/detail/'+props.i)}}>
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/img0'+props.i+'.webp'} alt=''/>
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default List;