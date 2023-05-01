
import { useState, useEffect } from 'react';
import {Navbar, Container, Nav, Form} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'; 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components";
import './App.css';
import img_01 from './MainBanner_2.jpg';
import img_02 from './MainBanner_3.jpg';
import img_03 from './MainBanner_4.jpg';
import img_04 from './MainBanner_5.jpg';
import data from './data.js';
import List from './Component/List.js';
import Detail from './Pages/Detail.js';
import About from './Pages/About.js';
import axios from 'axios';
import CarouselImg from './Component/CarouselImg';
import Community from './Pages/Community.js';
import Table from './Component/Table.js'
import Customer from './Pages/Customer';


let count = 0;

function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();

  // axios.get('http://localhost:3002/post')
  // useEffect(()=>{
  //   axios.get('https://b71c09bc-5252-4df2-8125-4795cbeaf7d8.mock.pstmn.io/list')
  //   .then((result)=>{
  //     const product = result.data
  //     setItems(product)
  //   }).catch(()=>{console.log("통신 실패")})
  // }, [])
  
  return (
    <div className="App">

            <Navbar variant="tabs">

        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <img src={process.env.PUBLIC_URL + '/img/HeadLogo.jpg'} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Keyboard</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>이전</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/community')}}>community</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/customer')}}>customer</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('/about/member')}}>member</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/location')}}>location</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      <Routes>
        <Route path='/' element={
        <>
        {/* <div className='main_banner' style={{backgroundImage:'url('+img_01+')'}}></div> */}
        <Carousel id="MainBanner" touch ={true}>
      <Carousel.Item className ="Main_01" interval={4000}>
        <div className='bg'></div>
        <img
          className="d-block w-100"
          src= {process.env.PUBLIC_URL + '/img/MainBanner_1.png'}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_02' interval={4000}>
      <div className='bg'></div>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img/MainBanner_2.png'}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_03' interval={4000}>
      <div className='bg'></div>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img/MainBanner_3.png'}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_04' interval={4000}>
      <div className='bg'></div>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img/MainBanner_4.png'}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className="container">
          <div className="row">
            <div className='Bestswipe'>
              <h2 className='pt-5'>Best Products</h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
              <div className="item" onClick={()=>{navigate('/detail/2')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[2].url} alt=''/>
                </div>
                <h4>{items[2].title}</h4>
                <p>{items[2].content}</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item" onClick={()=>{navigate('/detail/3')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[3].url} alt=''/>
                </div>
                <h4>{items[3].title}</h4>
                <p>{items[3].content}</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item" onClick={()=>{navigate('/detail/5')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[5].url} alt=''/>
                </div>
                <h4>{items[5].title}</h4>
                <p>{items[5].content}</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item" onClick={()=>{navigate('/detail/6')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[6].url} alt=''/>
                </div>
                <h4>{items[6].title}</h4>
                <p>{items[6].content}</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item" onClick={()=>{navigate('/detail/1')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[0].url} alt=''/>
                </div>
                <h4>{items[0].title}</h4>
                <p>{items[0].content}</p>
              </div>
              </SwiperSlide>
              
            </Swiper>
            </div>
            <div className='introduce pt-5'>
              <h2 className='pb-5'>What's LEOPOLD?</h2>
              <div className='d-flex'>
              <div className='col-lg-4 in_left text-start'>
                  <p>모든 제품이 가지고 있는 블루투스 기능</p>
                  <p>USB TYPE과 BLUETOOTH기능중에 원하는 것을 골라 쓰세요</p>
              </div>
              <div className='col-lg-8 position-relative'>
                <div className='des position-absolute'>
                  <h4 className='text-start'>Find the 
                    <br /> switch that
                    <br /> suits me</h4>
                  <p className='text-start pt-3 text-black-50'>사용자의 성향을 고려한
                    <br />
                    7가지의 스위치로
                    <br />
                    자신에게 맞는 스위치를
                    <br />
                    선택할 수 있습니다
                    </p>
                </div>
                <img className='w-100' src={process.env.PUBLIC_URL + '/img/cherry.png'} alt="" />
              </div>
              </div>
              <div className='d-flex'>
              <div className='col-lg-6 position-relative'>
              <div className='des position-absolute'>
                  <h4 className='text-start'>PBT DoubleShot </h4>
                  <p className='text-start pt-3 text-black-50'>자체 개발한 레오폴드만의 최고급
                    <br />
                    PBT 이중사출 키캡
                    </p>
                </div>
                <img className='w-100' src={process.env.PUBLIC_URL + './img/cherry02.png'} alt="" />
              </div>
              <div className='col-lg-6 in_left'>
                  <p>다양한 키압및 키축</p>
                  <p>당신의 키보드를 커스터마이징할 기회</p>
              </div>
              </div>
              <div className='d-flex justify-content-end position-relative pbt'>
              <div className='des position-absolute'>
                  <h4 className='text-start'>PBT DoubleShot </h4>
                  <p className='text-start pt-3 text-black-50'>레오폴드만의 PBT 이중사출 키캡은
                    <br />
                    1.5mm 두께에 세련된 폰트가 적용되었으며, 각인 내구성을
                    <br />
                    높여 오랜 시간 사용헤도 손상 없이 사용할 수 있습니다.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + './img/cherry03.png'} alt="" />
              </div>
              <div className='d-flex justify-content-center flex-column step'>
              <div className='position-relative'>
              <div className='des position-absolute'>
                  <h4 className='text-start'>Step Sculpture2</h4>
                  <h5 className='text-start'>편안한 타건의 최적화된 높이</h5>
                  <p className='text-start pt-3 text-black-50'>키캡의 각도를 다르게 해 경사를 만드는 방식으로 손가락과 손목의 피로를 덜어주며
                    <br />
                    손가락과 키캡의 면적을 일정하게 유지시켜 정확한 타이핑이 가능합니다.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + './img/cherry04.png'} alt="" />
              </div>
              </div>
            </div>
            {
              items.map(function(parm,i){
                return(
                  <List items={items[i]} i={i} />
                )
              })
            }
          </div>
        </div>
        {
          count <1 ?  
          
          <button onClick={()=>{
            count = count +1;
            axios.get('https://619ceac5-b8b1-404f-8539-1f9f158471ee.mock.pstmn.io/testApi')
            .then((result)=>{
              // console.log(result.data)
              let copyItems = [...items, ...result.data]
              setItems(copyItems)
            }).catch(()=>{console.log("통신 실패")})
          }}>More</button>: null
        }

        </>
      } />
      <Route path='*' element={<div>404Error</div>}/>
      <Route path='/about' element={<About></About>}>
        <Route path='member' element={ <div className='mt-5'>이념
          <div className='container'>
            <div className='cont'></div>
          </div>
        </div> }/>
        <Route path='location' element={ <div className='mt-5'>회사위치</div> }/>
      </Route>
      <Route path='/detail' element={
        <div className='container'>키보드
          <div className='row cont'>
            {
              items.map(function(parm,i){
                return(
                  <List items={items[i]} i={i} />
                )
              })
            }
          </div>
        </div>
        
      }
      />
      <Route path='/detail/:id' element={<Detail items={items}></Detail>}></Route>
        {/* url parameter */}
        {/* 유저가 뭐라는 간에 디테일 컴포넌트를 열어라 */}
      <Route path='/customer' element={ <Customer/> }>
        <Route path='qna' element={
          
          <div>
            <h3 className='mb-5 fw-bold'>QNA</h3>
            <div>
            <Table title={'[문의] '}></Table>
            </div>
          </div>
            }>
        </Route>
        <Route path='faq' element={
                    <div>
                    <h3 className='mb-5 fw-bold'>FAQ</h3>
                    <div>
                      <dt>질문1</dt>
                      <dd>답변1</dd>
                    </div>
                  </div>
        }></Route>
      </Route>
      <Route path='/community' element={<Community/>}>
        <Route path='info' element={ 
        <div >
            <h3 className='mb-5 fw-bold'>공지사항</h3>
            <div className='container'>
              <div className=''>
                <Table title={'[공지] '}></Table>
                {/* <table className='w-100 t_wrap'>
                  <thead className='table_h'>
                    <th style={{"width":""}}>제목</th>
                    <th style={{"width":"14%"}}>작성자</th>
                    <th style={{"width":"10%"}}>조회수</th>
                    <th style={{"width":"15%"}}>작성일지</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>공지1</td>
                      <td>운영자</td>
                      <td>0</td>
                      <td>2023-05-02</td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
            </div>
          </div> }/>
        <Route path='event' element={
          <div>
            <h3 className='mb-5 fw-bold'>이벤트</h3>
            <div>
            <Table title={'[이벤트] '}></Table> 
            </div>
          </div>
            }/>
      </Route>
        
      
      </Routes>


      
      
    </div>
  );
}

export default App;
