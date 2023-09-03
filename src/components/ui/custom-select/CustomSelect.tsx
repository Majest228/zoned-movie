import { GenresService } from '@/src/services/genres.service'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import type { FC, MouseEventHandler } from 'react'
import { SelectProps } from '@/src/interfaces/select.interface'
import { useRouter } from 'next/navigation'

const CustomSelect: FC<SelectProps> = ({
	options,
	selected,
	onClose,
	onHadleChangeValue,
	type,
	title,
	refetch,
	setId,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const rootRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setIsOpen(false)
			}
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])

	const handlePlaceHolderClick = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div
			className='flex justify-between items-center w-[300px] bg-white rounded-md py-2 px-2 relative cursor-pointer'
			onClick={() => handlePlaceHolderClick()}
			ref={rootRef}
		>
			<div tabIndex={0}>
				<h3>{title}</h3>
				<p>{selected}</p>
			</div>
			<div>
				<Icon
					icon='ep:arrow-up'
					color='black'
					width='14'
					height='14'
					rotate={2}
				/>
			</div>

			{isOpen && (
				<div className='rounded-lg absolute grid grid-cols-3 z-50 top-[70px] bg-white list-none w-max left-0 px-4 py-4'>
					{options.map((o: any) => {
						return type == 'years' ? (
							<li
								className='pb-3 pr-7'
								onClick={() => {
									onClose
									onHadleChangeValue(o.name)
									refetch()
								}}
							>
								До {o.name} года
							</li>
						) : (
							<li
								className='pb-3'
								onClick={() => {
									onClose
									onHadleChangeValue(o.name)
									setId.current = o.id
									router.push(`/movies/${o.id}`)
								}}
							>
								{o.name}
							</li>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default CustomSelect
