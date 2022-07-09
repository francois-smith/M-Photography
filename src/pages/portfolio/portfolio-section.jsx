import React from "react";
import { Outlet } from "react-router-dom";

const sections = [
	{ name: `Portfolio`},
	{
		name: `Vennila`,
	},
	{
		name: `Afrin`,
	},
]

/* <div class="filters-container">
                        <div onclick="filterImages(this)" class="image-filter"></div>
                        <div onclick="filterImages(this)" class="image-filter">Newborn</div>
                        <div onclick="filterImages(this)" class="image-filter">Milkbath/Cakesmash</div>
                    </div>
                </div>
                <div id="studio-container">
                    <div class="images-container">
                        
                    </div>
                </div>
            </div>
            <div class="section-content" data-section="loc">
                <div class="section-header">
                    <h2>On Location Images</h2>
                    <div class="filters-container">
                        <div onclick="filterImages(this)" class="image-filter">Wedding</div>
                        <div onclick="filterImages(this)" class="image-filter">Couples & Engagement</div>
                        <div onclick="filterImages(this)" class="image-filter">Family</div>
                        <div onclick="filterImages(this)" class="image-filter">Graduation</div>
                        <div onclick="filterImages(this)" class="image-filter">Maternity</div>
                        <div onclick="filterImages(this)" class="image-filter">Matric Farewell</div>
                        <div onclick="filterImages(this)" class="image-filter">Mommy & Me</div>
                        <div onclick="filterImages(this)" class="image-filter">Portrait Portfolio</div>
                    </div> */

function Portfolio() {
	return (
		<>
			<h3>Portfolio Page</h3>
			{
				sections.map((user, index) => (
					<h5 key={index}>

					</h5>
				))
			}
		</>
	);
}

export default Portfolio;