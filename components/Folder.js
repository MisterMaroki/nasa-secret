import React, { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
const Folder = () => {
	const [selected, setSelected] = useState(false)

	const select = (e) => {
		e.stopPropagation()
		setSelected(true)
	}
	window.addEventListener('click', (e) => {
		// console.log(e.target.toString())
		setSelected(false)
	})
	return (
		<div
			className={`${selected && 'active'} folder-container`}
			onClick={select}
			key="5"
		>
			<div
				style={{
					padding: '4px 7px',
					borderRadius: '7px',
					backgroundColor: selected ? 'rgb(57, 56, 55)' : 'transparent',
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
			<h3>NASA</h3>
		</div>
	)
}

export default Folder
