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

	fetch(url, {
		method: "POST", // or 'POST'
		body: JSON.stringify([]), // data can be `string` or {object}!
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(function(response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			// Read the response as json.
			return response.json();
		})
		.then(function(responseAsJson) {
			// Do stuff with the JSON
			console.log(responseAsJson);
		});
			});
	}, []);