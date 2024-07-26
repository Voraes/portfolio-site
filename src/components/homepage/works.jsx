import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s"
								alt="headstarter"
								className="work-image"
							/>
							<div className="work-title">Headstarter</div>
							<div className="work-subtitle">
								Software Engineer Fellow
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
