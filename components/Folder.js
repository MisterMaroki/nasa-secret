import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import Image from 'next/image'
const Folder = () => {
	return (
		<div className="folder-container">
			{/* <FolderIcon size="large" sx={{ fontSize: "6rem" }} /> */}
			<Image src={'/folder.svg'} layout="fill" alt="folder" />
		</div>
	)
}

export default Folder
