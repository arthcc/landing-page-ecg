import React, { useEffect, useState } from "react"
import SmoothScroll from "smooth-scroll"
import "./App.css"
import { Contact } from "./components/contact"
import { Gallery } from "./components/gallery"
import { HeaderCarousel } from "./components/header"
import { Navigation } from "./components/navigation"
import { OurServices } from "./components/ourservices"
import { OurServices2 } from "./components/ourservices2"
import { OurServices3 } from "./components/ourservices3"
import { OurServices4 } from "./components/ourservices4"
import { OurServices5 } from "./components/ourservices5"
import { Services } from "./components/services"
import { Testimonials } from "./components/testimonials"
import JsonData from "./data/data.json"

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

const App = () => {
	const [landingPageData, setLandingPageData] = useState({})
	useEffect(() => {
		setLandingPageData(JsonData)
	}, [])

	return (
		<div
			style={{
				overflowX: "hidden",
			}}
		>
			<Navigation />
			<HeaderCarousel data={carouselData} />
			<OurServices data={landingPageData.OurServices} />
			<OurServices2 data={landingPageData.OurServices2} />
			<OurServices3 data={landingPageData.OurServices3} />
			<OurServices4 data={landingPageData.OurServices4} />
			<OurServices5 data={landingPageData.OurServices5} />
			<Services data={landingPageData.Services} />
			<Gallery data={landingPageData.Gallery} />
			<Contact data={landingPageData.Contact} />
		</div>
	)
}

const carouselData = {
	slides: [
		{
			title: "Bem-vindo ao Site",
			paragraph: "Descubra tudo o que oferecemos!",
			image: "img/header_1.PNG",
		},
		{
			title: "Nossos Serviços",
			paragraph: "Conheça nossos serviços incríveis!",
			image: "img/header_2.PNG",
		},
		{
			title: "Entre em Contato",
			paragraph: "Estamos prontos para ajudar você.",
			image: "img/header_3.PNG",
		},
	],
}

export default App
