import React from "react";
import PropTypes from "prop-types";

class ShowItems extends React.Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
		this.delete = this.delete.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return (
			<div className="d-flex">
				<li className="list-group-item p-2 flex-grow-1" key={item.key}>
					{item.text}
				</li>
				<button className="p-2" onClick={() => this.delete(item.key)}>
					<i className="far fa-trash-alt" />
				</button>
			</div>
		);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return <li>{listItems}</li>;
	}
}

ShowItems.propTypes = {
	entries: PropTypes.array,
	delete: PropTypes.func
};

export default ShowItems;
