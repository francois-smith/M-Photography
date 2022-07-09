import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../media/images/CursiveLogo.svg"
import { NavigationBar, MainLinks } from "./navbar-styles";

function Navigation(){
    return(
        <div className="Navigation">
            <NavigationBar>
                <div>
                    <MainLinks>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/about">
                                ABOUT ME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="logo-cursive" to="/">
                                <img src={Logo} alt="Logo" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/portfolio">
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                    </MainLinks>
                </div>
            </NavigationBar>
        </div>
    );
}

export default Navigation;