import axios from 'axios'
export default {
   loggedIn () {
		return axios.get('/api/admin').then((res) => {
			if (res.data.code === '0') {
				return true
			} else {
				return false
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
	}
}