import React from "react";

export function Work({ Picture }) {
	return (<div className="p-3">
		<div>
			<div className="text-primary p-2 d-flex">
				<img className="icon" src={Picture} alt="pic" />
				<div className="mt-2 px-2">Work Experience</div>
			</div>
			<hr className="mt-2 mb-2 bg-white" />
			<div className="m-3">
				<div className="text-white sub-text font-weight-bold ">
					Business Development Manager
				</div>
				<div className="text-white">AirState Solutions</div>
				<div className="text-white">Apr 2018 - Jan 2020</div>
			</div>
			<div className="m-3">
				<div className="text-white sub-text font-weight-bold ">
					Business Development Assistant
				</div>
				<div className="text-white">AirState Solutions</div>
				<div className="text-white">Apr 2018 - Jan 2020</div>
			</div>
			<div className="m-3">
				<div className="text-white sub-text font-weight-bold ">
					Business Development Assistant
				</div>
				<div className="text-white">AirState Solutions</div>
				<div className="text-white">Apr 2018 - Jan 2020</div>
			</div>
		</div>
	</div>);
}
