import React from "react";
import ShowItems from "./ShowItems";
import CountItems from "./CountItems";

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		if (this.input.value !== "") {
			var newItem = {
				text: this.input.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this.input.value = "";
		}

		e.preventDefault();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function(item) {
			return item.key !== key;
		});

		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="text-center p-4">
					<i className="far fa-list-alt" />
					&nbsp; ToDo List
					<i className="fab fa-angellist" />
				</h1>

				<div className="card w-50 ">
					<ul className="list-group list-group-flush">
						<form onSubmit={this.addItem}>
							<input
								className="list-group-item"
								ref={a => (this.input = a)}
								placeholder="What needs to be done?"
							/>
						</form>
						<ShowItems
							entries={this.state.items}
							delete={this.deleteItem}
						/>

						<p className="card-text p-2">
							<small className="text-muted">
								<CountItems count={this.state.items.length} />
							</small>
						</p>
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
