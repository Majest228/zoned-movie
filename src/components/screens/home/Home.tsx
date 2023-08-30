'use client'
import { MoviesService } from '@/src/services/movies.service'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import List from '../../ui/list/List'
import { PeopleService } from '@/src/services/people.service'
import Carousel from '../../ui/carousel/Carousel'
import Search from '../../ui/search/Search'
const Home: FC = () => {
	const {
		data: nowPlay,
		isLoading: isLoadinNowPlay,
		isError: isErrorNowPlay,
		error: errorNowPlay,
	} = useQuery({
		queryKey: ['now_playing'],
		queryFn: () => MoviesService.getMoviesByType('now_playing'),
	})

	const {
		data: trandingMovie,
		isLoading: isLoadinTrandingMovie,
		isError: isErrorTrandingMovie,
		error: errorTrandingMovie,
	} = useQuery({
		queryKey: ['trending-movie'],
		queryFn: () => MoviesService.getMoviesByTrand(),
	})

	const {
		data: trendingPeople,
		isLoading: isLoadinTrendingPeople,
		isError: isErrorTrendingPeople,
		error: errorTrendingPeople,
	} = useQuery({
		queryKey: ['trending-people'],
		queryFn: () => PeopleService.getPeopleByTrend(),
	})

	const {
		data: trendingTv,
		isLoading: isLoadinTrendingTv,
		isError: isErrorTrendingTv,
		error: errorTrendingTv,
	} = useQuery({
		queryKey: ['trending-tv'],
		queryFn: () => MoviesService.getTVByTrand(),
	})

	const {
		data: popular,
		isLoading: isLoadinPopular,
		isError: isErrorPopular,
		error: errorPopular,
	} = useQuery({
		queryKey: ['popular'],
		queryFn: () => MoviesService.getMoviesByType('popular'),
	})
	const {
		data: topRated,
		isLoading: isLoadinTopRated,
		isError: isErrorTopRated,
		error: errorTopRated,
	} = useQuery({
		queryKey: ['top_rated'],
		queryFn: () => MoviesService.getMoviesByType('top_rated'),
	})
	const {
		data: upcoming,
		isLoading: isLoadinUpcoming,
		isError: isErrorUpcoming,
		error: errorUpcoming,
	} = useQuery({
		queryKey: ['upcoming'],
		queryFn: () => MoviesService.getMoviesByType('upcoming'),
	})

	return (
		<div>
			<div className='flex'>
				<Search />
			</div>

			<Carousel
				movies={trandingMovie}
				isLoading={isLoadinTrandingMovie}
				isError={isErrorTrandingMovie}
				error={errorTrandingMovie}
			/>
			<List
				movies={trandingMovie}
				isLoading={isLoadinTrandingMovie}
				isError={isErrorTrandingMovie}
				error={errorTrandingMovie}
				typeRequest='movie'
				title='Trending Movies'
			/>
			<List
				movies={trendingPeople}
				isLoading={isLoadinTrendingPeople}
				isError={isErrorTrendingPeople}
				error={errorTrendingPeople}
				typeRequest='people'
				title='Trending Peoples'
			/>
			<List
				movies={trendingTv}
				isLoading={isLoadinTrendingTv}
				isError={isErrorTrendingTv}
				error={errorTrendingTv}
				typeRequest='tv'
				title='Trending TV Series'
			/>
			<List
				movies={nowPlay}
				isLoading={isLoadinNowPlay}
				isError={isErrorNowPlay}
				error={errorNowPlay}
				typeRequest='movie'
				title='Now Playing'
			/>
			<List
				movies={popular}
				isLoading={isLoadinPopular}
				isError={isErrorPopular}
				error={errorPopular}
				typeRequest='movie'
				title='Popular'
			/>

			<List
				typeRequest='movie'
				movies={topRated}
				isLoading={isLoadinTopRated}
				isError={isErrorTopRated}
				error={errorTopRated}
				title='Top Rated'
			/>
			<List
				typeRequest='movie'
				movies={upcoming}
				isLoading={isLoadinUpcoming}
				isError={isErrorUpcoming}
				error={errorUpcoming}
				title='Upcoming'
			/>
		</div>
	)
}

export default Home
