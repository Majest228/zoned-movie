'use client'
import React, { FC, useState } from 'react'
import item from '../../../assets/item.jpg'
import Image from 'next/image'
import { useGetDate } from '@/src/hooks/useGetDate'
import { useGetImageUrl } from '@/src/hooks/useGetImageUrl'
import { Icon } from '@iconify/react/dist/iconify.js'
import IconButton from '../icon-button/IconButton'
import { ICard } from '@/src/interfaces/card.interface'
import errorImg from '../../../assets/error.jpg'
const Card: FC<ICard> = ({
	width = 226,
	height = 280,
	borderRadius = 24,
	movie,
	typeRequest,
	type,
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const { monthName, day, year } = useGetDate(
		typeRequest == 'movie'
			? movie?.release_date
			: typeRequest == 'tv'
			? movie.first_air_date
			: ''
	)

	return (
		<>
			{type == 'small' ? (
				<div
					className={`relative flex-shrink-0 w-full h-full cursor-pointer`}
					style={{ width: `${width}px` }}
				>
					<div className='flex flex-col  '>
						<Image
							src={
								movie?.poster_path == null || movie?.profile_path == null
									? errorImg.src
									: useGetImageUrl(
											typeRequest == 'movie'
												? movie?.poster_path
												: movie?.profile_path
									  )
							}
							alt={'alt'}
							width={width}
							height={height}
							style={{
								width: '100%',
								height: '100%',
								borderRadius: `${borderRadius}px`,
								objectFit: 'cover',
								zIndex: 50,
							}}
						/>
						<div>
							<h3 className='text-gray-300 mt-2 text-[16px] text-center font-semibold'>
								{typeRequest == 'movie' ? movie.title : movie.name}
							</h3>
							{typeRequest == 'movie' || typeRequest == 'tv' ? (
								<p className='text-gray-400 text-[14px] text-center font-semibold'>
									{day + ' ' + monthName + ' ' + year}
								</p>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			) : (
				<div
					className={`relative flex-shrink-0 w-full h-full cursor-pointer`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					style={{ width: `${width}px` }}
				>
					<div
						className={`relative z-[0] ${
							isHovered
								? 'z-[10] transform scale-103 transition-transform duration-500'
								: 'z-[10] transition-transform duration-500'
						} `}
						style={{ width: `${width}px`, height: `${height}px` }}
					>
						{isHovered && (
							<div className='z-[0] absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-3xl transition-opacity duration-300'>
								{typeRequest == 'movie' ? (
									<>
										<div
											className={`relative flex flex-col items-start ml-3 mt-5 z-[50]`}
										>
											<IconButton
												text='Смотреть позже'
												width='28'
												height='28'
												classes='pb-2 relative '
												color='white'
												icon='material-symbols:history'
											/>
											<IconButton
												text='Похожее'
												width='28'
												height='28'
												classes='pb-2 relative '
												color='white'
												icon='mdi:wand'
											/>
											<IconButton
												text='Уже смотрел, оценить'
												width='28'
												height='28'
												classes='pb-2 relative '
												color='white'
												icon='mdi:star-outline'
											/>
											<IconButton
												text='Не нравится такое'
												width='28'
												height='28'
												classes='pb-2 relative'
												color='white'
												icon='ic:baseline-not-interested'
											/>
										</div>
									</>
								) : (
									''
								)}
							</div>
						)}
						<Image
							src={
								movie?.poster_path === null || movie?.profile_path === null
									? errorImg.src
									: useGetImageUrl(
											typeRequest == 'movie' || typeRequest == 'tv'
												? movie?.poster_path
												: movie?.profile_path
									  )
							}
							alt={'alt'}
							width={width}
							height={height}
							sizes='100vw'
							style={{
								width: '100%',
								height: '100%',
								borderRadius: `${borderRadius}px`,
								objectFit: 'cover',
								zIndex: 50,
							}}
						/>
					</div>
					<h3 className='text-gray-300 mt-2 text-[16px] font-semibold'>
						{typeRequest == 'movie'
							? movie.title == '' || null || undefined
								? movie.original_title
								: movie.title
							: movie.name == '' || null || undefined
							? ''
							: movie.name}
					</h3>
					{typeRequest == 'movie' || typeRequest == 'tv' ? (
						<p className='text-gray-400 text-[14px] font-semibold'>
							{day + ' ' + monthName + ' ' + year}
						</p>
					) : (
						''
					)}
				</div>
			)}
		</>
	)
}

export default Card
