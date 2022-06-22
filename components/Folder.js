import React, { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Folder = ({ select, selected, title, route }) => {
	const router = useRouter()

	const handleClick = (e) => {
		select(e, title)

		selected === title && router.push(route)
	}

	return (
		<div
			className={`${selected === title && 'active'} folder-container`}
			onClick={handleClick}
			key="5"
		>
			<div
				style={{
					padding: '4px 7px',
					borderRadius: '7px',
					backgroundColor:
						selected === title ? 'rgb(57, 56, 55)' : 'transparent',
				}}
			>
				<div className="img-container">
					<Image
						src={'/folder.svg'}
						layout="fill"
						alt="folder"
						style={{ maxWidth: '10px' }}
					/>
				</div>
			</div>
			<h3>{title}</h3>
		</div>
	)
}

export default Folder
