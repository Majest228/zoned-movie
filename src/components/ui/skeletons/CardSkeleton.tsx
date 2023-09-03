import React from 'react'
import ContentLoader from 'react-content-loader'

const CardSkeleton = (props: any) => {
	return (
		<ContentLoader
			speed={5}
			width={1280}
			height={400}
			viewBox='0 0 1280 400'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}
		>
			<rect x='8' y='0' rx='24' ry='24' width='202' height='300' />
			<rect x='8' y='308' rx='12' ry='12' width='202' height='50' />
			<rect x='9' y='366' rx='12' ry='12' width='202' height='23' />
		</ContentLoader>
	)
}

export default CardSkeleton
