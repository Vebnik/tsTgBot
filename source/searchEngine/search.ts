import { getPost } from './searchUtil'


const search = (query: string): Promise<object> => {

	const url: string = `https://www.deviantart.com/_napi/da-browse/api/networkbar/search/deviations?q=${query}`

	return getPost(url)
}


export { search }