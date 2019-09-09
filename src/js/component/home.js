import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Mumbo } from "./Mumbo.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-12" id="jumbo">
							<Jumbotron />
						</div>
					</div>
					<div className="row">
						<div>
							<Mumbo />
						</div>
						<div>
							<Mumbo />
						</div>
						<div>
							<Mumbo />
						</div>
						<div>
							<Mumbo />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
