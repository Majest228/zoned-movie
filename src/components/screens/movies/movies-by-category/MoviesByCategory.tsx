'use client'
import React, { FC } from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'
import { MoviesService } from '@/src/services/movies.service'
import Card from '@/src/components/ui/card/Card'
import { GenresService } from '@/src/services/genres.service'
const MoviesByCategory = () => {
	const params: any = useParams()

	const {
		data: moviesGenres,
		isLoading: isLoadingMoviesGenres,
		isError: isErrorMoviesGenres,
		error: errorMoviesGenres,
	} = useQuery({
		queryKey: 'movies-by-genre',
		queryFn: with_genres => MoviesService.getMovieByGenres(params?.id),
	})

	const {
		data: genres,
		isLoading: isLoadingGenres,
		isError: isErrorGenres,
		error: errorGenres,
	} = useQuery({
		queryKey: 'genres',
		queryFn: () => GenresService.getAllGenresMovie(),
	})
	const checkGenres = isLoadingGenres
		? []
		: genres.genres.find((g: any) => g.id == params.id)
	return (
		<div className='mt-11'>
			<h3 className='text-white text-[32px] pl-[5px] z-[10]'>
				{checkGenres.name}
			</h3>
			<div className=' grid grid-cols-[repeat(auto-fill,200px)]  gap-y-7 gap-x-4'>
				{isErrorMoviesGenres ? (
					//@ts-ignore
					<h3>{errorMoviesGenres?.message}</h3>
				) : isLoadingMoviesGenres ? (
					<h3>Loading...</h3>
				) : (
					moviesGenres.results.map((item: any) => (
						<Card
							movie={item}
							type={'big'}
							typeRequest={'movie'}
							height={300}
							width={200}
							borderRadius={24}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default MoviesByCategory
