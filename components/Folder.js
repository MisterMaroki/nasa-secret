import React, { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
const Folder = ({ select, selected, title, route }) => {
	return (
		<div
			className={`${selected === title && 'active'} folder-container`}
			onClick={(e) => select(e, title)}
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
