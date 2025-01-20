import React from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
						}}
					>
						<Swiper
							modules={[Navigation]}
							navigation
							spaceBetween={0}
							slidesPerView={1}
							loop={true}
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
										}}
									>
										<img
											src={slide.image}
											alt={slide.title}
											style={{
												width: "100%",
												height: "100%",
												margin: "0",
												padding: "0",
											}}
										/>
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
	)
}
