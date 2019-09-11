import React from "react";

export const Card = () => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="http://placehold.it/500x325"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Blah</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};
