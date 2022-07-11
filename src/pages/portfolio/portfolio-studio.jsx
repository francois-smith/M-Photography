import React, { useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import { PortfolioSection } from "./portfolio-styles"

const sections = [
	{ 
        name: `Newborn`
    },
	{
		name: `Milkbath`,
	},
	{
		name: `Cakesmash`,
	},
	{
		name: `Portfolio`,
	},
	{
		name: `Baby Milestone`,
	},
]

function Portfolio() {
    useEffect(() => {
		document.title = "M Photography | Studio Portfolio";
	}, []);

    const [newbornImages, setNewborn] = useState([]);
    const [milkbathImages, setMilkbath] = useState([]);
    const [cakeImages, setCake] = useState([]);
    const [portfolioImages, setPortfolio] = useState([]);
    const [milestoneImages, setMilestone] = useState([]);

    useEffect(() => {
        getImages("studio-newborn");
		getImages("studio-milkbath");
		getImages("studio-cakesmash");
		getImages("studio-portfolio");
		getImages("studio-milestone");

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
					case "studio-newborn": setNewborn(data.data); break;
					case "studio-milkbath": setMilkbath(data.data); break;
					case "studio-cakesmash": setCake(data.data); break;
					case "studio-portfolio": setPortfolio(data.data); break;
					case "studio-milestone": setMilestone(data.data); break;
				}
			});
		}
    }, []);

    const random = (array) => {
        return array[Math.floor(Math.random()*array.length)];
    };

	const getSection = (item) => {
		switch(item){
			case "Newborn": return newbornImages;
			case "Milkbath": return milkbathImages;
			case "Cakesmash": return cakeImages;
			case "Portfolio": return portfolioImages;
			case "Baby Milestone": return milestoneImages;
		}
	}

	const getSectionThumb = (item) =>{
		return random(getSection(item.name));
	}

	return (
		<PortfolioSection>
			<div className="portfolio-sections-container">
				{sections.map((item) => (
					<NavLink  key={item.name} to={`/portfolio/${item.name.replaceAll(" ", "+").toLowerCase()}`}>
						<div className="section-card">
							<h1>{item.name}</h1>
							<div className="section-card-image">
								<img src={ typeof getSectionThumb(item) !== 'undefined' ? getSectionThumb(item).src : ""} alt="Section Card Image"/>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</PortfolioSection>
	);
}

export default Portfolio;