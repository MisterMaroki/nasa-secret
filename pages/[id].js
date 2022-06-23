import React from 'react'
import Folder from '../components/Folder'
import { SelectionState } from '../context/SelectionContext'
import data from '../data'
import styles from '../styles/Auth.module.scss'

const FolderPage = ({ folder }) => {
	const thisData = data.filter((x) => x.name === folder)[0]?.endpoints
	const { select, selected } = SelectionState()

	const thisDataMap = thisData?.map(({ name }, index) => (
		<Folder
			key={name}
			title={name}
			route={`${folder}/${name}`}
			select={select}
			selected={selected}
			index={index}
		/>
	))

	return <div className={styles.container}>{thisDataMap}</div>
}

export default FolderPage

export async function getServerSideProps(context) {
	return {
		props: { folder: `${context.params.id}` }, // will be passed to the page component as props
	}
}
