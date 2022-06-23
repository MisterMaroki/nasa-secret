import React, { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Draggable from 'react-draggable'
import { isMobile } from 'react-device-detect'

const Folder = ({ select, selected, title, route, index }) => {
	const router = useRouter()
	const nodeRef = React.useRef(null)
	const handleClick = (e) => {
		select(e, index)

		selected === index && router.push(route) && select(e, null)
	}

	return (
		<>
			{!isMobile ? (
				<Draggable nodeRef={nodeRef}>
					<Element
						title={title}
						nodeRef={nodeRef}
						selected={selected}
						index={index}
						handleClick={handleClick}
					/>
				</Draggable>
			) : (
				<Element
					title={title}
					nodeRef={nodeRef}
					selected={selected}
					index={index}
					handleClick={handleClick}
				/>
			)}
		</>
	)
}

export default Folder

const Element = ({ title, nodeRef, selected, index, handleClick }) => (
	<div
		ref={nodeRef}
		className={`${selected === index && 'active'} folder-container`}
		onClick={handleClick}
		key="5"
	>
		<div
			style={{
				padding: '10px ',
				borderRadius: '7px',
				backgroundColor: selected === index ? 'rgb(57, 56, 55)' : 'transparent',
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
)
