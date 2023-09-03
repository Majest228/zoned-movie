import { GenresService } from '@/src/services/genres.service'
import { INavigaiton } from '../../../../interfaces/navigation.interface'

export const navigation_menu: INavigaiton[] = [
	{
		title: 'Menu',
		items: [
			{
				id: 0,
				name: 'Home',
				link: '/',
				icon: 'material-symbols:home-outline',
			},
			{
				id: 1,
				name: 'Movies',
				link: '/movies',
				icon: 'material-symbols:movie-outline',
			},
			{
				id: 2,
				name: 'TV Series',
				link: '/tv-series',
				icon: 'material-symbols:tv-outline',
			},
			{
				id: 3,
				name: 'Person',
				link: '/person',
				icon: 'material-symbols:person-outline',
			},
			{
				id: 4,
				name: 'Companies',
				link: '/companies',
				icon: 'fluent-mdl2:company-directory',
			},
		],
	},
]

export const navigation_menu_movies = [
	{
		title: 'Types',
		items: [
			{
				id: 0,
				name: 'Anime',
				link: '/movies/anime',
				icon: 'material-symbols:home-outline',
			},
			{
				id: 1,
				name: 'Movies',
				link: '/movies',
				icon: 'material-symbols:movie-outline',
			},
			{
				id: 2,
				name: 'TV Series',
				link: '/tv-series',
				icon: 'material-symbols:tv-outline',
			},
			{
				id: 3,
				name: 'Person',
				link: '/person',
				icon: 'material-symbols:person-outline',
			},
			{
				id: 4,
				name: 'Companies',
				link: '/companies',
				icon: 'fluent-mdl2:company-directory',
			},
		],
	},
]
