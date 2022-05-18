import React from "react";
import Pic from "../../assets/Rectangle 352.jpg";
import Picture from "../../assets/Vector.svg";
import Picture1 from "../../assets/Vector (1).svg";
import Picture2 from "../../assets/Vector (2).svg";
import Picture4 from "../../assets/Vector (4).svg";
import Picture6 from "../../assets/Vector (8).svg";
import Picture7 from "../../assets/Vector (9).svg";
import Picture8 from "../../assets/Vector (10).svg";
import { Work } from "./cvContent/Work";
import { Skill } from "./cvContent/Skill";
import { Language } from "./cvContent/Language";
import { Organization } from "./cvContent/Organization";
import { Info } from "./cvContent/Info";
import { Education } from "./cvContent/Education";
import { Certification } from "./cvContent/Certification";
import "./index.css";

export const demoCv = () => {
	return (
		<div className="container h-auto">
			<div className="d-flex">
				<div className="w-40 h-auto left-panel">
					<div className="bg-white h-auto">
						<img className="user-image" src={Pic} alt="pic" />
					</div>
					<Work Picture={Picture} />
					<Education Picture1={Picture1} />
					<div className="p-3 ">
						<Certification Picture2={Picture2} />
					</div>
				</div>
				<div className="w-75 h-100 bg-black">
					<Info Picture4={Picture4} Picture8={Picture8} Picture6={Picture6} Picture7={Picture7} />
					<div className="bg-white p-3 h-25 border">
						<Skill />
					</div>
					<Organization />
					<Language />
				</div>
			</div>
		</div>
	);
};


