import fetch from 'node-fetch'


const getPost = async (url: string): Promise<object> => {

	const prom: Promise<object> = new Promise<object>((resolve) => {
		fetch(url, {
			headers: {
				"accept": "application/json, text/plain, */*",
			},
			body: null,
			method: "GET",
		})
			.then(res => res.ok ? res.json() : console.error(res))
			.then(data => resolve(data))
	})

	await Promise.all([prom])
	return prom
}


export { getPost }