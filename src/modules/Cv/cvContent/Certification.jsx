import React from "react";

export function Certification({ Picture2 }) {
	return (<div>
		<div className="text-primary p-2 d-flex">
			<img className="icon" src={Picture2} alt="pic" />
			<div className="mt-2 px-2">Certification</div>
		</div>
		<hr className="mt-2 mb-2 bg-white" />
		<div className="m-3">
			<div className="text-white sub-text font-weight-bold ">
				Userhub
			</div>
			<div className="text-white">User Experience Design (2019)</div>
			<div className="text-white">www.theuserhub.com</div>
		</div>
		<div className="m-3">
			<div className="text-white sub-text font-weight-bold ">
				Userhub
			</div>
			<div className="text-white">User Experience Design (2019)</div>
			<div className="text-white">www.theuserhub.com</div>
		</div>
	</div>);
}
