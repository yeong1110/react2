import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';



const Detail = (props) => {
    let {id} = useParams();
    let [alerts,setAlerts] = useState(true);
    let [num, setNum] = useState(0);
    let inputMount = useRef()
    //유저가 url파라미터에 입력한 정보를 가져옴,작명했던 이름을 그대로 가져와야 정보를 받아올 수 있어(id),인덱싱 대신에 정보를 넣을 수도
    
    useEffect(()=>{
        // console.log("생명주기")
        setTimeout(()=>{
            setAlerts(false);
        },3000)

        //마운트 ,업데이트 둘 다 동시에 실행
    },[])
    useEffect(()=>{
        // isNaN 으로 숫자인지 문자인지 구별하기 위해 쓴 것
        if(isNaN(num) == true){
            alert('숫자를 입력하세요');
        }
    },[num])


    return (
        <div className='container'>
            {
                alerts === true ? null: <div id='pop' className='alert alert-warning d-flex align-itmes-center justify-content-center flex-column'> <button onClick={()=>{setAlerts(true)}} className='btn btn-warning position-absolute pop-btn'>x</button> 멤버십 가입하고 <br />혜택 받으세요! <button className='my_button'>지금바로 회원가입</button> </div> 
            }
            
            <div className='row prd_wrap'>
                <div className='col-md-6 prd_img_detail'>
                    <img src={process.env.PUBLIC_URL + '/img/keyboard_00_0'+props.items[id].id+'.jpg'} alt="" />
                </div>
                <div className='col-md-6 prd_info_detail'>
                    <h4 className='pt-5'>{props.items[id].title}</h4>

                    <p className='pt-3 d-flex justify-content-between'><span className='fw-bold'>color</span>{props.items[id].content}</p>
                    <p className='pt-3 d-flex justify-content-between'><span className='fw-bold'>price</span>{props.items[id].price}원</p>
                    <div className='position-relative d-flex justify-content-between mt-3'>
                    <span>스위치 옵션</span>
                        <div className='select_box '>
                            <select name="switch" id="switch" className='w-40 '>
                                <option value="2">청축</option>
                                <option value="3">적축</option>
                                <option value="4">갈축</option>
                                <option value="5">저소음 적축</option>
                            </select>
                            <span className='select_img'><img src={process.env.PUBLIC_URL + '/img/SelectBoxArrow.png'} alt="" /></span>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-between pt-3'>
                        <span className=''>수량</span>
                        <div>
                            <div>
                                <input ref={inputMount} className='prd_mount' type="text" defaultValue={1} onChange={(e)=>{
                                    setNum(e.target.value)
                                    
                                }}/>
                            <span onClick={()=>{
                            // let inputAmount = document.getElementsByClassName('prd_mount')[0].Value
                            inputMount.current.value = inputMount.current.value -1;
                            
                            }}><img src={process.env.PUBLIC_URL + '/img/p__count_down.jpg'} alt="" /></span>
                            <span onClick={()=>{
                                
                                inputMount.current.value = Number(inputMount.current.value) +1;
                            }}><img src={process.env.PUBLIC_URL + '/img/p__count_up.jpg'} alt="" /></span>
                            </div>

                    
                        </div>
                    </div> 
                    
                    <button className='btn btn-warning mt-3 me-3' size="lg">주문하기</button>
                    <button className='btn btn-outline-warning mt-3'>장바구니</button>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/Detail.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Detail;