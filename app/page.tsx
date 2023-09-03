import { URL, authorization } from '@/src/api/api'
import Home from '@/src/components/screens/home/Home'
import { FC } from 'react'
import { FetchContext } from 'react-query/types/core/query'

const loadMoviesByType = async (type: string) => {
	const res = await fetch(`${URL}/movie/${type}?language=us-EN`, {
		headers: {
			Authorization: authorization,
		},
		next: { revalidate: 86400 },
	})
	const data = await res.json()

	return data
}

const loadMoviesByTrand = async () => {
	const res = await fetch(`${URL}/trending/movie/day?language=us-EN`, {
		headers: {
			Authorization: authorization,
		},
		next: { revalidate: 86400 },
	})
	const data = await res.json()

	return data
}

const loadMoviesByTrendingPeople = async () => {
	const res = await fetch(`${URL}/trending/person/day`, {
		headers: {
			Authorization: authorization,
		},
		next: { revalidate: 86400 },
	})
	const data = await res.json()

	return data
}
const loadMoviesByTrendingTV = async () => {
	const res = await fetch(`${URL}/trending/tv/day?language=us-EN`, {
		headers: {
			Authorization: authorization,
		},
		next: { revalidate: 86400 },
	})
	const data = await res.json()

	return data
}

const HomePage: FC = async () => {
	const nowPlay = await loadMoviesByType('now_playing')
	const popular = await loadMoviesByType('popular')
	const trandingMovie = await loadMoviesByTrand()
	const topRated = await loadMoviesByType('top_rated')
	const upcoming = await loadMoviesByType('upcoming')
	const trendingPeople = await loadMoviesByTrendingPeople()
	const trendingTV = await loadMoviesByTrendingTV()
	console.log('trandingMovie', trandingMovie)
	return (
		<Home
			nowPlay={nowPlay}
			trandingMovie={trandingMovie}
			trendingPeople={trendingPeople}
			trendingTv={trendingTV}
			popular={popular}
			topRated={topRated}
			upcoming={upcoming}
		/>
	)
}

export default HomePage
