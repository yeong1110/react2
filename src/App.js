
import { useState } from 'react';
import {Navbar, Container, Nav, Form} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'; 
import './App.css';
import img_01 from './banner.webp'
import data from './data.js'
import List from './Component/List.js'
import Detail from './Detail.js'
import About from './about.js'


function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>이전</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('/about/member')}}>member</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/location')}}>location</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>

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
        </>
      } />
      <Route path='/detail' element={
        <Detail></Detail>
      }></Route>
      <Route path='*' element={<div>404Error</div>}/>
      <Route path='/about' element={<About></About>}>
        <Route path='member' element={ <div>멤버들</div> }/>
        <Route path='location' element={ <div>회사위치</div> }/>
      </Route>
      </Routes>


      
      
    </div>
  );
}

export default App;
