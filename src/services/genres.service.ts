import { axiosWithToken } from '../api/api'

export const GenresService = {
	async getAllGenresMovie() {
		const res = await axiosWithToken.get(`genre/movie/list?language=us-EN`)
		return res.data
	},
}
