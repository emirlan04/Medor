import React from 'react';
import { Navbar, NavLink, Nav, FormControl, Container, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from './img/qwert.png';
import './Header.css';

const Header = () => {

    return (
      <div  className="header">
        <Navbar className="navcolor" fixed="top" collapseOnSelect expand="md" variant="dark">
          <Container>
            
            <Navbar.Brand href="">
              <Link to="/">
              <img
                src={Logo}
                height="45"
                width="120"
                className="d-inline-block align-top"
                alt="Logo" 
               />
              </Link>
            </Navbar.Brand>

              <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="mr-auto col">
                    <Link to="/">
                      <Nav.Link disabled href="#">Главная</Nav.Link>
                    </Link>
                    <Link to="/fashion">
                      <Nav.Link disabled>Объекты</Nav.Link>
                    </Link>
                    <Link to="/">
                      <Nav.Link disabled>Страница объекта</Nav.Link>
                    </Link>
                    <Link to="/">
                      <Nav.Link disabled>Галерея</Nav.Link>
                    </Link>
                    <Link to="/admin">
                      <Nav.Link disabled>О Компании</Nav.Link>
                    </Link>
                    <Link to="/admin">
                      <Nav.Link disabled>Контакты</Nav.Link>
                    </Link>
                
                  </Nav>    
            
                </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

export default Header;


