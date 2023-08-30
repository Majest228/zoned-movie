// import Link from 'next/link'
// import { Icon } from '@iconify/react'
import { FC } from 'react'
import { useQuery } from 'react-query'
import NavigationLogo from './navigation-logo/NavigationLogo'
import NavigationMenu from './navigation-menu/NavigationMenu'
import { navigation_menu } from './navigation-menu/navigation'
import { GenresService } from '@/src/services/genres.service'
import { useCreateDateToArray } from '@/src/hooks/useCreateDateToArray'
import styles from '../Layout.module.scss'
import { INavigaiton } from '../../../interfaces/navigation.interface'

const Navigation: FC = () => {
	const {
		data: genres,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['genres'],
		queryFn: () => GenresService.getAllGenresMovie(),
	})
	const { newArray } = useCreateDateToArray({
		title: 'Genres',
		array: isLoading ? [] : genres?.genres,
	})

	console.log('newArray', newArray)
	return (
		<div className='fixed border-r-2 h-full border-white max-w-[300px] w-full'>
			<NavigationLogo />
			{navigation_menu.map((menu: INavigaiton) => (
				<NavigationMenu title={menu.title} items={menu.items} />
			))}
			{newArray.map((menu: INavigaiton) => (
				<NavigationMenu title={menu.title} items={menu.items} />
			))}
		</div>
	)
}

export default Navigation
