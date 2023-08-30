import React, { useState, useEffect, useRef, FC } from 'react'
import Card from '@/src/components/ui/card/Card'
import { Icon } from '@iconify/react'
import './List.css'
import { IList } from '@/src/interfaces/list.interface'
const List: FC<IList> = ({
	error,
	isError,
	isLoading,
	movies,
	title,
	typeRequest,
}) => {
	const boxRef = useRef<any>(null)
	const [iconHovered, setIconHovered] = useState(0)

	const handleIconHover = (iconIndex: number) => {
		setIconHovered(iconIndex)
	}

	const handleIconMouseLeave = () => {
		setIconHovered(0)
	}

	const iconStyles = {
		width: '24px',
		height: '24px',
		transition: 'color 0.3s ease',
	}

	const btnpressprev = () => {
		const box = boxRef.current
		if (box) {
			const width = box.clientWidth
			const scrollLeft = box.scrollLeft
			if (scrollLeft === 0) {
				box.scrollLeft = box.scrollWidth - width
			} else {
				box.scrollLeft -= width
			}
		}
	}
	const btnpressnext = () => {
		const box = boxRef.current
		if (box) {
			const width = box.clientWidth
			const scrollLeft = box.scrollLeft
			const numMovies = movies?.results?.length || 0
			const maxScrollLeft = box.scrollWidth - width

			if (scrollLeft >= maxScrollLeft - 10 && numMovies > 0) {
				box.scrollLeft = 0
			} else {
				box.scrollLeft += width
			}
		}
	}

	return (
		<div className='mt-8 relative overflow-hidden'>
			<div className='flex items-center justify-between'>
				<h3 className='text-white text-[32px] pl-[5px] z-[10]'>{title}</h3>
				<div>
					<button onClick={() => btnpressprev()} className='mr-6'>
						<Icon
							style={{
								...iconStyles,
								color: iconHovered === 1 ? 'yellow' : 'white',
							}}
							onMouseEnter={() => handleIconHover(1)}
							onMouseLeave={handleIconMouseLeave}
							icon='teenyicons:left-outline'
							color='white'
							width='24'
							height='24'
						/>
					</button>
					<button onClick={() => btnpressnext()} className='border-slate-100 '>
						<Icon
							style={{
								...iconStyles,
								color: iconHovered === 2 ? 'yellow' : 'white',
							}}
							onMouseEnter={() => handleIconHover(2)}
							onMouseLeave={handleIconMouseLeave}
							icon='teenyicons:right-outline'
							color='white'
							width='24'
							height='24'
						/>
					</button>
				</div>
			</div>
			<div
				className='test pl-[5px] pr-[5px] flex pt-3 overflow-x-auto scroll-smooth z-[10] flex-nowrap items-start gap-[15px]'
				ref={boxRef}
			>
				{isError ? (
					<h3>{error?.message}</h3>
				) : isLoading ? (
					<h3>Loading...</h3>
				) : (
					movies?.results?.map((movie: any) => (
						<div className='max-w-[240px] z-[10]' key={movie.id}>
							<Card
								borderRadius={24}
								height={300}
								width={202}
								typeRequest={typeRequest}
								movie={movie}
								type={'big'}
							/>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default List
