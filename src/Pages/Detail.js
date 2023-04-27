import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



const Detail = (props) => {
    let {id} = useParams();
    let [alerts,setAlerts] = useState(true);
    let [num, setNum] = useState(0);
    //유저가 url파라미터에 입력한 정보를 가져옴,작명했던 이름을 그대로 가져와야 정보를 받아올 수 있어(id),인덱싱 대신에 정보를 넣을 수도
    
    useEffect(()=>{
        console.log("생명주기")
        setTimeout(()=>{
            setAlerts(false);
        },3000)

        //마운트 ,업데이트 둘 다 동시에 실행
    })
    useEffect(()=>{
        // isNaN 으로 숫자인지 문자인지 구별하기 위해 쓴 것
        if(isNaN(num) == true){
            alert('숫자를 입력하세요');
        }
    },[num])


    return (
        <div className='container'>
            {
                alerts === true ? <div id='pop' className='alert alert-warning'>3초후 사라짐</div> : null
            }
            
            <div className='row prd_wrap'>
                <div className='col-md-6 prd_img_detail'>
                    <img src={process.env.PUBLIC_URL + '/img/keyboard_00_0'+props.items[id].id+'.jpg'} alt="" />
                </div>
                <div className='col-md-6 prd_info_detail'>
                    <h4 className='pt-5'>{props.items[id].title}</h4>
                    <p className='pt-3'>{props.items[id].content}</p>
                    <p className='pt-3'>{props.items[id].price}원</p>
                    <p className='pt-3'>수량 <input type="text" onChange={(e)=>{
                        setNum(e.target.value)
                        
                    }}/></p>
                    <button className='btn btn-danger mt-3'>주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;