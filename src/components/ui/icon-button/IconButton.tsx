import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import { IIconButton } from './icon-button.interface'

const IconButton = ({
	classes,
	icon,
	color,
	width,
	height,
	text,
}: IIconButton) => {
	const [hovered, setHovered] = useState<boolean>(false)
	return (
		<button
			className={`z-[99] ${classes}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Icon icon={icon} color={color} width={width} height={height} />
			{hovered && (
				<div className='absolute bg-slate-900 z-[99]  text-xs rounded-md py-2 w-max px-3 top-0 ml-7  text-white'>
					{text}
				</div>
			)}
		</button>
	)
}

export default IconButton
