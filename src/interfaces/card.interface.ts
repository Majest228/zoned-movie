import { IMovie } from './movie.interface'

export interface ICard {
	width: number
	height: number
	borderRadius: number
	movie: IMovie
	typeRequest: 'movie' | 'tv' | 'people'
	type: 'small' | 'big'
}
