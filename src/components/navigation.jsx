import React, { useState } from "react"

export const Navigation = (props) => {
	const [activeLink, setActiveLink] = useState("")
	const [openServices, setOpenServices] = useState(false)
	const [openPartnerships, setOpenPartnerships] = useState(false)

	const handleLinkClick = (link, event) => {
		setActiveLink(link)
		const targetId = link === "contact" ? "#contact" : `.${link}`
		const target = document.querySelector(targetId)
		console.log("scroll", target, link, targetId)
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" })
		}
	}

	const handleWhatsAppRedirect = (type) => {
		const messages = {
			architect: "Olá, sou arquiteto e gostaria de saber mais sobre parcerias!",
			supplier: "Olá, sou fornecedor e gostaria de saber mais sobre parcerias!",
		}
		const phoneNumber = "5551999999999"
		const message = messages[type]
		const encodedMessage = encodeURIComponent(message)
		window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
	}

	const dropdownStyle = {
		display: "block",
		position: "absolute",
		backgroundColor: "#fff",
		border: "1px solid #ddd",
		padding: "10px",
		borderRadius: "4px",
		boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
		zIndex: 1000,
		listStyle: "none",
		minWidth: "150px",
	}

	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand page-scroll" href="#page-top">
						<img
							src="img/logo.png"
							alt="logo"
							width="200"
							height="90"
							style={{ marginTop: "-33px" }}
						/>
					</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li
							className={`dropdown ${activeLink === "services" ? "active" : ""}`}
							style={{ position: "relative" }}
							onMouseEnter={() => setOpenServices(true)}
							onMouseLeave={() => setOpenServices(false)}
						>
							<a
								href="#about"
								className="page-scroll dropdown-toggle"
								role="button"
								aria-expanded="false"
								onClick={(e) => handleLinkClick("services", e)}
							>
								Serviços <span className="caret"></span>
							</a>
							{openServices && (
								<ul style={dropdownStyle}>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleLinkClick("service1")}
										>
											Construções
										</button>
									</li>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleLinkClick("service2")}
										>
											Reformas
										</button>
									</li>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleLinkClick("service3")}
										>
											Acompanhamento de Obras
										</button>
									</li>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleLinkClick("service4")}
										>
											Projetos e Laudos
										</button>
									</li>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleLinkClick("service5")}
										>
											Energia Solar Fotovoltaica
										</button>
									</li>
								</ul>
							)}
						</li>

						<li
							className={`dropdown ${activeLink === "partnerships" ? "active" : ""}`}
							style={{ position: "relative" }}
							onMouseEnter={() => setOpenPartnerships(true)}
							onMouseLeave={() => setOpenPartnerships(false)}
						>
							<a
								href="#partnerships"
								className="page-scroll dropdown-toggle"
								role="button"
								aria-expanded="false"
								onClick={(e) => handleLinkClick("partnerships", e)}
							>
								Parcerias <span className="caret"></span>
							</a>
							{openPartnerships && (
								<ul style={dropdownStyle}>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleWhatsAppRedirect("architect")}
										>
											Arquitetos
										</button>
									</li>
									<li>
										<button
											className="btn btn-link text-left"
											style={{
												padding: "5px",
												width: "100%",
												textAlign: "left",
											}}
											onClick={() => handleWhatsAppRedirect("supplier")}
										>
											Fornecedores
										</button>
									</li>
								</ul>
							)}
						</li>

						<li
							className={activeLink === "contact" ? "active" : ""}
							onClick={(e) => handleLinkClick("contact", e)}
						>
							<a href="#contact" className="page-scroll">
								Contato
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
