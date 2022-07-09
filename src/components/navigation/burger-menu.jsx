import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import BurgerIcon from "../../media/svgs/burger-icon.svg"
import Arrow from "../../media/svgs/arrow-head.svg"

class Burger extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		  	menuOpen: false
		}
	}

	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})  
	}

	closeMenu () {
		this.setState({menuOpen: false})
	}

	toggleMenu () {
		this.setState(state => ({menuOpen: !state.menuOpen}))
	}

  	render () {
		return (
	  		<Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={'100%'} customBurgerIcon={ <img src={BurgerIcon} alt="Burger Icon" /> }>
				<NavLink onClick={() => this.closeMenu()} id="burger-home" className="menu-item" to="/">HOME</NavLink>
				<NavLink onClick={() => this.closeMenu()} id="burger-about" className={({ isActive }) => (isActive ? '' : '')} to="/about">ABOUT ME</NavLink>
				<div className='menu-item-sub-container'>
					<p id="burger-portfolio" className="menu-item">PORTFOLIO <img className='section-arrow' src={Arrow} alt="section arrow"/></p>
					<div className='menu-sub-items'>
						<div className="menu-item-sub">
							<NavLink onClick={() => this.closeMenu()} id="burger-portfolio-location" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/portfolio/location">On Location</NavLink>
						</div>
						<div className="menu-item-sub">
							<NavLink onClick={() => this.closeMenu()} id="burger-portfolio-studio" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/portfolio/studio">Studio</NavLink>
						</div>
					</div>
				</div>
				<NavLink onClick={() => this.closeMenu()} id="burger-contact" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link') `menu-item`} to="/contact">CONTACT</NavLink>
	  		</Menu>
		);
  	}
}

export default Burger;