import React from "react";

export function Language() {
	return (<div className="bg-white p-3 h-25 border">
		<div className="text-primary font-weight-bold my-3 h3">
			Language
		</div>
		<hr className="mt-3 mb-2 bg-dark" />
		<div className="m-3">
			<div className="p-3">
				<div className="d-flex">
					<div className="w-50">
						<div className="font-weight-bold mr-5">Bangla</div>
					</div>
					<div className="w-50">
						<div className="mr-2">Full Professional Proficiency</div>
					</div>
				</div>

				<div className="d-flex">
					<div className="w-50">
						<div className="font-weight-bold mr-5">English</div>
					</div>
					<div className="w-50">
						<div className="mr-2">Native or Bilingual Proficiency</div>
					</div>
				</div>

				<div className="d-flex">
					<div className="w-50">
						<div className="font-weight-bold mr-5">Hindi</div>
					</div>
					<div className="w-50">
						<div className="mr-2">Limited Working Proficiency</div>
					</div>
				</div>

				<div className="d-flex">
					<div className="w-50">
						<div className="font-weight-bold mr-5">Spanish</div>
					</div>
					<div className="w-50">
						<div className="mr-2">Limited Working Prociciency</div>
					</div>
				</div>
			</div>
		</div>
	</div>);
}
