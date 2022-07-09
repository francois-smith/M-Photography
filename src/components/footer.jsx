import React from "react";
import {FooterContainer} from "./footer-styles"
import FLogo from "../media/svgs/f-logo.svg"
import {AiOutlineInstagram, AiFillFacebook} from "react-icons/ai"

const style = { color: "#413f3d", fontSize: "2.5em" }

function Footer() {
	return (
		<FooterContainer>
			<footer>
				<div className="footer-divider"/>
				<div className="footer-content">
					<p id="copyright-notice">
						&copy;2016-{new Date().getFullYear()} Maryna M Photography
					</p>
					<div className="socials-container">
						<a href="https://www.facebook.com/marynamphotography/"><AiFillFacebook style={style}/></a>
						<a href="https://www.instagram.com/mphotography_maryna/"><AiOutlineInstagram style={style}/></a>
					</div>
					<div className="f-logo-container">
						<a href="https://francois-smith.com"><img id="f-logo" src={FLogo} alt="Francois Smith Logo" /></a>
					</div>
				</div>
			</footer>
		</FooterContainer>
	);
}

export default Footer;