import React from "react";
import PropTypes from "prop-types";

const CountItems = props => {
	return (
		<div>
			{props.count} {props.count > 1 ? `items` : `item`} left
		</div>
	);
};

CountItems.propTypes = {
	count: PropTypes.number
};

export { CountItems as default };
