import { axiosWithToken } from '../api/api'

export const PeopleService = {
	async getPeopleByTrend() {
		const res = await axiosWithToken.get('/trending/person/day')
		return res.data
	},
}
