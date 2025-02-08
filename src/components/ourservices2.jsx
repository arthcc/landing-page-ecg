import React from "react"

export const OurServices2 = (props) => {
	return (
		<div id="about" className="service2">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-6 order-md-last">
						<img src="img/reformas.jpg" className="img-fluid float-end" alt="" />
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="about-text">
							<h2>Reformas</h2>
							<p>{props.data ? props.data.paragraph : "loading..."}</p>
							<div className="list-style">
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
