import React, { FC, useState } from 'react'

import { Icon } from '@iconify/react/dist/iconify.js'
import { carousel } from './carouselItems'
import { ICarousel, ICarouselItems } from '@/src/interfaces/carousel.interface'
const Carousel: FC<ICarouselItems> = ({
	movies,
	isLoading,
	isError,
	error,
}) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const goToNextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
		)
	}

	const goToPrevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
		)
	}
	return (
		<div className='relative overflow-hidden w-full rounded-3xl select-none '>
			<div className='w-full m-0-a'>
				<div
					className='flex w-full h-full transition-transform duration-500 ease-in-out'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{carousel?.map((slide: ICarousel) => (
						<div
							key={slide.id}
							style={{
								backgroundImage: `url(${slide?.banner.src})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
							className='flex-shrink-0 w-full h-[500px] flex relative'
						>
							<div>
								<button
									onClick={() => goToPrevSlide()}
									className='mr-6 absolute left-5 top-[45%]'
								>
									<Icon
										icon='teenyicons:left-outline'
										color='white'
										width='32'
										height='32'
									/>
								</button>
								<button
									onClick={() => goToNextSlide()}
									className=' absolute right-5 top-[45%]'
								>
									<Icon
										icon='teenyicons:right-outline'
										color='white'
										width='32'
										height='32'
									/>
								</button>
							</div>
							<div className='flex flex-col justify-end pl-[66px]'>
								<h3 className='text-white text-6xl pb-4'>{slide.title}</h3>

								<div className='flex pb-14'>
									<button className='text-white text-2xl bg-red-600 rounded-2xl py-4 px-4'>
										Watch
									</button>
									<button className='bg-red-600 ml-6 rounded-2xl py-4 px-4'>
										<Icon
											icon='ic:baseline-plus'
											color='white'
											width='24'
											height='24'
										/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
