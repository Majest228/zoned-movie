import { IMoviesfilters } from '@/src/interfaces/movies.interface'

export const moviesFilter: IMoviesfilters[] = [
	{
		id: 0,
		sort: 'popularity.asc',
		name: 'Popular by ASC',
	},
	{
		id: 1,
		sort: 'popularity.desc',
		name: 'Popular by DESC',
	},
	{
		id: 2,
		sort: 'revenue.asc',
		name: 'Revenue by ASC',
	},
	{
		id: 3,
		sort: 'revenue.desc',
		name: 'Revenue by DESC',
	},
	{
		id: 4,
		sort: 'primary_release_date.asc',
		name: 'Primary release date by ASC',
	},
	{
		id: 5,
		sort: 'primary_release_date.desc',
		name: 'Primary release date by DESC',
	},
	{
		id: 6,
		sort: 'vote_average.asc',
		name: 'Vote average by ASC',
	},
	{
		id: 7,
		sort: 'vote_average.desc',
		name: 'Vote average by DESC',
	},
	{
		id: 8,
		sort: 'vote_count.asc',
		name: 'Vote count by ASC',
	},
	{
		id: 9,
		sort: 'vote_count.desc',
		name: 'Vote count by DESC',
	},
]
