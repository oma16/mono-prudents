import React from 'react';
import { Nav } from 'react-bootstrap';
import { BoxArrowLeft, Grid, Link45deg, ClipboardCheck, GraphUp, Person, Stack, Bell } from 'react-bootstrap-icons';

import profile_pic  from '../../../images/ellipse.png';

const Menu = () => {
    return (
        <div className="menu pb-5">
            <div className="text-center pt-5  pb-4">
                <div><img src={ profile_pic } className="rounded-circle" alt="profile" width="150px" height="150px"/></div>
                <p className="text-white pt-3 fs-5 fw-bold">Martina Emuoboh</p>
            </div>
           <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link href=""><Grid className="me-4"/> Dashboard</Nav.Link>
                <Nav.Link  href=""><ClipboardCheck className="me-4"/>  Tasks</Nav.Link>
                <Nav.Link href=""><Link45deg size={25} className="me-4"/> Live Classes</Nav.Link>
                <Nav.Link  href=""><GraphUp className="me-4"/> Course Progress</Nav.Link>
                <Nav.Link href=""><Stack className="me-4"/> Resources</Nav.Link>
                <Nav.Link  href="">< Bell className="me-4"/> Notification</Nav.Link>
                <Nav.Link href=""><Person className="me-4"/> Profile</Nav.Link>
                <div className="py-5"></div>
                <Nav.Link  href=""> <BoxArrowLeft className="me-4"/>Logout</Nav.Link>
            </Nav>
        </div>
    )
}

export default Menu
