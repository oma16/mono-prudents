import React, { useState } from 'react'
import Menu from './Menu'
import Kodecamp from '../images/kodecamp.png'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { List, Search } from 'react-bootstrap-icons'

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleMenu = () => setShow(!show);
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="dashboard position-fixed top-0 start-0 h-100">
                    <Menu/>
                </div>
            </div>
            <div className="d-lg-none">
                <div className="shadow-sm py-2">
                    <Navbar bg="white" variant="light">
                        <Container>
                            <Nav className="w-100 justify-content-between align-items-center">
                                <Nav.Link><List className="text-primary" size={30} onClick={handleMenu}/></Nav.Link>
                                <Navbar.Brand><img src={Kodecamp} alt="kodecamp"/></Navbar.Brand>
                                <Nav.Link><Search className="text-secondary" size={20}/></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
               <div>
                   {show? <div className="dashboard-mobile position-fixed start-0 h-100 overflow-auto"><Menu/></div>: ''}
               </div>
            </div>
        </div>
    )
}

export default Dashboard
