import { IMovie } from './movie.interface'

export interface IMovies {
	page: number
	results: IMovie[]
	total_pages: number
	total_results: number
}

export interface IMoviesfilters {
	id: number
	sort: string
	name: string
}
