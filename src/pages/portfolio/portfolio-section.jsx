import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from 'react-grid-gallery';
import { GalleryContainer } from "./portfolio-styles"

function Portfolio() {
    useEffect(() => {
		document.title = "M Photography | Portfolio";
	}, []);

	const { type } = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        let url = 'https://maryna-m-photography.com/db.php';
        var params = [];
        params.push(`section=${cleanRequest(type)}`);

        fetch(url, { method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded;'}, body: params })
        .then(async response => {
            let data = await response.json();

            for(let image of data.data){
                image.src = "/uploads/"+image.src;
                image.thumbnail = image.src;
            }

            shuffle(data.data);

            setImages(data.data);
        });
    }, []);

    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };

    function cleanRequest(type){
        switch(type){
            case "couples+&+engagement": return "loc-couple";
            case "family": return "loc-family";
            case "graduation": return "loc-graduation";
            case "maternity": return "loc-maternity";
            case "matric+farewell": return "loc-matric";
            case "mommy+&+me": return "loc-mommy";
            case "portrait+portfolio": return "loc-portfolio";
            case "newborn": return "studio-newborn";
            case "milkbath": return "studio-milkbath";
            case "cakesmash": return "studio-cakesmash";
            case "portfolio": return "studio-portfolio";
            case "baby+milestone": return "studio-milestone";
        }
    }

    return (
        <GalleryContainer>
            <Gallery images={images} rowHeight={350}/>
        </GalleryContainer>
    );
}

export default Portfolio;