'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { useQuery, useQueryClient } from 'react-query'
import { MoviesService } from '@/src/services/movies.service'
import Card from '@/src/components/ui/card/Card'
import { GenresService } from '@/src/services/genres.service'
import { Icon } from '@iconify/react/dist/iconify.js'
import { moviesFilter } from '../moviesFilter'
import { IMoviesfilters } from '@/src/interfaces/movies.interface'
import CardSkeleton from '@/src/components/ui/skeletons/CardSkeleton'
import CustomSelect from '@/src/components/ui/custom-select/CustomSelect'
import { useGetAllYears } from '@/src/hooks/useGetAllYears'
const MoviesByCategory = () => {
	const queryClient = useQueryClient()
	const [currentPage, setCurrentPage] = useState(1)
	const params: any = useParams()

	const filterKey = useRef('popularity.asc')
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const {
		data: genres,
		isLoading: isLoadingGenres,
		isError: isErrorGenres,
		error: errorGenres,
	} = useQuery({
		queryKey: 'genres',
		queryFn: () => GenresService.getAllGenresMovie(),
	})

	const [genresName, setGenresName] = useState('')
	const genresId = useRef(params.id)

	// const [yearsName, setYearsName] = useState(0)
	const yearsName = useRef(0)

	const checkGenres = isLoadingGenres
		? []
		: genres.genres.find((g: any) => g.id == genresId.current)

	const { years } = useGetAllYears()
	const {
		data: moviesGenres,
		isLoading: isLoadingMoviesGenres,
		isError: isErrorMoviesGenres,
		error: errorMoviesGenres,
		refetch: moviesGenresRefetch,
		status,
		isFetched,
		isFetching,
		isRefetching,
	} = useQuery({
		queryKey: 'movies-by-genre',
		queryFn: ({ with_genres, sort_by, year, page }: any) =>
			MoviesService.getMovieByGenres(
				genresId.current,
				filterKey?.current,
				yearsName.current,
				currentPage
			),
	})

	useEffect(
		() =>
			console.log(
				'status',
				status,
				'isFetching',
				isFetching,
				'isFetched',
				isFetched,
				'isRefetching',
				isRefetching
			),
		[status, isRefetching, isFetched]
	)
	const onHadleChangeValueYears = (value: number) => {
		yearsName.current = value
		queryClient.invalidateQueries('movies-by-genre')
	}
	const onHadleChangeValueGenres = (value: string) => {
		setGenresName(value)
		queryClient.invalidateQueries('movies-by-genre')
	}

	return (
		<div className='mt-11'>
			<h3 className='text-white text-5xl mb-4 pl-[5px] z-[10]'>
				{checkGenres.name}
			</h3>
			{/* //sorted */}
			<div className='mb-4  relative'>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center cursor-pointer'
				>
					<Icon
						className='mr-3'
						icon='bi:filter'
						color='white'
						width='24'
						height='24'
					/>
					<ul>
						{moviesFilter.map((movie: IMoviesfilters) => {
							return movie.sort == filterKey?.current ? (
								<button
									id={String(movie.id)}
									onChange={() => (filterKey.current = movie.sort)}
									className='text-white'
								>
									{movie.name}
								</button>
							) : (
								''
							)
						})}
					</ul>
					<Icon
						className='ml-3'
						icon='bx:up-arrow'
						width='16'
						color='white'
						height='16'
						rotate={2}
					/>
				</div>
				{isOpen ? (
					<div className='absolute bg-[#f7f7fe] w-max top-10 z-50'>
						<h3 className='text-slate-700 px-4 py-2'>Сортировать</h3>
						<ul>
							{moviesFilter.map((movie: IMoviesfilters) => (
								<div
									className={`${
										movie.sort == filterKey?.current
											? 'border-l-4 border-red-600'
											: ''
									}`}
								>
									<button
										onClick={() => {
											filterKey.current = movie.sort
											setIsOpen(false)
											moviesGenresRefetch()
										}}
										id={String(movie.id)}
										value={movie.sort}
										className={`${
											movie.sort == filterKey?.current
												? 'py-2 px-4'
												: 'transition-all py-2 px-4 hover:border-l-4 hover:border-red-600'
										}`}
									>
										{movie.name}
									</button>
								</div>
							))}
						</ul>
					</div>
				) : (
					''
				)}
			</div>
			{/* //filter */}
			<div className='bg-[#c8c8c8] max-w-[700px] w-full flex justify-between px-6 py-4 mb-5 rounded-md'>
				<CustomSelect
					options={isLoadingGenres ? [] : genres.genres}
					selected={genresName == '' ? checkGenres.name : genresName}
					onHadleChangeValue={onHadleChangeValueGenres}
					refetch={moviesGenresRefetch}
					setId={genresId}
					title='Genres'
					key='genres'
					type='genres'
				/>
				<CustomSelect
					options={years}
					selected={yearsName.current == 0 ? '' : yearsName.current}
					title='Years'
					refetch={moviesGenresRefetch}
					onHadleChangeValue={onHadleChangeValueYears}
					key='years'
					type='years'
				/>
			</div>
			{/* //grid cards */}
			<div className='grid grid-cols-[repeat(auto-fill,200px)]  gap-y-7 gap-x-4'>
				{isErrorMoviesGenres ? (
					//@ts-ignore
					<h3>{errorMoviesGenres?.message}</h3>
				) : isLoadingMoviesGenres || isFetching ? (
					new Array(20).fill(0).map(_ => (
						<div className='max-w-[240px] z-[10]'>
							<CardSkeleton />
						</div>
					))
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
