import { IMovies } from './movies.interface'

export interface IList {
	error: any
	isError: boolean
	isLoading: boolean
	movies: IMovies
	title: string
	typeRequest: 'people' | 'movie' | 'tv'
}
