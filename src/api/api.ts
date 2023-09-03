import axios from 'axios'
export const URL = 'https://api.themoviedb.org/3/'
export const authorization =
	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGIyMjVjZjgwNmExZWIwNDJmMTZlNDE4YzFhYWQ1YyIsInN1YiI6IjY0ZTg2MDgyMWZlYWMxMDBlMTY5ZWIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZHpiYwlNwkr_Z9gpOh20t4eaEZ1p-BTFSOcxBvurKE'
const axiosWithToken = axios.create({
	baseURL: URL,
	headers: {
		Authorization: authorization,
	},
})

const axiosWithoutToken = axios.create({
	baseURL: URL,
})

export { axiosWithToken, axiosWithoutToken }
