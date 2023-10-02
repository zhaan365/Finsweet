import React from 'react';
import logo from '../../../images/logo.png'
import {Link, NavLink} from "react-router-dom";
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'


const Header = () => {

    return (
        <header className="header">
            <div className="container">

                <div className="header__nav">
                    <Link to='/'>
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="header__menu">
                        {/*<NavLink to='/' className="header__menu-link" activeClassName="header__active">Home</NavLink>*/}
                        <NavLink to='/service' className="header__menu-link" activeClassName="header__active">Service</NavLink>
                        <NavLink to='/company' className="header__menu-link" activeClassName="header__active">Company</NavLink>
                        <NavLink to='/career' className="header__menu-link" activeClassName="header__active">Career</NavLink>
                        <NavLink to='/blog' className="header__menu-link" activeClassName="header__active">Blog</NavLink>
                        <NavLink to='/contact' className="header__menu-link" activeClassName="header__active">Contact us</NavLink>

                        <div className="header__menu-next">
                            <NavLink to='/' className="header__menu-link2">Clone project</NavLink>
                            <LiaLongArrowAltRightSolid size={19}/>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;