import { getPost } from './searchUtil'


const search = (query: string): object => {

	getPost(query).then(res => {
		console.log(res)
	})

	return
}


export { search }