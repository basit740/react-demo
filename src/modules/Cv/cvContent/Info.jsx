import React from "react";

export function Info({ Picture4, Picture8, Picture6, Picture7 }) {
	return (<div className="bg-white p-3 h-25 border">
		<div className="p-2">
			<div>
				<div className="text-primary mt-3">
					<h3 className="font-weight-bold">Jacob Lison</h3>
				</div>
				<h6 className="text-dark">UXUI Designer</h6>
				<p className="text-dark mt-3">
					I am a UI/UX Designer currently living in Bangladesh.Focused
					on creating a unique visualconcept through my design. Love
					quietness. consectetuer adipiscing elit, sed diam nonummy
				</p>
				<small className="mt-3">
					Home-20, Road-1, Block-B, Mirpur,Dhaka
				</small>
				<div>
					<div className="d-flex justify-content-around mt-2 ">
						<div className=" p-2 d-flex">
							<img className="iconSmall" src={Picture4} alt="pic" />
							<div className="mt-1 px-4">Linkedin.com/in/ikayes.design</div>
						</div>
						<div className=" p-2 d-flex">
							<img className="iconSmall" src={Picture8} alt="pic" />
							<div className="mt-1 px-4 mr-4">ikayes.design</div>
						</div>
					</div>
					<div className="d-flex justify-content-around mt-2 ">
						<div className=" p-2 d-flex">
							<img className="iconSmall" src={Picture6} alt="pic" />
							<div className="mt-1 px-4">ikayes.designer@gmail.com</div>
						</div>
						<div className=" p-2 d-flex">
							<img className="iconSmall" src={Picture7} alt="pic" />
							<div className="mt-1 px-4">+8801631455383</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>);
}
