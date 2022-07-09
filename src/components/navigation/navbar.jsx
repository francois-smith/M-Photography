import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../media/svgs/logo-cursive.svg"
import { NavigationBar, MainLinks, NavigationContainer } from "./navbar-styles";
import Burger from "./burger-menu";

function Navigation(){
    return(
        <NavigationContainer>
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
            <Burger/>
        </NavigationContainer>
    );
}

export default Navigation;