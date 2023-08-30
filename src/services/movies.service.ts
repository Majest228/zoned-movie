import { axiosWithToken } from '../api/api'

export const MoviesService = {
	async getMoviesByType(type: string) {
		const res = await axiosWithToken.get(`movie/${type}?language=us-EN`)
		return res.data
	},
	async getMoviesByTrand() {
		const res = await axiosWithToken.get('trending/movie/day?language=us-EN')
		return res.data
	},
	async getTVByTrand() {
		const res = await axiosWithToken.get('trending/tv/day?language=us-EN')
		return res.data
	},

	async getMovieByGenres(with_genres: number) {
		const res = await axiosWithToken.get(
			`discover/movie?with_genres=${with_genres}`
		)
		return res.data
	},
}
