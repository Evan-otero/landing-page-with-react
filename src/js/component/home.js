import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Navbar />
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Jumbotron />
					</div>
				</div>
			</div>
		);
	}
}
