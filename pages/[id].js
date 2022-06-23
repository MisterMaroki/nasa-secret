import React from 'react'
import Folder from '../components/Folder'
import { SelectionState } from '../context/SelectionContext'
import data from '../data'
import styles from '../styles/Auth.module.scss'

const FolderPage = ({ folder }) => {
	const thisData = data.filter((x) => x.name === folder)[0].endpoints
	const { select, selected } = SelectionState()
	// const thisDataMap = thisData.map(({ endpoint, query }, index) =>
	// 	data[index] ? (
	// 		<ImageFile key={endpoint} title={endpoint} query={query} />
	// 	) : null
	// )

	const thisDataMap = thisData.map(({ endpoint, query }, index) => (
		<Folder
			key={endpoint}
			title={endpoint}
			route={`${folder}/${endpoint}`}
			select={select}
			selected={selected}
		/>
	))

	// <Folder
	// 				select={select}
	// 				selected={selected}
	// 				title="NASA"
	// 				route="/nasa"
	// 			/>
	console.log('🚀 ~ file: [id].js ~ line 5 ~ FolderPage ~ thisData', thisData)

	return <div className={styles.container}>{thisDataMap}</div>
}

export default FolderPage

export async function getServerSideProps(context) {
	return {
		props: { folder: `${context.params.id}` }, // will be passed to the page component as props
	}
}
