import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Search = () => {
	return (
		<div className='flex  border-2 border-[#4e5059] rounded-2xl mt-11 px-2 py-2 max-w-[350px] w-full mb-11'>
			<Icon
				icon='material-symbols:search'
				color='white'
				width='24'
				height='24'
				className='mr-3'
			/>
			<input
				type='text'
				className='bg-transparent placeholder:text-white text-white outline-none'
				placeholder='Search'
			/>
		</div>
	)
}

export default Search
