
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import {Navbar, Container, Nav, Form} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'; 
import {  Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import './App.css';
import data from './data.js';
import List from './Component/List.js';
import Detail from './Pages/Detail.js';
import About from './Pages/About.js';
import axios from 'axios';
import Community from './Pages/Community.js';
import Table from './Component/Table.js'
import Customer from './Pages/Customer';


let count = 0;

function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();
  const targetRef = useRef(null);
  const animRef = useRef();

  const handleScroll = () => {
    //console.log("scrolling")
    // const targetTop = document.getElementsByClassName('animRef').offsetTop;
    // const ani_targetTop = targetRef.current.offsetHeight;
    const ani_targetTop = animRef.current?.offsetTop;
    const winPos = document.querySelector('html').scrollTop;
    const wh = document.querySelector('html').scrollHeight;
    
    if(winPos > ani_targetTop - wh + (wh / 2)){
      console.log(animRef);
      // targetRef.current.classList.add("active")
    }    
    else{
        // targetRef.current.classList.remove("active")
      }

    if (window.scrollY > 0) {
      targetRef.current.classList.add("active")     

    }
    else{
      targetRef.current.classList.remove("active")
    }
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
    // const timer = setInterval(() => {
    //   window.addEventListener("scroll", handleScroll);
    // });
    // return () => {
    //   clearInterval(timer);
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

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

            <Navbar variant="tabs"  className='Navi' ref={targetRef}>

        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <img src={process.env.PUBLIC_URL + '/img/Logo.png'} alt="" />
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
      <Carousel.Item className ="Main_01" interval={4000} onClick={()=>{navigate('/detail')}}>
        <div className='bg'></div>
        <img
          className="d-block w-100"
          src= {process.env.PUBLIC_URL + '/img/MainBanner_1.png'}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_02' interval={4000} onClick={()=>{navigate('/detail')}}>
      <div className='bg'></div>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img/MainBanner_2.png'}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_03' interval={4000} onClick={()=>{navigate('/detail')}}>
      <div className='bg'></div>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img/MainBanner_3.png'}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Main_04' interval={4000} onClick={()=>{navigate('/detail')}}>
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
            <div className='Bestswipe' data-aos="fade-up">
              <h2 className='pt-5 fw-bold ' >Best Products</h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
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
              <div className="item" onClick={()=>{navigate('/detail/0')}}>
                <div className='item-cont'>
                <img className='item-img' src={process.env.PUBLIC_URL + items[0].url} alt=''/>
                </div>
                <h4>{items[0].title}</h4>
                <p>{items[0].content}</p>
              </div>
              </SwiperSlide>
              
            </Swiper>
            </div>
            <div className='row align-items-center'>
              <div className='main_img col-lg-8' data-aos="fade-right">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className='autoSwiper'
                    >
                  <SwiperSlide>
                    <div>
                      <img className='w-100' src={process.env.PUBLIC_URL + '/img/keyboard_00.jpg'} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-100' src={process.env.PUBLIC_URL + '/img/keyboard_01.jpg'} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-100' src={process.env.PUBLIC_URL + '/img/keyboard_02.jpg'} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-100' src={process.env.PUBLIC_URL + '/img/keyboard_03.jpg'} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='main_text col-lg-4 d-flex flex-column'>
                <h3 className='text-start fw-bold mb-5 animRef ' data-aos="fade-up" ref={animRef}>자신만의 키보드를 <br /> 커스터마이징 해보세요</h3>
                <div className=' d-flex flow_wrap' data-aos="fade-left" data-aos-duration="500">
                  <Swiper className='position-relative flow d-flex align-content-center justify-content-center'
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    direction={"vertical"}
                    
                  >
                    <SwiperSlide>
                    <div className='chuk text-white' style={{'--background':'#0ad2f0'}}>청축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk text-white' style={{'--background':'#c57c0e'}}>갈축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk text-white' style={{'--background':'#f1171c'}}>적축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk text-white' style={{'--background':'#333'}}>흑축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk text-white' style={{'--background':'#c31e1f','fontSize':'18px'}}>저소음<br />적축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk' style={{'--background':'#fafafa'}}>백축</div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='chuk' style={{'--background':'#c0c0c0'}}>은축</div>
                    </SwiperSlide>
                  </Swiper>
                  <p className='m-0 fs-20 fw-bold'>키보드</p>
                </div>
              </div>
            </div>
            <div className='introduce pt-5'>
              <h2 className='pb-5 fw-bold'>What's LEOPOLD?</h2>
              <div className='d-flex'>
              <div className='col-lg-12 position-relative'>
              <div className='des position-absolute'>
                  <h4 className='text-start'data-aos="fade-up" >Find the 
                    switch that
                    <br /> suits me</h4>
                  <p className='text-start pt-3 text-black-50' data-aos="fade-up" data-aos-duration="500">사용자의 성향을 고려한
                    
                    7가지의 스위치로
                    <br />
                    자신에게 맞는 스위치를
                    
                    선택할 수 있습니다
                    </p>
                </div>
                <div className='des-img-box'>
                  <div className='des-img-top' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"></div>
                {/* <img className='w-100 scale' src={process.env.PUBLIC_URL + '/img/cherry.png'} alt="" /> */}
                </div>
              </div>
              </div>
              <div className='d-flex mt-5'>
              <div className='col-lg-12 position-relative'>
              <div className='des position-absolute' style={{'top':'7%'}}>
                  <h4 className='text-start' data-aos="fade-up">PBT DoubleShot </h4>
                  <p className='text-start pt-3 text-black-50' data-aos="fade-up" data-aos-duration="500">자체 개발한 레오폴드만의 최고급
                    <br />
                    PBT 이중사출 키캡
                    </p>
                </div>
                <div className='des-img-box' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <div className='des-img-bottom overflow-hidden'>
                    {/* <img className='w-100 scale' src={process.env.PUBLIC_URL + './img/cherry02.png'} alt="" /> */}
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-6 in_left'>
              </div> */}
              </div>
              <div className='d-flex justify-content-end position-relative pbt'>
              <div className='des position-absolute'>
                  
                  <p className='text-start pt-3 text-black-50' data-aos="fade-up">레오폴드만의 PBT 이중사출 키캡은
                    <br />
                    1.5mm 두께에 세련된 폰트가 적용되었으며, 각인 내구성을
                    <br />
                    높여 오랜 시간 사용헤도 손상 없이 사용할 수 있습니다.
                    </p>
                </div>
                <img data-aos="fade-left" src={process.env.PUBLIC_URL + './img/cherry03.png'} alt="" />
              </div>
              <div className='d-flex justify-content-center flex-column step'>
              <div className='position-relative'>
              <div className='des position-absolute'>
                  <h4 className='text-start mb-4' data-aos="fade-up">Step Sculpture2</h4>
                  <h5 className='text-start' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">편안한 타건에 최적화된 높이</h5>
                  <p className='text-start pt-3 text-black-50' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">키캡의 각도를 다르게 해 경사를 만드는 방식으로 손가락과 손목의 피로를 덜어주며
                    <br />
                    손가락과 키캡의 면적을 일정하게 유지시켜 정확한 타이핑이 가능합니다.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + './img/cherry04.png'} alt="" />
              </div>
              </div>
            </div>
            {/* {
              items.map(function(parm,i){
                return(
                  <List items={items[i]} i={i} />
                )
              })
            } */}
            <div>
              <h4 className='fw-bold'>LEOPOLD는 항상 고객이 우선입니다</h4>
              <Row>
              <Col className='main-cus'>
                <h6 className='mt-5'>구입후 1년간 A/S무상수리</h6>
                <p>1년이 지나도 최소한의 금액으로 수리해 드립니다.</p>
              </Col>
              </Row>
              <Col></Col>
            </div>
          </div>
        </div>
        {/* {
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
        } */}

        </>
      } />
      <Route path='*' element={<div>404Error</div>}/>
      <Route path='/about' element={<About></About>}>
        <Route path='member' element={ <div className='mt-5'>이념
          <div className='container'>
            <div className='cont'></div>
          </div>
        </div> }/>
        <Route path='location' element={ <div className='mt-5'>회사위치
          <div>
            <img src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=451100&MY=1161030&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo" alt="" />
          </div>
        </div> }/>
      </Route>
      <Route path='/detail' element={
        <div className='container'>
          <div>
            <img className='w-100' src={process.env.PUBLIC_URL + "./img/ListBanner.jpg"} alt="" />
          </div>
          <div>
            <h3 className='pt-5 fw-bold'>Keyboard</h3>
          </div>
          <div className='row cont' data-aos="fade-up">
            <div className='text-end total_l'>
              total products {
                data.length
              }
            </div>
            {
              items.map(function(parm,i){
                return(
                  <List items={items[i]} i={i} />
                )
              })
            }
            <div className='mt-5'>1</div>
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
                    <div className='pl-5 pr-5 pe-auto'>
                    <h3 className='mb-5 fw-bold'>FAQ</h3>
                    <div className='text-start'>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>교환 및 환불의 절차가 어떻게 되나요?</Accordion.Header>
                        <Accordion.Body>
                        - 제품에 이상이 있는 경우 수령하신 날로부터 7일 이내에 반품, 환불이 가능합니다.
                      <br />
                      - 단순 변심에 의한 환불일 경우에는 왕복 택배비를 고객님께서 부담하셔야 합니다.
                      <br />
                      - 상품 불량일 경우 배송비 포함 전액이 환불됩니다.
                      <br />
                      - 출고 이후의 환불은 상품 회수 후에 이루어집니다.
                      <br />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>배송은 어떻게 이루어 지나요?</Accordion.Header>
                        <Accordion.Body>
                        - 오후 2시 30분까지 결제가 완료된 주문건은 당일 제품이 발송되며, 그 이후 주문건은 다음날 발송이 됩니다.
                        <br />
                        - 퀵서비스 및 방문 수령을 원하시는 고객님께서는 주문 및 결제 후 당사 사무실로 연락하셔야 합니다.
                        <br />
                        - 택배 社는 우체국 택배를 이용하고 있으며, 구매 합계 금액 20만원 이상은 무료배송입니다.
                        <br />
                        - 배송 기간은 결제 완료일로부터 1일~3일 정도 소요됩니다.
                        <br />
                        - 보통의 경우 제품 발송 후 다음날 주문하신 상품 수령이 가능하나, 지역에 따라 1~2일 정도 더 걸릴 수 있습니다.
                        <br />
                        (토요일/공휴일 제외)
                        <br />
                        - 제주도 및 도서산간 지역은 기본 배송료 외 추가금액이 발생될 수 있습니다.
                        <br />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>주문 취소는 어떻게 하나요?</Accordion.Header>
                        <Accordion.Body>
                        주문서 삭제 / 주문 취소는 주문서 중복 및 오배송을 방지하고자 당사에서 직접 관리를 하고 있습니다.
                        <br />
                        이러한 이유로 주문서 삭제 / 주문 취소는 당사 사무실로 전화를 주시거나 문의 게시판에 글을 남겨 주셔야 합니다.
                        <br />
                        주문 후 정상업무 시간 기준으로 24시간 이내에 결제가 되지 않은 주문 건은 자동으로 삭제되오니 참고하시기 바랍니다.
                        <br />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>결제시 무통장입금은 어디로 해야 하나요?</Accordion.Header>
                        <Accordion.Body>
                        국민은행  477401-01-100878
                        <br />
                        예금주 : 레오폴드(주)
                        <br />
                        - 무통장 입금 시 주문서에 작성하신 입금자 성함과 동일하게 입금해 주시기 바랍니다.
                        <br />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>재고 및 주문 가능 여부 관련</Accordion.Header>
                        <Accordion.Body>
                        - 홈페이지 화면상에서 품절로 표시가 되어 있지 않으면, 전산상 오류가 없는 이상 구매가 가능한 제품들입니다.
                        <br />
                        - 재고가 없어 구매가 불가능한 상품은 홈페이지 화면상 품절로 표시됩니다.
                        <br />
                        - 정확한 재고 확인이 필요하신 경우 유선으로 연락 바랍니다.
                        <br />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>주문 취소는 어떻게 하나요?</Accordion.Header>
                        <Accordion.Body>
                        레오폴드에서는 판매한 제품에 유, 무상 A/S를 제공하고 있습니다.
                        <br />
                        - 제품 구매 후 1년 이내에 제품에 이상이 발생한 경우에는 무상 A/S를 제공하고 있습니다.
                        <br />
                        - 사용자 과실로 인한 불량(침수,파손,이물질 유입)은 무상보증기간 이내이더라도 비용이 발생 됩니다.
                        <br />
                        - 제품 구매 후 1년이 지난 제품에 이상이 발생한 경우에도 최소한의 비용으로 A/S를 해 드리고 있습니다.
                        <br />
                        - 제품 구매 후 1주일 이내의 초기 불량이 의심되는 경우 유선으로 연락 부탁드립니다.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                      <dt className='mb-3'></dt>
                      <dd >

                      </dd>
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

      <footer className='foot pt-5 text-start pb-3'>
        <h2 className='text-center mb-5'><Link to={'/'}><img src={process.env.PUBLIC_URL + '/img/Logo.png'} alt="" /></Link></h2>
        <Container >
          <Row>
            <Col className='foot_r' md={6}>
            <ul className='d-flex mb-4 fr_t fw-bold'>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>A/S안내</li>
              <li>찾아오시는 길</li>
            </ul>
            <ul className='text-start fr_b'>
              <li>레오폴드(주) : 경기 고양시 일산동구 하늘마을로 158 B동 306호 레오폴드(주)</li>
              <li>개인정보책임관리자 : 강 산</li>
              <li>사업자등록번호 : 106-86-40380 | 대표자 : 강 산 | 통신판매업신고 : 제 2013-고양일산동-0425 호</li>
              <li>전화번호 : 050-2020-1030 | 팩스 : 031-926-7704</li>
              <li>Copyright ⓒ 2006 레오폴드(주) All rights reserved Any questions to webmaster@leopold.co.kr</li>
            </ul>
            </Col>
            <Col className='foot-m'>
            <ul>
              <h5 className='mb-4 fw-bold'>고객센터</h5>
              <li>050-2020-1030</li>
              <li>월~금요일 10:00~17:00</li>
              <li>*토,일,공휴일은 휴무입니다.</li>
            </ul>
            </Col>
            <Col className='foot-l'>
            <ul>
            <h5 className='mb-4 fw-bold'>입금계좌 안내</h5>
            <li>국민 477401-01-100878</li>
            <li>예금주 레오폴드(주)</li>
            </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      
      
    </div>
  );
}

export default App;
