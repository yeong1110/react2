import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    let {id} = useParams();
    //유저가 url파라미터에 입력한 정보를 가져옴,작명했던 이름을 그대로 가져와야 정보를 받아올 수 있어(id),인덱싱 대신에 정보를 넣을 수도
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={process.env.PUBLIC_URL + '/img/img0'+props.items[id].id+'.webp'} alt="" />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-5'>{props.items[id].title}</h4>
                    <p>{props.items[id].content}</p>
                    <p>{props.items[id].price}원</p>
                    <button className='btn btn-primary'>주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;