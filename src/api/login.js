import axios from 'axios'
export function auth (){
	return axios.get('/api/admin').then((res) => {
		return Promise.resolve(res)
	}).catch((error) => {
		return Promise.reject(error)
	})
}