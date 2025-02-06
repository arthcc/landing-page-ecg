import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeaderCarousel = (props) => {
	return (
		<div className="intro">
			<div>
				<div
					style={{
						height: "100%",
						width: "99vw",
						margin: "0",
						padding: "0",
					}}
				>
					<div
						style={{
							height: "55vh",
							width: "100%",
							margin: "0",
							padding: "0",
							position: "relative",
						}}
					>
						<Swiper
							modules={[Navigation, Autoplay]}
							navigation
							spaceBetween={0}
							slidesPerView={1}
							loop={true}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							className=""
							style={{
								margin: "0",
							}}
						>
							{props.data && props.data.slides ? (
								props.data.slides.map((slide, index) => (
									<SwiperSlide
										key={index}
										style={{
											height: "100%",
											width: "100%",
											padding: "0",
											margin: "0",
											marginRight: "0",
											position: "relative",
										}}
									>
										<img
											src={slide.image}
											alt={slide.title}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												margin: "0",
												padding: "0",
											}}
										/>

										<div
											style={{
												position: "absolute",
												top: "50%",
												left: "50%",
												transform: "translate(-50%, -50%)",
												color: "white",
												textAlign: "center",

												padding: "20px",
												borderRadius: "10px",
											}}
										>
											<h2
												style={{
													color: "white",
													marginTop: "16rem",
												}}
											>
												{slide.title}
											</h2>
											<a
												href={slide.link || "#"}
												style={{
													color: "white",
													textDecoration: "none",
													fontSize: "16px",
													backgroundColor: "#4A1E19",
													padding: "10px 20px",
													borderRadius: "5px",
													transition: "background-color 0.3s",
												}}
												onMouseEnter={(e) => {
													e.target.style.backgroundColor = "#4A1E19";
												}}
												onMouseLeave={(e) => {
													e.target.style.backgroundColor = "#4A1E19";
												}}
											>
												Saiba Mais
											</a>
										</div>
									</SwiperSlide>
								))
							) : (
								<SwiperSlide>
									<div className="col-md-8 col-md-offset-2 intro-text">
										<h1>
											Loading<span></span>
										</h1>
										<p>Loading</p>
									</div>
								</SwiperSlide>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};
