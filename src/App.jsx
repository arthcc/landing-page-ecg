import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Navigation}  from './components/navigation';
import { OurServices } from "./components/ourservices";
import { OurServices2 } from "./components/ourservices2";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { HeaderCarousel } from "./components/header";
import JsonData from "./data/data.json";
import { OurServices3 } from "./components/ourservices3";
import { OurServices4 } from "./components/ourservices4";
import { OurServices5 } from "./components/ourservices5";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <HeaderCarousel data={carouselData} />
      <OurServices data={landingPageData.OurServices} />
      <OurServices2 data={landingPageData.OurServices2} />
      <OurServices3 data={landingPageData.OurServices3} />
      <OurServices4 data={landingPageData.OurServices4} />
      <OurServices5 data={landingPageData.OurServices5} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

const carouselData = {
  slides: [
    {
      title: "Bem-vindo ao Site",
      paragraph: "Descubra tudo o que oferecemos!",
      image: "img/about.jpg",
    },
    {
      title: "Nossos Serviços",
      paragraph: "Conheça nossos serviços incríveis!",
      image: "https://via.placeholder.com/800x400?text=Serviços",
    },
    {
      title: "Entre em Contato",
      paragraph: "Estamos prontos para ajudar você.",
      image: "https://via.placeholder.com/800x400?text=Contato",
    },
  ],
};



export default App;
