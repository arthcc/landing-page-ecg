import React from "react";
import { Image } from "./image";

export const Gallery = (props) => {
	return (
		<div id="portfolio" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Galeria</h2>
					<p>Algumas de nossas obras.</p>
				</div>
				<div className="row">
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: "1rem",
						}}
					>
						{props.data
							? props.data.map((d, i) => (
									<div
										key={`${d.title}-${i}`}
										className="col-sm-6 col-md-4 col-lg-4"
										style={{
											width: "100%",
										}}
									>
										<Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
									</div>
							  ))
							: "Loading..."}
					</div>
				</div>
			</div>
		</div>
	);
};
