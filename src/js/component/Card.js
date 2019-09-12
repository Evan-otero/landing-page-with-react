import React from "react";
import Proptypes from "prop-types";

export const Card = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="http://placehold.it/500x325"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.echo}</h5>
				<p className="card-text">{props.content || "Default"}</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	content: Proptypes.string,
	echo: Proptypes.string
};
