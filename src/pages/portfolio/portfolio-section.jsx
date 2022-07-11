import React, { useState, useCallback, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { GalleryContainer } from "./portfolio-styles"

function Portfolio() {    
	const { type } = useParams();
		const [photos, setPhotos] = useState([]);
		const [currentImage, setCurrentImage] = useState(0);
		const [viewerIsOpen, setViewerIsOpen] = useState(false);

		useEffect(() => {
		document.title = "M Photography | Portfolio";
			getImages();
	}, []);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);
	
	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	async function getImages(){
		let url = 'https://maryna-m-photography.com/db.php';
		var params = [];
		params.push(`section=${cleanRequest(type)}`);

		const response = await fetch(url, { method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded;'}, body: params })
		let data = await response.json();
		
		let returnArray = [];
		for(let image of data.data){
			await addImage(image, returnArray);
		}

		shuffle(returnArray);
		setPhotos(returnArray);
	}

	function addImage(image, array) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = "/uploads/"+image.src;

			img.onload = () => {
				let photo = {
						src: "/uploads/"+image.src,
						width: img.width,
						height: img.height,
				}
				array.push(photo);
				resolve();
			};
		})
	}

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
		<div>
			{
			photos.length !== 0 ? (
			<GalleryContainer>
				<Gallery margin={5} direction={"column"} photos={photos} onClick={openLightbox} />
				<ModalGateway>
						{viewerIsOpen ? (
							<Modal onClose={closeLightbox}>
								<Carousel
								currentIndex={currentImage}
								views={photos.map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								}))}
								/>
							</Modal>
						) : null}
				</ModalGateway>
			</GalleryContainer>
			) 
			:
			(
				<GalleryContainer></GalleryContainer>
			)
			}
		</div>
	);
}

export default Portfolio;