import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";

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
					<div className="row text-center">
						<div className="col-md-3">
							<Card content="alpha" echo="foxtrot" />
						</div>
						<div className="col-md-3">
							<Card content="bravo" echo="golf" />
						</div>
						<div className="col-md-3">
							<Card echo="india" />
						</div>
						<div className="col-md-3">
							<Card content="delta" echo="juliet" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
