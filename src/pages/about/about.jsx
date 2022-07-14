import React, { useEffect } from "react";
import { AboutContainer } from "./about-styles"
import AboutImage from "../../media/images/about-photo.jpg"
import Vendor from "../../media/images/top-vendor.png"

function About(){
	useEffect(() => {
		document.title = "M Photography | About Me";
	}, []);

	return (
		<div className="about-body">
			<AboutContainer>
				<div className="about-image-container">
					<img id="about-image" src={AboutImage} alt="Image of Maryna"/>
					<div id="about-quote">
						<p><i>"If you love what you do, you will never work a day in your life."</i></p>
						<p>- Marc Anthony</p>
					</div>
				</div>
				<div className="about-content-container">
					<p><span className="quote-title">Hi I'm Maryna</span>The founder and owner of M Photography.</p>
					<p>I am a photographer based in the East Rand area. Photography is my passion. Ever since I bought my first DSLR camera, I fell in love and haven't put it down since then.</p>
					<p>I specialize in portrait photography and love beautiful outdoor locations.</p>
					<p>To capture your memories and special moments is my passion and I would be honoured to be capturing the most memorable moments of your life. Photos are the most important thing in the world that you can treasure and hold close to your heart for the rest of your life.</p>
					<p>It would be my absolute pleasure to travel to any location to meet with you and book your next session.</p>
					<div className="award-image">
						<img src={Vendor} alt="Top Vendor Award" />
					</div>
				</div>
			</AboutContainer>
		</div>
	);
}

export default About;