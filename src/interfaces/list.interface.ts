import { IMovies } from './movies.interface'

export interface IList {
	movies: IMovies
	title: string
	typeRequest: 'people' | 'movie' | 'tv'
}
