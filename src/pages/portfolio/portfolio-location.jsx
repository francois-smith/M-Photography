import React, { useEffect } from "react";
import { NavLink} from "react-router-dom";

const sections = [
	{ 
        name: `Couples & Engagement`
    },
	{
		name: `Family`,
	},
	{
		name: `Graduation`,
	},
    {
		name: `Maternity`,
	},
    {
		name: `Matric Farewell`,
	},
    {
		name: `Mommy & Me`,
	},
    {
		name: `Portrait Portfolio`,
	},
]

function Portfolio() {
    useEffect(() => {
		document.title = "M Photography | Location Portfolio";
	}, []);

	return (
		<div className="portfolio-section">
			{sections.map((item) => (
        		<div className="section-card" key={item.name}>
					<NavLink to={`/portfolio/${item.name.replaceAll(" ", "+").toLowerCase()}`}>
						<h1>{item.name}</h1>
					</NavLink>
				</div>
			))}
		</div>
	);
}

export default Portfolio;