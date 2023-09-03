'use client'
import { MoviesService } from '@/src/services/movies.service'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import List from '../../ui/list/List'
import { PeopleService } from '@/src/services/people.service'
import Carousel from '../../ui/carousel/Carousel'
import Search from '../../ui/search/Search'
import { IHome } from '@/src/interfaces/home.inerface'
const Home: FC<IHome> = ({
	nowPlay,
	trandingMovie,
	trendingPeople,
	trendingTv,
	popular,
	topRated,
	upcoming,
}) => {
	console.log('trendingPeople', trendingPeople, trendingTv, 'trendingTv')
	return (
		<div>
			<div className='flex'>
				<Search />
			</div>
			<Carousel movies={trandingMovie} />
			<List
				typeRequest='movie'
				title='Trending Movies'
				movies={trandingMovie}
			/>
			<List
				movies={trendingPeople}
				typeRequest='people'
				title='Trending Peoples'
			/>
			<List movies={trendingTv} typeRequest='tv' title='Trending TV Series' />
			<List movies={nowPlay} typeRequest='movie' title='Now Playing' />
			<List movies={popular} typeRequest='movie' title='Popular' />
			<List typeRequest='movie' movies={topRated} title='Top Rated' />
			<List typeRequest='movie' movies={upcoming} title='Upcoming' />
		</div>
	)
}

export default Home
