import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';

const Header = () => {

    return (
        <div className='header'>
            <div className="nav-bar">
                <p className="logo">My Subject</p>
                <div className="nav-right">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "brown" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/home'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "brown" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/addSubject'
                    >
                        Add Subject
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "brown" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/about'
                    >
                        About
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "brown" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/contactUS'
                    >
                        Contact Us
                    </NavLink>
                </div>
                <div className="toggleBtn">
                    <Button style={{ color: 'brown' }}><DehazeIcon /></Button>

                </div>
            </div>
        </div >
    );
};

export default Header;