import React, { useState, useEffect, useRef } from "react";

const TodoList = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/yeizmendiz";
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setItems(responseAsJson);
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	const queryAPI = newList => {
		fetch(url, {
			method: "PUT", // or 'POST'
			body: JSON.stringify(newList), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				res.json();
				setItems(newList);
			})
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	};

	const addItem = e => {
		if (e.keyCode === 13) {
			const item = e.target.value;
			const newItem = [
				...items,
				{
					label: item,
					done: false
				}
			];
			queryAPI(newItem);
			e.target.value = "";
		}
	};

	const deleteItem = id => {
		const filteredItems = items.filter((item, i) => i !== id);
		queryAPI(filteredItems);
	};

	return (
		<div className="container">
			<h1 className="text-center p-4">
				<i className="far fa-list-alt" />
				&nbsp; ToDo List
				<i className="fab fa-angellist" />
			</h1>

			<div className="card w-50 ">
				<ul className="list-group list-group-flush">
					<input
						className="list-group-item"
						onKeyDown={addItem}
						placeholder="What needs to be done?"
					/>
					{items.map((item, i) => (
						<div className="container-items" key={i}>
							<li
								key={i}
								className="list-group-item p-2 items"
								onClick={() => deleteItem(i)}>
								{item.label}
							</li>
							<div className="delete">
								<i className="far fa-trash-alt" />
							</div>
						</div>
					))}

					<p className="card-text p-2">
						<small className="text-muted">
							{items.length} {items.length > 1 ? `items` : `item`}{" "}
							left
						</small>
					</p>
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
