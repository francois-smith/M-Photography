import React, { useEffect }  from "react";
import { HomeContainer } from './home-styles'
import HomeMain from '../../media/images/home/home-main.jpg'
import HomeSide1 from '../../media/images/home/home-side1.jpg'
import HomeSide2 from '../../media/images/home/home-side2.jpg'

function Home() {
	useEffect(() => {
		document.title = "M Photography | Home";
	}, []);

	return (
		<HomeContainer>
			<img id="home-main-image" src={HomeMain} alt="Couple Shoot" />
			<img id="home-side-image1" src={HomeSide1} alt="Maternity Shoot" />
			<img id="home-side-image2" src={HomeSide2} alt="Baby Shoot" />
			<div id="quote">
				<span>A PHOTOGRAPH</span>
				<span>IS THE PAUSE</span>
				<span>BUTTON OF LIFE</span>
			</div>
		</HomeContainer>
	);
}

export default Home;