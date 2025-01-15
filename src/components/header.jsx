import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; 

export const HeaderCarousel = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
             className="full-height-swiper"
             
          >
                {props.data && props.data.slides ? (
                  props.data.slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="col-md-8 col-md-offset-2 intro-text">
                        <div className="intro-image">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="img-responsive"
                          />
                        </div>
                        
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1>Loading<span></span></h1>
                      <p>Loading</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
