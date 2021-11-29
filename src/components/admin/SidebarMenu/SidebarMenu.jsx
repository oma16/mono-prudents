import React from 'react';
import { Nav } from 'react-bootstrap';
import { BoxArrowLeft, Grid, BarChartFill, People, Book, Bell, ChatLeftDotsFill, PersonLinesFill  } from 'react-bootstrap-icons';

import profile_pic  from '../../../images/ellipse.png';

const Menu = () => {
    return (
        <div className="menu pb-5">
            <div className="text-center pt-5 pb-4">
                <div><img src={ profile_pic } className="rounded-circle" alt="profile" width="150px" height="150px"/></div>
                <p className="text-white pt-3 fs-5 fw-bold">Martina Emuoboh</p>
            </div>
           <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link href=""><Grid className="me-4"/> Dashboard</Nav.Link>
                <Nav.Link  href=""><People className="me-4"/> Interns Progress</Nav.Link>
                <Nav.Link href=""><BarChartFill className="me-4"/> Track Progress</Nav.Link>
                <Nav.Link  href=""><PersonLinesFill className="me-4"/> Trainers Progress</Nav.Link>
                <Nav.Link  href=""><Book className="me-4"/> Curriculum</Nav.Link>
                <Nav.Link  href="">< Bell className="me-4"/> Notification</Nav.Link>
                <Nav.Link  href=""><ChatLeftDotsFill className="me-4"/> Messages</Nav.Link>
                <Nav.Link href=""><Book className="me-4"/> Add New Track</Nav.Link>
                <div className="py-4"></div>
                <Nav.Link  href=""><BoxArrowLeft className="me-4"/>Logout</Nav.Link>
            </Nav>
        </div>
    )
}

export default Menu
