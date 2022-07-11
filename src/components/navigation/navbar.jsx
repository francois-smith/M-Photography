import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../media/svgs/logo-cursive.svg"
import { NavigationBar, MainLinks, NavigationContainer } from "./navbar-styles";
import Burger from "./burger-menu";
import Arrow from "../../media/svgs/arrow-head.svg"
import Divider from "../../media/svgs/divider.svg"

function Navigation(){
    return(
        <NavigationContainer>
            <NavigationBar>
                <div>
                    <MainLinks>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link text-link' : 'inactive-link text-link')} to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link text-link' : 'inactive-link text-link')} to="/about">
                                ABOUT ME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="logo-cursive" to="/">
                                <img id="main-logo" src={Logo} alt="Logo" />
                            </NavLink>
                        </li>
                        <div className='navigation-menu'>
                            <a className="text-link portfolio-nav">PORTFOLIO<img className='nav-section-arrow' src={Arrow} alt="section arrow"/></a>
                            <div className='navigation-sub-items'>
                                <div className="navigation-item-sub">
                                    <NavLink id="navigation-portfolio-location" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/portfolio/location">On Location</NavLink>
                                </div>
                                <div className="navigation-item-sub">
                                    <NavLink id="navigation-portfolio-studio" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/portfolio/studio">Studio</NavLink>
                                </div>
                            </div>
                        </div>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link text-link' : 'inactive-link text-link')} to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                    </MainLinks>
                    <div className="divider-container">
                        <div className="divider-image-container">
                            <img src={Divider} alt="Divider" />
                        </div>
                    </div>
                </div>
            </NavigationBar>
            <Burger/>
        </NavigationContainer>
    );
}

export default Navigation;