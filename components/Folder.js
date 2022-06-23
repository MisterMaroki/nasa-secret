import React, { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Draggable from 'react-draggable'

const Folder = ({ select, selected, title, route, index }) => {
	const router = useRouter()

	const handleClick = (e) => {
		select(e, index)

		selected === index && router.push(route) && select(e, null)
	}

	return (
		<Draggable>
			<div
				className={`${selected === index && 'active'} folder-container`}
				onClick={handleClick}
				key="5"
			>
				<div
					style={{
						padding: '10px ',
						borderRadius: '7px',
						backgroundColor:
							selected === index ? 'rgb(57, 56, 55)' : 'transparent',
					}}
				>
					<div className="img-container">
						<Image
							src={'/folder.svg'}
							layout="fill"
							alt="folder"
							draggable="false"
						/>
					</div>
				</div>
				<h3>{title}</h3>
			</div>
		</Draggable>
	)
}

export default Folder
