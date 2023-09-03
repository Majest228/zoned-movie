import { IMovie } from './movie.interface'
import { IMovies } from './movies.interface'

export interface IHome {
	nowPlay: IMovies
	trandingMovie: IMovies
	trendingPeople: IMovies
	trendingTv: IMovies
	popular: IMovies
	topRated: IMovies
	upcoming: IMovies
}
