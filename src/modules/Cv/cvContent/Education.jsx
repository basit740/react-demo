import React from "react";

export function Education({ Picture1 }) {
	return (<div className="p-3 ">
		<div>
			<div className="text-primary p-2 d-flex">
				<img className="icon" src={Picture1} alt="pic" />
				<div className="mt-2 px-2">Education</div>
			</div>
			<hr className="mt-2 mb-2 bg-white" />
			<div className="m-3">
				<div className="text-white sub-text font-weight-bold ">
					MSc in Economics and Business Administration
				</div>
				<div className="text-white">University of Dhaka</div>
				<div className="text-white">Apr 2018 - Jan 2020</div>
				<div className="text-white">CGPA: 2.80 out of 4</div>
			</div>
			<div className="m-3">
				<div className="text-white sub-text font-weight-bold ">
					MSc in Economics and Business Administration
				</div>
				<div className="text-white">University of Dhaka</div>
				<div className="text-white">Apr 2018 - Jan 2020</div>
				<div className="text-white">CGPA: 2.80 out of 4</div>
			</div>
		</div>
	</div>);
}
