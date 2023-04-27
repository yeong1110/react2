
import { useState } from 'react';
import {Navbar, Container, Nav, Form} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'; 
import styled from "styled-components";
import './App.css';
import img_01 from './MainBanner_2.jpg'
import data from './data.js'
import List from './Component/List.js'
import Detail from './Pages/Detail.js'
import About from './Pages/About.js'
import axios from 'axios';


let count = 0;

function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

            <Navbar bg="dark" variant="dark">

        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Leopold</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Keyboard</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>이전</Nav.Link> */}
            <Nav.Link >custom</Nav.Link>
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
        <div className='main_banner' style={{backgroundImage:'url('+img_01+')'}}></div>
        <div className="container">
          <div className="row">
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
            axios.get('https://6c3fac62-d531-4787-a6d9-e01d76badde1.mock.pstmn.io/productList')
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
        <Route path='member' element={ <div>멤버들</div> }/>
        <Route path='location' element={ <div>회사위치</div> }/>
      </Route>
        <Route path='/detail/:id' element={<Detail items={items}></Detail>}></Route>
        {/* url parameter */}
        {/* 유저가 뭐라는 간에 디테일 컴포넌트를 열어라 */}
      </Routes>


      
      
    </div>
  );
}

export default App;
