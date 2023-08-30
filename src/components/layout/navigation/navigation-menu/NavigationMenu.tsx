import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React, { FC } from 'react'
import { INavigaiton } from '../../../../interfaces/navigation.interface'

const NavigationMenu: FC<INavigaiton> = ({ items, title }) => {
	return (
		<div className='mb-11'>
			<div className='text-gray-50 uppercase text-sm font-semibold pl-[44px]'>
				<h3>{title}</h3>
			</div>
			<ul className=''>
				{items.map(item => (
					<li
						key={item.id}
						className='px-[44px] border-r-4 border-r-transparent transition-colors'
					>
						<Link
							className='flex  text-gray-200 mt-6 cursor-pointer'
							href={title == 'Menu' ? `${item.link}` : `/movies/${item.link}`}
						>
							<Icon
								className='block mr-3'
								icon={item.icon}
								color='white'
								width='24'
								height='24'
							/>
							<span className='text-lg hover:text-red-500 transition-all'>
								{item.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavigationMenu
