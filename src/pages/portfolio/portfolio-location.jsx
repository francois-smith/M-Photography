import React, { useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import { PortfolioSection } from "./portfolio-styles"

const sections = [
	{ 
        name: `Couples & Engagement`,
		caption: `Two Hearts Collide`,
    },
	{
		name: `Family`,
		caption: `Capture The Moment`,
	},
	{
		name: `Graduation`,
		caption: `Next Chapter`,
	},
    {
		name: `Maternity`,
		caption: `All Of God's Grace`,
	},
    {
		name: `Matric Farewell`,
		caption: `Celebratory Day`,
	},
    {
		name: `Mommy & Me`,
		caption: `Precious Moments`,
	},
    {
		name: `Portrait Portfolio`,
		caption: `Express Yourself`,
	},
]

function Portfolio() {
    useEffect(() => {
		document.title = "M Photography | Location Portfolio";
	}, []);

	const [couplesImages, setCouples] = useState([]);
    const [familyImages, setFamily] = useState([]);
    const [graduationImages, setGraduation] = useState([]);
    const [maternityImages, setMaternity] = useState([]);
    const [farewellImages, setFarewell] = useState([]);
    const [mommyImages, setMommy] = useState([]);
    const [portraitImages, setPortrait] = useState([]);

	useEffect(() => {
        getImages("loc-couple");
		getImages("loc-family");
		getImages("loc-graduation");
		getImages("loc-maternity");
		getImages("loc-matric");
		getImages("loc-mommy");
		getImages("loc-portfolio");

		function getImages(type) {
			let url = 'https://maryna-m-photography.com/db.php';
			var params = [];
			params.push(`section=${type}`);

			fetch(url, { method: "POST", headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }, body: params })
			.then(async (response) => {
				let data = await response.json();

				for (let image of data.data) {
					image.src = "/uploads/" + image.src;
					image.thumbnail = image.src;
				}

				switch(type){
					case "loc-couple": setCouples(data.data); break;
					case "loc-family": setFamily(data.data); break;
					case "loc-graduation": setGraduation(data.data); break;
					case "loc-maternity": setMaternity(data.data); break;
					case "loc-matric": setFarewell(data.data); break;
					case "loc-mommy": setMommy(data.data); break;
					case "loc-portfolio": setPortrait(data.data); break;
				}
			});
		}
    }, []);

	const random = (array) => {
        return array[Math.floor(Math.random()*array.length)];
    };

	const getSection = (item) => {
		switch(item){
			case "Couples & Engagement": return couplesImages;
			case "Family": return familyImages;
			case "Graduation": return graduationImages;
			case "Maternity": return maternityImages;
			case "Matric Farewell": return farewellImages;
			case "Mommy & Me": return mommyImages;
			case "Portrait Portfolio": return portraitImages;
		}
	}

	const getSectionThumb = (item) =>{
		return random(getSection(item.name));
	}

	return (
		<PortfolioSection>
			<div className="portfolio-sections-container">
				{sections.map((item) => (
					<NavLink className="section-link" key={item.name} to={`/portfolio/${item.name.replaceAll(" ", "+").toLowerCase()}`}>
						<div className="section-card">
							<h2>{item.name.toUpperCase()}</h2>
							<span>{item.caption}</span>
							<div className="section-card-image">
								<img src={ typeof getSectionThumb(item) !== 'undefined' ? getSectionThumb(item).src : ""}/>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</PortfolioSection>
	);
}

export default Portfolio;