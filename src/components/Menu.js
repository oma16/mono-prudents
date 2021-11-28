import React from 'react'
import { Nav } from 'react-bootstrap'
import profile_pic  from '../images/ellipse.png'
import { BoxArrowLeft, Grid, Calendar3, ClipboardCheck, GraphUp, Person, Stack, Book, Bell, ChatRightText } from 'react-bootstrap-icons';

const Menu = () => {
    return (
        <div className="menu pb-5">
            <div className="text-center pt-5">
                <div><img src={ profile_pic } className="rounded-circle" alt="profile" width="150px" height="150px"/></div>
                <p className="text-white pt-3 fs-5 fw-bold">Martina Emuoboh</p>
            </div>
           <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link href=""><Grid className="me-4"/> Dashboard</Nav.Link>
                <Nav.Link  href=""><ClipboardCheck className="me-4"/>  Tasks</Nav.Link>
                <Nav.Link href=""><Calendar3 className="me-4"/> Schedule Classes</Nav.Link>
                <Nav.Link  href=""><GraphUp className="me-4"/> Track Progress</Nav.Link>
                <Nav.Link  href=""><Book className="me-4"/> Curriculum</Nav.Link>
                <Nav.Link href=""><Stack className="me-4"/> Resources</Nav.Link>
                <Nav.Link  href=""><ChatRightText className="me-4"/> Feedback</Nav.Link>
                <Nav.Link  href="">< Bell className="me-4"/> Notification</Nav.Link>
                <Nav.Link href=""><Person className="me-4"/> Profile</Nav.Link>
                <Nav.Link  href=""> <BoxArrowLeft className="me-4"/>Logout</Nav.Link>
            </Nav>
        </div>
    )
}

export default Menu
