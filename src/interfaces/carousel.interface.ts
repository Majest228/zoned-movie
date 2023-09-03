import { StaticImageData } from 'next/image'
import { IMovie } from './movie.interface'
import { IMovies } from './movies.interface'

export interface ICarousel {
	id: number
	banner: StaticImageData
	title: string
	overview: string
}

export interface ICarouselItems {
	movies: IMovies
}
