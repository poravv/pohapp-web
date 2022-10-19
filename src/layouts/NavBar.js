

import { Outlet, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { IoHomeOutline, IoHeartCircleOutline, IoAddCircleSharp } from "react-icons/io5";
import '../App.css';

const NavBarV1 = () => {
    return (
        <>
            <Outlet></Outlet>
            <div className='container' style={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                <div className='navigation'>
                    <ul>
                        <li className='list'>
                            <Nav.Link as={Link} to='/Inicio' >
                                <span className='icon'>
                                    <IoHomeOutline />
                                </span>
                                <span className='text'>Home</span>
                            </Nav.Link>
                        </li>
                        <li className='list'>
                            <Nav.Link as={Link} to='/Medicinales' >
                                <span className='icon'><IoHeartCircleOutline /></span>
                                <span className='text'>Medicinales</span>
                            </Nav.Link>
                        </li>
                        <li className='list'>
                            <Nav.Link as={Link} to='/Plantas' >
                                <span className='icon'><IoAddCircleSharp /></span>
                                <span className='text'>Prod Naturales</span>
                            </Nav.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBarV1;